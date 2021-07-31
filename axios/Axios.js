const axios = require('axios');

axios.interceptors.request.use(
  (config) => {
    config.baseURL = 'http://127.0.0.1:9000';
    const { url, method, data } = config;
    const logMsg = `请求 ${`${method.toLocaleUpperCase() } ${ url}`}`;
    console.log(logMsg, data);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(({ data, config }) => {
  const { url, method } = config;
  const logMsg = `响应 ${`${method.toLocaleUpperCase() } ${ url}`}`;
  console.log(logMsg);
  if (data.code === 200) {
    // console.log(logMsg, data.content);
    return Promise.resolve(data.content);
  } else {
    console.log(logMsg, data);
    return Promise.reject(data);
  }
},(error) => {
  const { url, method } = error.config;
  const logMsg = `响应 ${`${method.toLocaleUpperCase() } ${ url}`}`;
  const { message } = error;
  console.log(logMsg, {
    title: '错误提示',
    content: message,
  });
  return Promise.reject(message);
});

function get(url, params) {
  return Promise.resolve(
    axios.get(url, {
      params: params,
    }),
  );
}

function post(url, params) {
  return Promise.resolve(axios.post(url, params));
}

module.exports = {
  get,
  post,
};
