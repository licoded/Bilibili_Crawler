const Resp = (success, code, message, content) => {
  if (success){
    return { success, code, message, content };
  } else {
    return { success, code, message };
  }
};

const ErrorResp = (code, errMsg) => {
  return Resp(false, code, errMsg, null);
};

const SuccessResp = (data) => {
  return Resp(true, 200, 'ok', data);
};

module.exports = {
  ErrorResp,
  SuccessResp,
};
