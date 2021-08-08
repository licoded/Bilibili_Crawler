const Koa = require('koa');
const Moment = require('moment');
const KoaLogger = require('koa-logger');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const { catchError } = require('./middleware');

const { createBrowser, login } = require('../puppeteer/pages');
const { getUid } = require('../puppeteer/services');
const { run } = require('../puppeteer/steps');

const app = new Koa();
const logger = KoaLogger((str) => {
  console.log(Moment().format('YYYY-MM-DD HH:mm:ss') + str);
});

global.db = {
  browser: createBrowser(),
};
(async () => {
  await run(login);
  console.log('【请稍后】正在获取uid，请先不要发送请求');
  await run(getUid);
  console.log('【成功获取uid】接口可以正常使用了');
})();

app.use(catchError);
app.use(cors());
app.use(bodyParser());

app.use(logger);

const serve = require('koa-static');
const path = require('path');
const root = path.resolve('./');
const public = path.join(root, '/public');
app.use(serve(public));

const routers = require('./controller');

routers.forEach((router) => {
  app.use(router.routes()).use(router.allowedMethods());
});

app.listen(3002, () => {
  console.log('server is listen in 3002');
});
