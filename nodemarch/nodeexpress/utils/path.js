const path = require('path')

// module.exports = path.join(__dirname,'..');
// console.log(require.main);
module.exports = path.dirname(require.main.filename)