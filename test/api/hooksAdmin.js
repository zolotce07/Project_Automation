const axios = require('axios');
const host = 'https://server-stage.pasv.us';

module.exports = async function adminAPI() {
  const dataAdminAPI = await axios({
    method: 'post',
    url: `${host}/user/login`,
    data: {
      email: 'adminone@gmail.com',
      password: '654321',
    },
  })
    .then(res => res)
    .catch(err => err);
  process.env.TOKEN_ADMIN = dataAdminAPI.data.token;
};
