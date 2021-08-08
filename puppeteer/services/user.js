const { sleep } = require('../tools');

const getUid = async (page) => {
  const URL = 'https://space.bilibili.com/';
  await page.goto(URL);
  await sleep(500);
  const res = page.url();
  const uid = res.split('/').pop();
  global.db.uid = uid;
  return uid;
};

module.exports = {
  getUid,
};
