const express=require('express');
const mongoose=require('mongoose');
const multer=require('multer');
const app=express();
const bookRouter=require('./routes/bookRouter.js');
const homeRouter=require('./routes/homeRouter.js');

const storageConfig=multer.diskStorage({
      destination:(req,file,cb)=>{
          cb(null,'uploads');
      },
      filename:(req,file,cb)=>{
          cb(null,file.originalname);
      }
});
app.use(express.static(__dirname));
app.use(multer({storage:storageConfig}).single('file'));

app.use('/book',bookRouter);
app.use('/',homeRouter);

app.use(function(req,res){
      res.status(404).send('Нет такой страницы');
});

mongoose.connect('mongodb://localhost/wordsdb',(err)=>{
  if(err) return console.log('Не могу подключится к БД',err);
  app.listen(3001,()=>console.log('Сервер запущен на порту 3001'));
});
