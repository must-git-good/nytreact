import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API



export default {
  getArticles: function(topic, yearStart, endStart) {
    return axios.post(`/api/nyt`,{topic: topic, yearStart: yearStart, endStart: endStart});
  },
  saveArticle: function(articleBeingSaved) {
    return axios.post(`/api/save`, articleBeingSaved);
  }
  
  // getArticles2: function(topic, yearStart, endStart) {
  //   return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}?begin_date=${yearStart}?end_date=${endStart}?api_key=${KEY}
  //   `);}
  
};
