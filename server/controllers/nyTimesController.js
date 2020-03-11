const axios = require('axios');

module.exports = {
  findWomensHealth: function(req, res) {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${process.env.NY_TIMES_API_KEY}&fq=news_desk:(%22Women%27s%20Health%22)`
      )
      .then(results => {
        res.json([...results.data.response.docs]);
      })
      .catch(err => console.log(err));
  },
  findWomenScience: function(req, res) {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${process.env.NY_TIMES_API_KEY}&q=(%22women%22%22science%22)`
      )
      .then(results => {
        res.json([...results.data.response.docs]);
      })
      .catch(err => console.log(err));
  }
};
