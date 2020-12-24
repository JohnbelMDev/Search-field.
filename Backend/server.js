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
const MongoClient = require('mongodb').MongoClient

const urlModel = require('./urlModel/urlModel.js')
const cors = require('cors')
// console.log('dbconnect', db);
app.use(cors())

mongoose.connect(db, (err, database) => {
  if (err) return console.log(err)
{  useUnifiedTopology: true
}
  console.log('dbobject',db);
if(err){
  console.log("there's an error connecting to the database");
}
else {
  // console.log('success');
}
}); //

// app.get('/fuck', function(req, res) {
// console.log("hello test end point");
//
//
// db.collection('urls').findOne({}, function (findErr, result) {
//  if (findErr) throw findErr;
//  else {
//    console.log(result);
//  }
// });
//
//
// });

app.get('/test', function(req, res) {
console.log("hello test end point");
let model = new urlModel({ name: ["John",'Simi','Santa'], age: 21 });
model.save(function(err, doc) {
  if (err) return console.error(err);
  console.log("Document inserted succussfully!");
});
});


app.get('/search', function(req, res) {
console.log("hello test end point");
urlModel.find({}, function (findErr, result) {
 if (findErr) throw findErr;
 else {
   res.send(result)
 }
});


});



app.listen(PORT, () => console.log(`Server runiing on port ${PORT}`))
