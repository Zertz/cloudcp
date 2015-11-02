cloudcp
=======

Copy local files to any cloud storage provider supported by [pkgcloud](https://github.com/pkgcloud/pkgcloud#storage)

API
---

```javascript
var cloudcp = require('cloudcp')
var storageClient = require('pkgcloud').storage.createClient({
  // See pkgcloud documentation for details
})

var container = 'my-blob'
var remote = '/remote/path'

cloudcp('/local/path', {
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
