const axios = require('axios');
const host = 'https://server-stage.pasv.us';

module.exports = function userDataAPI(role) {
  const dataApi = axios({
    method: 'post',
    url: `${host}/user/login`,
    data: {
      email: `${role.email}`,
      password: `${role.password}`,
    },
  });
  return dataApi;
};

