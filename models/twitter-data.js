const OAuth = require('oauth');
require('dotenv').config();

module.exports = {
  getOauthTwitter: function(datasearch, next){
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.consumerKey,
      process.env.consumerSecret,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${datasearch}`,
      process.env.accessToken, //test user token
      process.env.accessTokenSecret, //test user secret
      function (e, data){
        if (e) console.error(e);
        next(data);
      });
  }
}
