process.env.PROJECT_ROOT = __dirname

require ('babel-register')

const requireDir = require('require-dir')

requireDir('./gulp-tasks', { recurse: true })
