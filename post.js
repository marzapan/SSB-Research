var pull = require('pull-stream') // Imports pull-stream
var ssbClient = require('ssb-client') //Imports ssb-client
ssbClient(function (err, sbot) { //Connects to the ssb-client network
  sbot.publish({ //post the message 
    type: 'post',
    text: 'Finally got my user feed to work'
  }, function (err, msg) {
      //if desired can add a console.log() statement to see the post in terminal
  })
  sbot.close() //Closes the script
})