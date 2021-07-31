const { ErrorResp } = require('./response');

const ErrorCode = {
  NOT_FOUND: ErrorResp(404, '页面未找到'),
  METHOD_NOT_ALLOWED: ErrorResp(405, '请求的方法不允许'),
  OJ_ILLEGAL: ErrorResp(200, 'OJ不存在'),
};

module.exports = ErrorCode;