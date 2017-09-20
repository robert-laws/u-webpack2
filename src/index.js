// module systems
// CommonJS - used by Node, require & module.exports statements
// AMD (Asyncronous Module Definition) - commonly used for asyncronous module loading, define & require statements
// ES2015 - modern web development heading this direction, export & export statements

// index.js - needs code from another module to run properly, it needs to import code

const sum = require('./sum')

const total = sum(10, 8)
console.log(total)