const Word=require('../models/word.js');//подключаем модель в которой определена структура таблицы 
const {spawn}=require('child_process');//библиотека нужна для вызова скрипта питона
const fs=require('fs');//библиотека для работы с файловой системой

//обработчик для загрузки файла книги на сервер
exports.uploadBookToServer=function(req,res){
  console.log('uploadBookToServer');
  console.log(req.file.path);
  var filePath=req.file.path;//из входящего вызова получаем данные об имени файла
  if(!filePath){
      console.log('ошибка при загрузке файла');
      res.send('ошибка при загрузке файла');
  }
  else{
      console.log('файл загружен');
      res.send(filePath);//возращаем клиенту имя файла для дальнейшей загрузки слов в БД
  }
};

//обработчик для загрузки слов в БД
exports.uploadBookToDb=function(req,res){
  if(!req.body) return res.sendStatus(400);
	//считываем данные полученные из формы загрузки
  const year=req.body.year;//год издания
  const type=req.body.type;//жанр книги
  const filePath=req.body.filePath;//путь где сохранена книга на сервере
  const path='./'+filePath;
  
  var dataToSend;
	//процедура вызова скрипта питона analize.py в который передается путь, год и жанр
	//скрипт осуществляет поиск слов старославянского алфавита, создает файл в формате json, в котором 
	//сохранены найденые слова, жанр, год издания книги, этот файл сохраняется на сервере, который считывается 
	//для последущего анализа и добавления данных из него в БД
  const python=spawn('python',['./scripts/analize.py',path,year,type]);
      python.stdout.on('data',function(data){
          console.log('Pipe data from python script ...');
          dataToSend=data.toString();
      });
      python.on('close',(code)=>{
          console.log(`child process close all stdio with code ${code}`);
          console.log(dataToSend);
          let wordData=fs.readFileSync('output.json');//производим считывание полученого файла
          let words=JSON.parse(wordData);//заносим в переменную содержимое output.json

		  //добавляем данные в БД
          Word.insertMany(words,function(err){
            if(err) return console.log(err);
             res.send('Данные были добавлены в  БД MongoDb');
          });
      });
  };
