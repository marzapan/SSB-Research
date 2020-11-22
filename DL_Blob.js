const ssbClient = require('ssb-client') //Imports ssb-client
const pull = require('pull-stream') //Imports pull-stream
ssbClient((err, sbot) => { //Connects to the ssb-client network
    const hash = '&PzrWL135YoG6zfNMw+XjFwt1824QQ4Vs8jej3Ab9BFM=.sha256'  //Hash of the blob
    sbot.publish({
        type: 'post',
        text: 'Maybe my first file too :o',
        mentions: [{
            name: 'trio.jpeg',
            link: '&PzrWL135YoG6zfNMw+XjFwt1824QQ4Vs8jej3Ab9BFM=.sha256', //Need to use the mentions format so that people can get the blob hash
            type: 'image/jpeg'                                            //This is the only way that other users can access you blobs
        }]                                                                // if blob is over 5mb don't do it. Too big
    }, (err, message)=> {
        console.log(message) //lets us see the message in terminal
    })
    sbot.close() //closes the script
})