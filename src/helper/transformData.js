const getImageUrl = (item, isCategory) => {
  let imageUrl = null;
  const { url: imageLoc } = item.multimedia.find((item) => item.type === "image");
  if(isCategory) {
    return imageLoc
  }
  try {
    const { host } = new URL(item.web_url);
    imageUrl = imageLoc ? `//${host}/${imageLoc}` : null;
  } catch (error) {
    console.log("invalid image url");
  }

  return imageUrl
}


export const transformData = (source, data, isCategory) => {
  switch (source) {
    case "newsapi": {
      const apisData = data?.data?.articles || [];
      return apisData.map((item) => {
        return {
          title: item.title,
          author: item.author,
          description: item.description,
          url: item.url,
          urlToImage: item.urlToImage,
          publishedAt: item.pub_date,
          source: item.source,
          category: "",
        };
      });
    }
    case "nytimes": {
      const apisData = !isCategory
        ? data?.data?.response?.docs
        : data?.data?.results || [];
      return apisData.map((item) => {
        let imageUrl = null;
        if(item.multimedia && item.multimedia.length > 0) {
          imageUrl = getImageUrl(item, isCategory)
        }
       
        if (isCategory) {
          return {
            title: item.title,
            author: item?.byline || "",
            description: item.abstract,
            url: item.url,
            urlToImage: imageUrl,
            publishedAt: item.published_date,
            source: item.item_type,
            category: item.section || "",
          };
        }
        return {
          title: item.snippet,
          author: item?.byline?.original || "",
          description: item.lead_paragraph,
          url: item.web_url,
          urlToImage: imageUrl,
          publishedAt: item.pub_date,
          source: item.source,
          category: item.news_desk || "",
        };
      });
    }
    case "theguardian": {
      const apisData = data?.data?.response?.results || [];
      return apisData.map((item) => {
        return {
          title: item.webTitle,
          author: item?.fields?.byline || "",
          description: item?.fields?.trailText,
          url: item.webUrl,
          urlToImage: item.fields.thumbnail,
          publishedAt: item.webPublicationDate,
          source: item.sectionName,
          category: item.sectionName || "",
        };
      });
    }
    default: {
      return [];
    }
  }
};

export const transformErrorRes = (source, data) => {
  const defaultErrorMessage =
    "You have made too many requests recently. Developer accounts are limited to < 50 requests over a 24 hour period";
  switch (source) {
    case "newsapi": {
      const apiErrorMessage = data?.response?.data?.message || "";
      return {
        hasError: true,
        errorMessage: defaultErrorMessage,
        status: data?.response?.data?.status,
        statusCode: data?.status,
        apiErrorMessage,
      };
    }
    case "nytimes": {
      const apiErrorMessage = data?.response?.data?.fault?.faultstring || "";
      return {
        hasError: true,
        errorMessage: defaultErrorMessage,
        status: data?.response?.data?.status,
        statusCode: data?.status,
        apiErrorMessage,
      };
    }
    case "theguardian": {
      const apiErrorMessage = data?.response?.data?.message || "";
      return {
        hasError: true,
        errorMessage: defaultErrorMessage,
        status: data?.response?.data?.status,
        statusCode: data?.status,
        apiErrorMessage,
      };
    }
    default: {
      return [];
    }
  }
};
