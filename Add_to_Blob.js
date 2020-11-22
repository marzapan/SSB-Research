const ssbClient = require('ssb-client') //Imports ssb-client
var fs = require('fs') //Imports fs
var pull = require('pull-stream') //Imports pull
var toPull = require('stream-to-pull-stream')//Imports toPull
ssbClient((err, sbot)=>{ //Connects the the ssb-client network
    pull(
        toPull.source(fs.createReadStream('./trio.jpeg')),  //creates a new-blob in .ssb and adds the file to it
        sbot.blobs.add(function (err, hash) {
          console.log(hash) //prints the blob so that we can get the key to retrieve the file from the blob
        })
    )
 
})
    




