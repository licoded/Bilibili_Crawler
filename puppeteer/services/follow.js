const { sleep } = require('../tools');

const getTotalPage = async (page) => {
  const { uid } = global.db;
  const URL = `https://space.bilibili.com/${uid}/fans/follow`;
  await page.goto(URL, { waitUntil: 'load' });
  await sleep(1000);
  let totalPage;
  await page.evaluate(() => {
    const lastBtn = document
      .querySelector('[title^="最后一页"]');
    const totalPageString = lastBtn ? lastBtn
      .getAttribute('title')
      .split(':').pop()
      :1;
    return parseInt(totalPageString);
  }).then(result => totalPage = result);
  return totalPage;
};

const getFollowList = async (page) => {
  const totalPage = await getTotalPage(page);
  const followList = [];
  for (let i = 1; i <= totalPage; i++) {
    await page.evaluate(() => {
      const result = [];
      const follows = document.querySelector('.follow-content .relation-list').children;
      for (const follow of follows){
        const imgUrl = follow.querySelector('a.cover img').src;
        const title = follow.querySelector('a.title, a.fans-name');
        const { innerText: name, href: homeUrl } = title;
        const desc = follow.querySelector('p.desc, p.auth-description').innerText;
        result.push({ name, imgUrl, title, desc, homeUrl });
      }
      return result;
    }).then(result => followList.push(...result));
    if (i === totalPage) break;
    await page.click('[title="下一页"]');
    await sleep(800);
  }
  return followList;
};

module.exports = {
  getFollowList,
};
