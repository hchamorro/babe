import axios from 'axios';

//nyt source
const newsAPI = {
  getWomensHealth: function() {
    return axios.get('/api/nyt/womenshealth');
  },
  getWomenScience: function() {
    return axios.get('./api/nyt/women&science');
  }
};

export default newsAPI;
