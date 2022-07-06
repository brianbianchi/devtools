const jwt = require('jsonwebtoken');

const parseFailed = "Couldn't parse token.";

async function decodeJwt(token) {
  const decoded = jwt.decode(token, {
    complete: true
  });

  if (decoded === null) {
    console.log(parseFailed);
    return;
  }

  console.log(JSON.stringify(decoded, null, 4));
}

module.exports = {
  decodeJwt,
  parseFailed
}