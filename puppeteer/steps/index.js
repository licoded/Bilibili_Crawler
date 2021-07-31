const { getPage } = require('../pages');
const run = async (func, ...params) => {
  const page = await getPage();
  const res = await func(page, ...params);
  await page.close();
  return res;
};

const forAsync = async (page, arr, func, ...params) => {
  for (let i = 0; i < arr.length; i++) {
    await func(page, arr[i], params);
  }
};

module.exports = {
  run,
  forAsync,
};
