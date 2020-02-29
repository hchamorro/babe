import axios from 'axios';

const productAPI = {
  getProductsAPI: function(data) {
    return axios.get('/api/products/', data);
  }
};

export default productAPI;
