import axios from "axios";
import compact from "lodash/compact";
import { apiConfig } from "../config";
import moment from "moment";
import { transformData } from "../helper/transformData";

const formatQueryParams = (source, queryParams) => {
  const { q, date, tags } = queryParams;
  let queryString = "";
  let searchString = [];
  let tagString = [];
  switch (source) {
    case "theguardian":
    case "newsapi": {
      queryString = "a";
      let qString = [];
      if (q.trim() !== "") {
        searchString.push(q);
      }
      if (tags.length > 0) {
        tagString = tags.join(" OR ");
        searchString.push(`(${tagString})`);
      }
      if (qString.length !== 0) {
        tagString = tagString.join(" OR ");
        searchString.push(`(${tagString})`);
      }
      if (searchString.length > 0) {
        queryString = searchString.join(" AND ");
      }
      if (date && date !== "" && new Date(date)) {
        const dateFormatted = moment(date).format("YYYY-MM-DD");
        queryString += `&from${
          source === "newsapi" ? "=" : "-date="
        }${dateFormatted}`;
      }
      return queryString;
    }
    case "nytimes": {
      let queryString = [];
      if (q.trim() !== "") {
        queryString.push(`q=${q}`);
      }
      if (tags.length > 0) {
        const formatedTags = tags.map((item) => '"' + item + '"').join();
        queryString.push(`fq=news_desk:(${formatedTags})`);
      }
      if (date && date !== "" && new Date(date)) {
        const dateFormatted = moment(date).format("YYYY-MM-DD");
        queryString.push(`pub_date=${dateFormatted}`);
      }

      const queryParams = queryString.join("&");
      return queryParams;
    }
    default: {
      return "all";
    }
  }
};

export const nytimesApi = async (sourceName, queryParams) => {
  const queryString = formatQueryParams(sourceName, queryParams);
  const api = apiConfig.find(({ name }) => name === sourceName);
  const response = await axios.get(
    `${api.baseUrl}${queryString}&api-key=${api.apiKey}`
  );
  return response;
};

export const theguardianApi = async (sourceName, queryParams) => {
  const queryString = formatQueryParams(sourceName, queryParams);
  const api = apiConfig.find(({ name }) => name === sourceName);
  const response = await axios.get(
    `${api.baseUrl}q=${queryString}&api-key=${api.apiKey}&show-fields=headline,thumbnail,short-url,byline,shortUrl,lastModified,trailText&page-size=200`
  );
  return response;
};

export const newsApi = async (sourceName, queryParams) => {
  const queryString = formatQueryParams(sourceName, queryParams);
  const api = apiConfig.find(({ name }) => name === sourceName);
  const response = await axios.get(
    `${api.everyThingBaseUrl}q=${queryString}&apiKey=${api.apiKey}&pageSize=100`
  );
  return response;
};

const delay = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
export const fetchCategoryWiseData = async (sourceName) => {

  let apiCalls = [];
  const apiDetails = apiConfig.find(({ name }) => name === sourceName);
  switch (sourceName) {
    case "newsapi": {
      apiDetails.categories.forEach((category) => {
        const api = `${apiDetails.topHeadlinesBaseUrl}category=${category.value}&apiKey=${apiDetails.apiKey}&pageSize=50`;
        apiCalls.push(api);
      });
      break;
    }
    case "theguardian": {
      apiDetails.categories.forEach((category) => {
        const api = `${apiDetails.baseUrl}section=${category.value}&show-fields=headline,thumbnail,short-url,byline,shortUrl,lastModified,trailText&api-key=${apiDetails.apiKey}&page-size=50`;
        apiCalls.push(api);
      });
      break;
    }
    case "nytimes": {
      apiDetails.categories.forEach((category) => {
        const api = `${apiDetails.catBaseUrl}${category.value}.json?api-key=${apiDetails.apiKey}`;
        apiCalls.push(api);
      });
      break;
    }
    default: {
      apiCalls = [];
    }
  }

  const categoryApiRes = await axios
    .all(
      apiCalls.map(async (endpoint) => {
        await delay();
        return axios.get(endpoint);
      })
    )
    .then((data) => data);

  const parseData = apiDetails.categories.map((cat, index) => {
    const transformedData = categoryApiRes[index] ? transformData(sourceName, categoryApiRes[index], true) : null;
    if (transformedData) {
      return {
        [cat.value]: transformedData,
      };
    } else {
      return false;
    }
  });
  
  return compact(parseData);
};
