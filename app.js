const express = require('express');
const app = express();
const OAuth = require('oauth');

app.listen(3000, (req, res)=>{
  console.log('app listen at port 3000')
})

var index = require('./routes/index');

app.use('/', index);
