class HttpException extends Error{
  constructor(msg= '服务器异常',errorCode= 500,code= 200){
    super();
    this.content = msg;
    this.code = code;
    this.message = errorCode;
  }
}
module.export = HttpException;