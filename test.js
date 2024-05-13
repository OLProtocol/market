const crypto = require('crypto');
function generateSeed2(ranges) {
  const jsonString = JSON.stringify(ranges);
  try {
    const bytes = new TextEncoder().encode(jsonString);
    const hash = crypto.createHash('sha256');
    hash.update(bytes);
    const hashResult = hash.digest('hex').slice(0, 16);
    return hashResult;
  } catch (error) {
    console.error('json.Marshal failed. ' + error);
    return '0';
  }
}

const result = generateSeed2([
  {
    start: 1234567890123456,
    size: 1000,
  },
  {
    start: 100000000,
    size: 1,
  },
]);

console.log(result);
// d7a6f8f2
