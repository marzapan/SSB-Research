const ssbClient = require('ssb-client')
const pull = require('pull-stream')
ssbClient((err, sbot) => {
    pull(
        sbot.blobs.get('&PzrWL135YoG6zfNMw+XjFwt1824QQ4Vs8jej3Ab9BFM=.sha256'),
        pull.collect((err, values)=> {
            const data = values.join('')
            console.log(data)
        })
    )

    sbot.close()
})