const sleep = (time, data) => {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
};

module.exports = {
  sleep,
};
