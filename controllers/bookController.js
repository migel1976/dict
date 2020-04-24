const Word=require('../models/word.js');
const {spawn}=require('child_process');
const fs=require('fs');

exports.uploadBookToServer=function(req,res){
  //res.send('добавление книги на сервер');
  console.log('uploadBookToServer');
  console.log(req.file.path);
  var filePath=req.file.path;
  if(!filePath){
      console.log('ошибка при загрузке файла');
      res.send('ошибка при загрузке файла');
  }
  else{
      console.log('файл загружен');
      res.send(filePath);
  }
};

exports.uploadBookToDb=function(req,res){
  //res.send('добавление книги в БД');
  if(!req.body) return res.sendStatus(400);
  // console.log('req.body.year',req.body.year);
  // res.send('Алоха от сервера');
  const year=req.body.year;
  const type=req.body.type;
  const filePath=req.body.filePath;
  const path='./'+filePath;
  
  var dataToSend;
  const python=spawn('python',['./scripts/analize.py',path,year,type]);
      python.stdout.on('data',function(data){
          console.log('Pipe data from python script ...');
          dataToSend=data.toString();
      });
      python.on('close',(code)=>{
          console.log(`child process close all stdio with code ${code}`);
          console.log(dataToSend);
          //res.send(dataToSend)
          let wordData=fs.readFileSync('output.json');
          let words=JSON.parse(wordData);
          Word.insertMany(words,function(err){
            if(err) return console.log(err);
             res.send('Данные были добавлены в  БД MongoDb');
          });
      });
  };
