var pull = require('pull-stream')
var ssbClient = require('ssb-client')
ssbClient(function (err, sbot) {
  sbot.publish({
    type: 'post',
    text: 'Finally got my user feed to work'
  }, function (err, msg) {
  })
  sbot.close()
})