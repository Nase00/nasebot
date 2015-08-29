'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var screepRoomURI = 'https://screeps.com/a/#!/room/';

exports['default'] = function (robot) {
  robot.hear(/SetScreepRoom/i, function (res) {
    res.send('ES6!');
  });
};

module.exports = exports['default'];