const ssbClient = require('ssb-client') //Imports ssb-client
const pull = require('pull-stream') //Imports pull-stream
ssbClient((err, sbot) => { //Connects to the ssb-client network 
    pull(
        sbot.blobs.get('&PzrWL135YoG6zfNMw+XjFwt1824QQ4Vs8jej3Ab9BFM=.sha256'), //Once hash of blob is known. Anyone with the hash can call the file stored in the blob
        pull.collect((err, values)=> {
            const data = values.join('')
            console.log(data) //prints data to the terminal
        })
    )

    sbot.close() //closes script
})