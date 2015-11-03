'use strict'

var fs = require('fs')
var glob = require('glob').sync
var path = require('path')
var sinon = require('sinon')
var tap = require('tap')

var fixture = path.join.bind(path, __dirname, 'fixtures')
var cloudcp = require('../index.js')

function cleanup () {
  var files = glob(fixture('*copy*'))

  for (let i = files.length - 1; i >= 0; i--) {
    fs.unlinkSync(files[i])
  }
}

tap.test('should reject fs errors', function (t) {
  cloudcp('eno/ent.txt', {}).catch(function (err) {
    t.ok(err)
    t.equal(err.code, 'ENOENT')
    t.end()
  })
})

tap.test('should copy files', function (t) {
  let storageClient = {
    upload: function (opts) {
      return fs.createWriteStream(fixture(opts.remote))
    }
  }

  let container = 'container'
  let remote = 'a-copy.txt'

  let uploadSpy = sinon.spy(storageClient, 'upload')

  cloudcp(fixture('a.txt'), {
    storageClient, container, remote
  }).then(function (file) {
    t.equal(file, undefined)
    t.equal(uploadSpy.callCount, 1)
    t.end()
  })
})

tap.test('cleanup', function (t) {
  cleanup()
  t.end()
})
