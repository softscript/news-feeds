export const apiConfig = [
  {
    name: "newsapi",
    label: "News Api",
    filterParamKey: "",
    topHeadlinesBaseUrl: "https://newsapi.org/v2/top-headlines?",
    everyThingBaseUrl: "https://newsapi.org/v2/everything?",
    apiKey: "683e15454a2e42bcbb6ca0259663552d",
    keyParam: 'apiKey',
    sampleUrl:
      "https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=683e15454a2e42bcbb6ca0259663552d",
    documentationUrl: "https://newsapi.org/docs/get-started#search",
    categories: [
      { value: "technology", label: "Technology" },
      { value: "general", label: "General" },
      { value: "science", label: "Science" },
      { value: "sports", label: "Sports" },
      { value: "entertainment", label: "Entertainment" },
      { value: "business", label: "Business" },
      { value: "health", label: "Health" },
    ]
  },
  {
    name: "theguardian",
    label: "The Guardian",
    baseUrl: "https://content.guardianapis.com/search?",
    filterParamKey: "tag",
    apiKey: "c907043e-a7e6-4cba-8102-a9ed198d4389",
    sampleUrl:
      "https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=c907043e-a7e6-4cba-8102-a9ed198d4389",
    documentationUrl: "https://open-platform.theguardian.com/documentation/",
    categories: [
      { value: "technology", label: "Technology" },
      { value: "lifeandstyle", label: "Life and style" },
      { value: "education", label: "Education" },
      { value: "fashion", label: "Fashion" },
      { value: "science", label: "Science" },
      { value: "games", label: "Games" },
      { value: "politics", label: "Politics" }
    ]
  },
  {
    name: "nytimes",
    label: "New York Times",
    host: "https://www.nytimes.com/",
    filterParamKey: "fq",
    baseUrl: "https://api.nytimes.com/svc/search/v2/articlesearch.json?",
    apiKey: "C2ADRMvKFJ6eDgFLI0TXdMZ7lI8vgnFh",
    sampleUrl:
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=technology&fq=news_desk:(%22Sports%22)&api-key=C2ADRMvKFJ6eDgFLI0TXdMZ7lI8vgnFh",
    documentationUrl:
      "https://developer.nytimes.com/docs/articlesearch-product/1/overview",
    catBaseUrl: "https://api.nytimes.com/svc/topstories/v2/",
    categoryBaseUrl:
      "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=C2ADRMvKFJ6eDgFLI0TXdMZ7lI8vgnFh",
    categories: [
      { value: "automobiles", label: "Automobiles" },
      { value: "business", label: "Business" },
      { value: "fashion", label: "Fashion" },
      { value: "health", label: "Health" },
      { value: "technology", label: "Technology" },
      { value: "science", label: "Science" },
      { value: "sports", label: "Sports" }
    ],
  },
];
