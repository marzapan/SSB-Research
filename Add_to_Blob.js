const ssbClient = require('ssb-client')
var fs = require('fs')
var pull = require('pull-stream')
var toPull = require('stream-to-pull-stream')
ssbClient((err, sbot)=>{
    pull(
        toPull.source(fs.createReadStream('./trio.jpeg')),
        sbot.blobs.add(function (err, hash) {
          console.log(hash)
        })
    )
 
})
    



