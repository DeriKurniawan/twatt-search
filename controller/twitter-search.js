const model = require('../models/twitter-data');

module.exports = {
  getOauth: (req, res)=>{
    let search = req.params.search;
    model.getOauthTwitter(search, (data)=>{
      res.send(data)
    })
  }
}
