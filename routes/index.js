const express = require('express');
const router = express.Router();
const { User, Slang, Url } = require('../models');

const axios = require('axios');
const HOME = "비밀비밀비밀~~";

router.get('/', (req, res) => {
  res.send('okkkkkk');
});

router.post('/', async (req, res, next) => {

  // Request Data Set
  
  // Call Statistics API
  const exResult = await axios.post(HOME, {crawling: req.body.crawling});
  const result = exResult.data;
  
  // Data Filtering to Percent, Default : 0.7
  const data = result.filter(e => e.persent > 0.7);

  /// Find Or Create User
  const user = await User.findOrCreate({
    where: { key: req.body.clientId},
    defaults: {
      key: req.body.clientId
    }
  })
  /// Create Url
  const url = await Url.create({
    url: req.body.url,
  });
  /// Url - User
  await user[0].addUrls(url);

  // Data(Slang) Insert to DataBase
  /// Insert Slang
  data.map((slang) => console.log(req.body.clientId ,slang.string, slang.persent));// Logging
  const slangData = await Promise.all(data.map((slang) =>
    Slang.create({slang: slang.string, persent: slang.persent})));
  await url.addSlangs(slangData);

  // Response - Status
  res.status(201).send("Ok");

});

//Post /data Request
router.post('/post', (req, res) => {
  const tempData = {
    urlData: `${req.body.url} 확인!`,
    crawlingdata: `${req.body.crawling} 확인!`,
  }
  res.status(201).json(tempData);
});

//Post All Data Request
router.post('/data', async (req, res, next) => {
  //Find User id
  const user = await User.findOne({
    where: { key: req.body.key}, 
    attributes: ['id'],
  });
  //Find Data
  const data = await Url.findAll({
    where: { UserId: user.id },
    attributes: ['url'],
    include: [{
      model: Slang,
      attributes: ['slang', 'persent'],
    }]
  });
  res.status(201).json({ data: data});
});


module.exports = router;
