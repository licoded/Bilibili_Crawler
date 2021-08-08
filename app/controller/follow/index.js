const { createRouter, SuccessResp } = require('../../tools');
const { run } = require('../../../puppeteer/steps');
const { getFollowList } =require('../../../puppeteer/services');

const router = createRouter('/follow');

router.get('/list', async (ctx) => {
  await run(getFollowList).then(followList => {
    ctx.body = SuccessResp(followList);
  });
});

module.exports = router;
