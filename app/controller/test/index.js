const { createRouter, SuccessResp } = require('../../tools');
const router = createRouter('/test');

router.get('/test', (ctx) => {
  ctx.body = SuccessResp('test');
});

module.exports = router;
