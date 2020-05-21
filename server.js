//файл в котором расположен вызов сервера Express
const express=require('express');//подключаем библиотеку express
const bodyParser=require('body-parser');//вызов библиотеки для расшиофровки данных полученных через строку вызова url
const mongoose=require('mongoose');//библиотека для работы с БД Mongo
const config=require('config');//подключаем католог в котором определяется конфигурация сервера, порт,адрес БД
const multer=require('multer');//библиотека для работы с загражауаемыми книгами
const app=express();//создаем эксземляр express
const homeRouter=require('./routes/homeRouter.js');
const bookRouter=require('./routes/bookRouter.js');//подключаем функции маршрутизации для роботы с загрузкой книг на сервер
// const homeRouter=require('./routes/homeRouter.js');
const searchRouter=require('./routes/searchRouter.js');//подключаем функции маршрутизации для роботы с поиском слов  

//объект в котором определяется куда будет сохранятся книги на сервере
const storageConfig=multer.diskStorage({
      destination:(req,file,cb)=>{
          cb(null,'uploads');
      },
      filename:(req,file,cb)=>{
          cb(null,file.originalname);
      }
});

// app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:false}));//говорим серверу, что бы использовал библиотеку для рассшифровки данных полученных от клиента
app.use(multer({storage:storageConfig}).single('file'));//говорим серверу куда и как будут сохраняться данные на сервере

app.use('/book',bookRouter);//указываем серверу по какому адресу находится обработчик запросов на загрузку книг
app.use('/',searchRouter);//указываем серверу по какому адресу находится обработчик запросов на поиск книг
app.use('/list',homeRouter);

//обработчик неправильного введеного адресса
app.use(function(req,res){
      res.status(404).send('Нет такой страницы');
});


const PORT=config.get('port');//переменная в которой содержится порт на котором работает сервер, взят из конфигурационного фойла
const mongoUrl=config.get('mongoUrl');//переменная в которой содержится адресс БД

//подключаемся к БД, если подключение прошло успешно то включаем сервер
mongoose.connect(mongoUrl,
  {
      useNewUrlParser: true,
     useUnifiedTopology: true
  }
    ,(err)=>{
  if(err) return console.log('Не могу подключится к БД',err);
  app.listen(PORT,()=>console.log(`Сервер запущен на порту ${PORT}`));//если подключение к БД прошло успешно вызываем сервер
});

