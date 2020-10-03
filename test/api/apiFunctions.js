import axios from 'axios';
const host = 'https://server-stage.pasv.us';

const dailyReportCheck = () =>
  axios({
    method: 'get',
    url: `${host}/diary/user/${process.env.ID_USER}`,
    headers: {
      Authorization: process.env.TOKEN_ADMIN,
    },
  })
    .then(res => res)
    .catch(err => err);

const dailyReportDeleteCheck = () =>
  axios({
    method: 'delete',
    url: `${host}/diary/${process.env.DAILY_REPORT_ID}`,
    headers: {
      Authorization: process.env.TOKEN_ADMIN,
    },
  })
    .then(res => res)
    .catch(err => err);

const userLoginApi = role =>
  axios({
    method: 'post',
    url: 'https://server-stage.pasv.us/user/login',
    data: {
      email: role.email,
      password: role.password,
    },
  })
    .then(res => res)
    .then(err => err);

const userDeleteApi = role =>
  axios({
    method: 'delete',
    url: `https://server-stage.pasv.us/user/email/${role.email}`,
    headers: {
      Authorization: process.env.TOKEN_ADMIN,
    },
  })
    .then(res => res)
    .catch(err => err);

const userDeactivateApi = (email) =>
  axios({
    method: 'get',
    url: `https://server-stage.pasv.us/user/email/${email}`,
    headers: {
      Authorization: process.env.TOKEN_ADMIN,
    },
  })
    .then(res => res.data)
    .catch(err => err);

export { dailyReportDeleteCheck, dailyReportCheck, userLoginApi, userDeleteApi, userDeactivateApi };
