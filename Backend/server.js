const express = require('express');


const app = express();


app.use(express.json({
  extented: false
}))


// Steps 1: have some fake data
// orginaurl:'google.com'
// 'replace':2q
// orginaurl:'google.com'
// 'replace':2q

// orginaurl:'google.com'
// 'replace':2q


const PORT = 5000;
const mongoose = require('mongoose')

const config = require('config')
const db = config.get('mongoURI')
const MongoClient = require('mongodb').MongoClient;

const urlModel = require('./urlModel/urlModel.js')
const cors = require('cors')
// console.log('dbconnect', db);
app.use(cors())
MongoClient.connect(db,{useNewUrlParser: true}, function(err, client) {
  // assert.equal(null, err);
  console.log("Connected successfully to server");

  const database = client.db('Search');
  app.get('/test', function(req, res) {

    database.collection('Search').find().toArray((err,result) => {
   if(err){
     console.log('error',err);
   }
console.log(result)

})

  });

  client.close();

});

//
// app.get(/(.*)/, function(req, res) {
//
//   const id = req.path.slice(1)
//   // console.log(id);
//   urlModel.findById(id, function(err, url) {
//     console.log(url)
//   res.send(url);
//   });
//
//
//
//
//
// res.send('error');
// });
//

// shortUrl.short('https://codeportal.in', function(err, url){
//     console.log('hello',url);
// });

// app.get('/test', function(req, res) {
//
//   database.collection('Search').find({},(err,result) => console.log(result))
//
// });



app.listen(PORT, () => console.log(`Server runiing on port ${PORT}`))
