import axios from 'axios';

const productAPI = {
  getAllProducts: function(data) {
    return axios.get('/api/products/', data);
  },

  findProduct: function(id) {
    return axios.get('/api/products/' + id);
  }
};

export default productAPI;
