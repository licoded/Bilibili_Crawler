const { ErrorCode, ErrorResp } = require('../tools');
const { HttpException } = require('../core/http-exception');
const catchError = async (ctx,next)=>{
  try {
    await next();
    if (parseInt(ctx.status) === 404 && ctx.message === 'Not Found' ){
      ctx.body = ErrorCode.NOT_FOUND;
    } else if (parseInt(ctx.status) === 405 && ctx.message === 'Method Not Allowed'){
      ctx.body = ErrorCode.METHOD_NOT_ALLOWED;
    } else if (parseInt(ctx.status) !== 200){
      console.log('==========');
      console.log(ctx.status);
      console.log(ctx.body);
      console.log(ctx.message);
      console.log('==========');
    }
  } catch (error){
    if ((typeof error) === Object && error instanceof HttpException){
      return ctx.body = ErrorResp(500, error.message);
    } else {
      console.log(error);
      return ctx.body = ErrorResp(500, error.message);
    }
  }
};

module.exports = catchError;
