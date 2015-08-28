export default (robot) => {
  robot.respond(/hello/i, (res) => {
    res.send('test');
  });
};
