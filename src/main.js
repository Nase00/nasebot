const screepRoomURI = 'https://screeps.com/a/#!/room/';

export default (robot) => {
  robot.hear(/set screep room/i, function (res) {
    robot.brain.set('screepRoom', )
    res.send('Setting ');
  });
};

// robot.respond /have a soda/i, (res) ->
//   # Get number of sodas had (coerced to a number).
//   sodasHad = robot.brain.get('totalSodas') * 1 or 0

//   if sodasHad > 4
//     res.reply "I'm too fizzy.."

//   else
//     res.reply 'Sure!'

//     robot.brain.set 'totalSodas', sodasHad+1
// robot.respond /sleep it off/i, (res) ->
//   robot.brain.set 'totalSodas', 0
//   msg.reply 'zzzzz'
