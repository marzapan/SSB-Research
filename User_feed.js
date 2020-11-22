const ssbClient = require('ssb-client') //Imports ssb-client
const pull = require('pull-stream') //Imports pull-stream
ssbClient((err, sbot) => { //Connects the SSB network
  if(err)
    throw err

  pull(                     
    sbot.createUserStream({  //Finds the messages posted by a specific user
      id: '@5iWnc6I05L1Lo75CD6mbFeCnggoEsKXwYxUuYYtOnsM=.ed25519', //The "@..." is the feed of the user that we are retrieving
      keys: false, //Inorder to see the content of meessages, keys must be false and values true
      values: true //If the opposite is done, then the keys are shown and the content is hidden as an object
    }),
    pull.collect((err, messages) => { //Pulls the messages of the user
      console.log(messages) //Prints messages to terminal so we can see the results    
      
    })
  )
  console.log(sbot.get('%divcCutEoa8eMO6vK7afT5mAwAQttDijx6z+u3vp2Ys=.sha256')) //Needed to make sure that sbot.close() wors
  sbot.close()                                                                  //Must have an sbot command within just purley the ssb client
})
