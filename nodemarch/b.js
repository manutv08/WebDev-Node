const { ModuleDetectionKind } = require("typescript");

var lib = {}

lib.foo = function(){
    console.log('Hello');
}
module.exports = lib;