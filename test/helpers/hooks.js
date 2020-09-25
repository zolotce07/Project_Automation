const axios = require('axios');
const host = 'https://server-stage.pasv.us';
import userData from '../data/userData';

async function beforeHook() {
  const user = await axios({
    method: 'post',
    url: `${host}/user/login`,
    data: {
      email: `${userData.admin.email}`,
      password: `${userData.admin.password}`,
    },
  })
    .then(res => res.data)
    .catch(err => err.response.data);
  process.env.ADMIN_TOKEN = user.token; //We create variable for ALL folders "environment variable"
  process.env.ADMIN_ID = user.userId;
}

module.exports = beforeHook;

