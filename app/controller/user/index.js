const { createRouter, SuccessResp } = require('../../tools');
const { run } = require('../../../puppeteer/steps');
const { getUid } =require('../../../puppeteer/services');

const router = createRouter('/user');

router.get('/uid', async (ctx) => {
  await run(getUid).then(uid => {
    ctx.body = SuccessResp(uid);
  });
});

module.exports = router;
