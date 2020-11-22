const ssbClient = require('ssb-client')
const pull = require('pull-stream')
ssbClient((err, sbot) => {
    const hash = '&PzrWL135YoG6zfNMw+XjFwt1824QQ4Vs8jej3Ab9BFM=.sha256'  
    pull(
        sbot.blobs.get(hash),
        pull.collect((err, values) => {      
            const data = values.join('')
            console.log(data)
        })
    )
    sbot.publish({
        type: 'post',
        text: 'Maybe my first file too :o',
        mentions: [{
            name: 'trio.jpeg',
            link: '&PzrWL135YoG6zfNMw+XjFwt1824QQ4Vs8jej3Ab9BFM=.sha256',
            type: 'image/jpeg'
        }]
    }, (err, message)=> {
        console.log(message)
    })
    sbot.close()
})