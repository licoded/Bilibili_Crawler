const { sleep } = require('../tools');

const getFavBoxes = async (page) => {
  const { uid } = global.db;
  const URL = `https://space.bilibili.com/${uid}/favlist`;
  await page.goto(URL, { waitUntil: 'load' });
  await sleep(500);
  let favBoxes;
  await page.evaluate(() => {
    const resList = [];
    const selectorList = ['div[fid]', 'li[fid]'];
    selectorList
      .forEach(selector => document.querySelectorAll(selector)
        .forEach(item => resList.push(item.getAttribute('fid'))));
    return resList;
  }).then(result => favBoxes = result);
  return favBoxes;
};

const getFavInfoByFid = async (page, fid) => {
  const { uid } = global.db;
  const URL = `https://space.bilibili.com/${uid}/favlist`;
  const NOW_URL = `${URL}?fid=${fid}`;
  await page.goto(NOW_URL, { waitUntil: 'load' });
  await sleep(1000);
  let favInfo;
  await page.evaluate(() => {
    const lastBtn = document
      .querySelector('[title^="最后一页"]');
    const totalPageString = lastBtn ? lastBtn
      .getAttribute('title')
      .split(':').pop()
      :1;
    const { href: favUrl, innerText: favName } = document.querySelector('a.fav-name');
    return {
      favUrl,
      favName,
      totalPage: parseInt(totalPageString),
    };
  }).then(result => favInfo = result);
  return favInfo;
};

const getFavListByFid = async (page, fid) => {
  const favInfo = await getFavInfoByFid(page, fid);
  const favList = [];
  for (let i = 1; i <= favInfo.totalPage; i++) {
    await page.evaluate(() => {
      const result = [];
      const favs = document.querySelector('.fav-video-list').children;
      for (const fav of favs){
        const aid = fav.getAttribute('data-aid');
        const img = fav.querySelector('img[class="cover-img"]');
        const { src: imgUrl, alt: title } = img;
        const pubDate = fav.querySelector('.meta.pubdate').innerText.split('：').pop().trim();
        if (title !== '已失效视频') result.push({ aid, imgUrl, title, pubDate });
      }
      return result;
    }).then(result => favList.push(...result));
    if (i === favInfo.totalPage) break;
    await page.click('[title="下一页"]');
    await sleep(800);
  }
  favInfo.favList = favList;
  return favInfo;
};

module.exports = {
  getFavBoxes,
  getFavListByFid,
};
