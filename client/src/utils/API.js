import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "api-key=5afdbe21183243a295eed84eb1769517";




export default {
  search: function(query, beginDate, endDate) {
    return axios.get(`${BASEURL}${APIKEY}&q=${query}&begin_date=${beginDate}0101&end_date=${endDate}1231&fl=web_url,snippet,headline,pub_date`);
  }
};
