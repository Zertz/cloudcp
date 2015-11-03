'use strict'

var fs = require('fs')

function cloudcp (src, destOpts) {
  var promise = new Promise(function (resolve, reject) {
    let complete = false
    let read = fs.createReadStream(src)
    let write

    function done (err, file) {
      if (!complete) {
        complete = true
        read.destroy()

        if (write) {
          write.destroy()
        }

        if (err) {
          reject(err)
        } else {
          resolve(file)
        }
      }
    }

    function open () {
      write = destOpts.storageClient.upload({
        container: destOpts.container,
        remote: destOpts.remote
      })

      write.on('error', done)
      write.on('success', function (file) {
        done(null, file)
      })

      read.pipe(write)
    }

    read.on('error', done)
    read.on('open', open)
  })

  return promise
}

module.exports = cloudcp
