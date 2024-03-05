import { shuffle } from "./suffleData";
import { apiConfig } from "../config";
export const transformAsideData = (newsSource, categoryData) => {
    const apiDetails = apiConfig.find(config => config.name === newsSource);
    let asideNewsList = [];
    let cardData = []
    const getCategory = (key) => apiDetails.categories.find(cat => cat.value === key);
    if(categoryData[newsSource]) {
      const newsByCategory = categoryData[newsSource].map(category => {
        const key = Object.keys(category)[0] || null;
        return {
          category: key ? getCategory(key) : {},
          news: category[key]
        }
      });
      asideNewsList = shuffle(newsByCategory) ;
      asideNewsList = asideNewsList.slice(0,4) || [];
      cardData = asideNewsList[3] ? asideNewsList[3].news : [];
      return {
        asideNewsList,
        cardData
      }
    } else {
        return {
            asideNewsList: [],
            cardData: []
          }
    }
}