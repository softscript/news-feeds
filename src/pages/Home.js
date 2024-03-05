/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

import SectionOne from "../component/pageSection/sectionOne";
import SectionThree from "../component/pageSection/sectionThree";
import SectionTwo from "../component/pageSection/sectionTwo";
import SectionFour from "../component/pageSection/sectionFour";
import SectionFive from "../component/pageSection/sectionFive";
import FilterComponent from "../component/filterComponent/filterComponent";
import { AppWrapperContainer, MainContentWrapper, StyledMobilePersonaliseSec, StyledPersonaliseSec } from "../appStyles";
import PersonalisedChips from "../component/filterComponent/personalisedChips";
import Loader from "../component/loader/loader";
import { dataSource } from "../_mock";
import {
  nytimesApi,
  newsApi,
  theguardianApi,
  fetchCategoryWiseData,
} from "../apiService/newsFeedsApi";
import Notification from "../component/snackbarNotify/notification";
import { transformData, transformErrorRes } from "../helper/transformData";
import { apiConfig } from "../config";


const Home = () => {
  const [personalisedChips, setPersonalisedChips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [categoryWiseData, setCategoryWiseData] = useState({});
  const [newsFeeds, setNewsFeeds] = useState([]);
  const [newsSource, setNewsSource] = useState("nytimes");
  const [apiError, setApiError] = useState({});
  const [queryParams, setQueryParams] = useState({
    q: "",
    date: "",
    source: "nytimes",
    fq: [],
    tags: [],
  });
  const getPersonalisedTags = (source = "nytimes") => {
    const apiDetails = apiConfig.find((api) => api.name === source);
    setPersonalisedChips(apiDetails.categories);
    return apiDetails.categories;
  };

  const makeCategoryApiWiseReq = async (source = "nytimes") => {
    setCategoryLoading(true);
    if (!categoryWiseData[source]) {
      try {
        const data = await fetchCategoryWiseData(source);
        if (data && data.length > 0) {
          setCategoryWiseData({
            ...categoryWiseData,
            [source]: data,
          });
        }
        setCategoryLoading(true);
      } catch (error) {
       
        const errorData = transformErrorRes(error);
        setApiError(errorData);
        setCategoryLoading(false);
        setTimeout(()=> {
          setApiError(null);
        }, 6000)
      }
    }
    setCategoryLoading(false);
  };

  const makeApiRequest = async (source = "nytimes") => {
    setLoading(true);
    try {
      switch (source) {
        case "nytimes": {
          const res = await nytimesApi(source, queryParams);
          if (res.status === 200) {
            setLoading(false);
            const tranformedData = transformData(source, res);
            setNewsFeeds(tranformedData);
          } else {
            setLoading(false);
          }
          break;
        }
        case "newsapi": {
          const res = await newsApi(source, queryParams);
          if (res.status === 200) {
            setLoading(false);
            const tranformedData = transformData(source, res);
            setNewsFeeds(tranformedData);
          } else {
            setLoading(false);
          }
          break;
        }
        case "theguardian": {
          const res = await theguardianApi(source, queryParams);
          if (res?.status === 200) {
            setLoading(false);
            const tranformedData = transformData(source, res);
            setNewsFeeds(tranformedData);
          } else {
            setLoading(false);
          }
          break;
        }
        default: {
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
      const errorData = transformErrorRes(error);
        setApiError(errorData);
        setTimeout(()=> {
          setApiError(null);
        }, 6000)
    }
  };
  const handleSearch = async (event) => {
    const params = { ...queryParams };
    const {
      target: { name, value },
    } = event;
    if (name) {
      params[name] = value || "";
      setQueryParams(params);
    }
    if (name === "q") {
      if (value.length > 3) {
        updateNewsFeeds();
      }
    }
    if (name === "date") {
        updateNewsFeeds();
    }
    if (name === "source") {
      const source = value.trim();
      setNewsSource(source);
      getPersonalisedTags(source);

      await makeApiRequest(value.trim());
      await makeCategoryApiWiseReq(source);
    }
  };

  useEffect(() => {
    async function fetchData() {
      await makeApiRequest();
      await makeCategoryApiWiseReq();
    }
    fetchData();
    getPersonalisedTags();
  }, []);

  const updateNewsFeeds = () => {
    setLoading(true);
    setTimeout(async () => {
      async function fetchData() {
        await makeApiRequest(queryParams.source);
      }
      fetchData();
    }, 2000);
  };

  const handleCloseSnackBar = () => {
    setApiError(null)
  }

  const handlePersanilsedTags = async (key) => {
    const personalisedTags = [...personalisedChips];
    const indexValue = personalisedTags.findIndex(({ value }) => value === key);
    const tagDetails = personalisedTags[indexValue];
    tagDetails.isSelected = !tagDetails.isSelected;
    personalisedTags[indexValue] = tagDetails;
    setPersonalisedChips(personalisedTags);
    const params = { ...queryParams };
    const selectedTags = [];
    personalisedTags.forEach((tag) => {
      if (tag.isSelected) {
        selectedTags.push(tag.value);
      }
    });
    params.tags = selectedTags;
    setQueryParams(params);

    setLoading(true);
    setTimeout(async () => {
      async function fetchData() {
        await makeApiRequest(params.source);
      }
      fetchData();
    }, 2000);

    updateNewsFeeds();
  };

  return (
    <>
      <AppWrapperContainer
        container
        direction="row"
        justifyContent="center"
        spacing={3}
      >
        <Grid sm={2} item xs={12}>
          <FilterComponent
            handleSearch={handleSearch}
            filterData={queryParams}
          />
        </Grid>
        <StyledMobilePersonaliseSec sm={2} item xs={12}>
          <PersonalisedChips
            tags={personalisedChips}
            handleSelect={handlePersanilsedTags}
          />
        </StyledMobilePersonaliseSec>
        <Grid item xs={12} sm={8}>
          {loading ? (
            <Loader />
          ) : (
            <MainContentWrapper className="main-content-wrapper">
              {newsFeeds && newsFeeds.length > 0 && (
                <SectionOne className="main-section_one" data={newsFeeds} />
              )}

              <SectionTwo videos={dataSource.videos} />
              {newsFeeds && newsFeeds.length > 0 && (
                <SectionThree data={newsFeeds} />
              )}
              <SectionFour
                loading={categoryLoading}
                categoryData={categoryWiseData}
                newsSource={newsSource}
              />
              <SectionFive
                loading={categoryLoading}
                categoryData={categoryWiseData}
                newsSource={newsSource}
              />
            </MainContentWrapper>
          )}
        </Grid>
        <StyledPersonaliseSec sm={2} item xs={12}>
          <PersonalisedChips
            tags={personalisedChips}
            handleSelect={handlePersanilsedTags}
          />
        </StyledPersonaliseSec>
      </AppWrapperContainer>
      {apiError.hasError && <Notification  handleClose = {handleCloseSnackBar} apiError={apiError}/>}
    </>
  );
};

export default Home;
