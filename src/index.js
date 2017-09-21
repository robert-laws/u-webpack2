// module systems
// CommonJS - used by Node, require & module.exports statements
// AMD (Asyncronous Module Definition) - commonly used for asyncronous module loading, define & require statements
// ES2015 - modern web development heading this direction, export & export statements

// index.js - needs code from another module to run properly, it needs to import code

// const sum = require('./sum') // CommonJS

import sum from './sum' // the file sum.js has code that can be executed so it has a name
import './image_viewer' // the file image_viewer.js does not execute code, it should just run

const total = sum(10, 8)
console.log(total)