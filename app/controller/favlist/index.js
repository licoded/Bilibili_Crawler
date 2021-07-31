const { createRouter, SuccessResp } = require('../../tools');
const { run } = require('../../../puppeteer/steps');
const { getFavBoxes, getFavListByFid } =require('../../../puppeteer/services');

const router = createRouter('/favlist');

router.get('/favboxes', async (ctx) => {
  await run(getFavBoxes).then(favboxes => {
    ctx.body = SuccessResp(favboxes);
  });
});

router.post('/favlist', async (ctx) => {
  const { fid } = ctx.request.body;
  await run(getFavListByFid, fid).then(favlist => {
    ctx.body = SuccessResp(favlist);
  });
});

module.exports = router;
