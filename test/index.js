var tap = require('tap')

var cloudcp = require('../index.js')

tap.test('cloudcp', function (t) {
  var container = 'container'
  var remote = 'remote/cloudcp.txt'

  cloudcp('local/cloudcp.txt', {
    container, remote
  }).catch(function (err) {
    t.ok(err)
    t.equal(err.code, 'ENOENT')
    t.end()
  })
})
