import axios from 'axios';
const host = require('../data/host.json').host;

const dailyReportCheck = () =>
  axios({
    method: 'get',
    url: `${host.server}/diary/user/${process.env.ID_USER}`,
    headers: {
      Authorization: process.env.TOKEN_ADMIN,
    },
  })
    .then(res => res)
    .catch(err => err);

const dailyReportDeleteCheck = () =>
  axios({
    method: 'delete',
    url: `${host.server}/diary/${process.env.DAILY_REPORT_ID}`,
    headers: {
      Authorization: process.env.TOKEN_ADMIN,
    },
  })
    .then(res => res)
    .catch(err => err);

const userLoginApi = role =>
  axios({
    method: 'post',
    url: `${host.server}/user/login`,
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
    url: `${host.server}/user/email/${role.email}`,
    headers: {
      Authorization: process.env.TOKEN_ADMIN,
    },
  })
    .then(res => res)
    .catch(err => err);

const userDeactivateApi = email =>
  axios({
    method: 'get',
    url: `${host.server}/user/email/${email}`,
    headers: {
      Authorization: process.env.TOKEN_ADMIN,
    },
  })
    .then(res => res.data)
    .catch(err => err);

export { dailyReportDeleteCheck, dailyReportCheck, userLoginApi, userDeleteApi, userDeactivateApi };
