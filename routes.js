const routes = require('next-routes')

module.exports = routes()
.add('index', '/')
.add('checkout', '/checkout')
.add('spaceship', '/spaceship/:slug')
