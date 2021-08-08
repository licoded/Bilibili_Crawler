const puppeteer = require('puppeteer');
const launchOptions = require('../config/launch.json');
const { sleep } = require('../tools/index');

const login = async (page) => {
  await page.goto('https://passport.bilibili.com/login');
  if (page.url() === 'https://www.bilibili.com/'){
    console.log('【已登录】如需更换账号请先退出当前账号');
    return ;
  }
  console.log('【请稍后】正在获取二维码图片...');
  await sleep(1000);
  await page.screenshot({ path: './public/assets/qrcode.png' });
  // eslint-disable-next-line no-constant-condition
  while (1) {
    if (page.url() === 'https://www.bilibili.com/'){
      console.log('【登录成功】');
      break;
    } else {
      console.log('【请扫码登录】http://localhost:3002/assets/qrcode.png');
      await sleep(10000);
    }
  }
};

const createBrowser = async()=>{
  return await puppeteer.launch(launchOptions);
};

const getPage = ()=>{
  return new Promise( resolve=>{
    global.db.browser.then(async browser=>{
      await browser.newPage().then(page=>{
        resolve(page);
      });
    });
  });
};

module.exports = {
  createBrowser,
  getPage,
  login,
};
