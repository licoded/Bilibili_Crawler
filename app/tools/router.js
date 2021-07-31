const Router = require('koa-router');

const createRouter = (CONTROLLER_PREFIX)=>{
  return new Router({ prefix: CONTROLLER_PREFIX });
};

module.exports = {
  createRouter,
};
