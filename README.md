cloudcp
=======

[![npm version](https://badge.fury.io/js/cloudcp.svg)](https://badge.fury.io/js/cloudcp) [![Build Status](https://travis-ci.org/Zertz/cloudcp.svg?branch=master)](https://travis-ci.org/Zertz/cloudcp) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Copy local files to any cloud storage provider supported by [pkgcloud](https://github.com/pkgcloud/pkgcloud#storage)

API
---

```javascript
var cloudcp = require('cloudcp')
var storageClient = require('pkgcloud').storage.createClient({
  // See pkgcloud documentation for details
})

var container = 'my-blob'
var remote = '/remote/file.txt'

cloudcp('/local/file.txt', {
  storageClient, container, remote
}).then(function (file) {
  console.log(file)
}).catch(function (err) {
  console.log(err)
})
```

License
-------

[MIT](https://github.com/Zertz/cloudcp/blob/master/LICENSE)
