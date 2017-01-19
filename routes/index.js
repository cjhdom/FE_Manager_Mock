var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getWeightAll', getWeightAll);
router.put('/setWeightList', setWeightList);

function getWeightAll (req, res) {

}

function setWeightList (req, res) {
  var backend = req.query['backend'];
  var servers = req.query['servers'];

  try {
    servers = JSON.parse(servers);
  } catch (e) {
    return res.json(500, false);
  }

  async.each(servers, function (server, callbackEach) {

  }, function (error) {
    if (error) {
      res.json(500, false);
    } else {
      res.json('Success');
    }
  });
}

module.exports = router;
