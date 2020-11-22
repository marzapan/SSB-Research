const ssbClient = require('ssb-client')
const pull = require('pull-stream')
ssbClient((err, sbot) => {
  if(err)
    throw err

  pull(
    sbot.createUserStream({
      id: '@5iWnc6I05L1Lo75CD6mbFeCnggoEsKXwYxUuYYtOnsM=.ed25519',
      keys: true
    }),
    pull.collect((err, messages) => {
      console.log(messages)     
      
    })
  )
  console.log(sbot.get('%divcCutEoa8eMO6vK7afT5mAwAQttDijx6z+u3vp2Ys=.sha256'))
  sbot.close()
})
