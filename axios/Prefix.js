const vuserPrefix = '/test/vuser';
const problemPrefix = '/test/problem';
const submissionPrefix = '/test/submission';

function addPrefix(URL_PREFIX, API) {
  for (const key in API) {
    API[key] = URL_PREFIX + API[key];
  }
  return API;
}

module.exports = {
  addPrefix,
  vuserPrefix,
  problemPrefix,
  submissionPrefix,
};
