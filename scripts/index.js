exports['default'] = function (robot) {
  robot.respond(/hello/i, function (res) {
    res.send('test');
  });
};

module.exports = exports['default'];
