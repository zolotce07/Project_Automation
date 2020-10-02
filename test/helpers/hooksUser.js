const axios = require('axios');
const host = 'https://server-stage.pasv.us';

module.exports = async function userAPI() {
  const dataUserAPI = await axios({
    method: 'post',
    url: `${host}/user/login`,
    data: {
      email: 'tomsmith@gmail.com',
      password: '123456',
    },
  })
    .then(res => res)
    .catch(err => err);
  process.env.TOKEN_USER = dataUserAPI.data.token;
  process.env.ID_USER = dataUserAPI.data.user._id;
};
