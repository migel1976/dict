const Word=require('../models/word.js');//подключаем модель в которой определена структура таблицы 

//обработчик для поиска слов в БД
exports.searchByWord=function(req,res){
  if(!req.body) return res.send(400);
    console.log('searchByWord',req.body.search);
    Word.find({name:req.body.search},function(err,text){//делаем запрос к БД на поиск слова
    //Word.findOne({name:req.body.search},function(err,text){
    if(err) return console.log(err);
    console.log('search',text);
    res.send(text);//возращаем клиенту полученный результат из БД
    });
};
