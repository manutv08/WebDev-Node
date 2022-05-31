const os = require('os')

//platform
console.log(os.platform());

//cpu arch
console.log(os.arch());

// cpus

console.log(os.cpus());


console.log(os.freemem());
console.log(os.totalmem());


console.log(os.uptime());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.type());
console.log(os.release());