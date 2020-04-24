const Word=require('../models/word.js');

exports.searchByWord=function(req,res){
  if(!req.body) return res.send(400);
    console.log('searchByWord',req.body.search);
    Word.find({name:req.body.search},function(err,text){
    //Word.findOne({name:req.body.search},function(err,text){
    if(err) return console.log(err);
    console.log('search',text);
    res.send(text);
    });
};
