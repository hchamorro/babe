import axios from 'axios';

const userAPI = {
  createUser: function(userInfo) {
    return axios.post('/api/users/signup', userInfo);
  },

  logInUser: function(data) {
    return axios.post('/api/users/login', data);
  },
  updateUserCart: function(id, newCart) {
    return axios.put('/api/users/update/' + id, newCart);
  }
};

export default userAPI;
