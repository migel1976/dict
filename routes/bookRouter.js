const express=require('express');//подключаем библиотеку express
const bookController=require('../controllers/bookController.js');//подключаем функции для добавления данных на сервер
const bookRouter=express.Router();//библиотека для роботы с маршрутизацией на сервере
const jsonParser=express.json();//библиотека для работы по обработки данных полученных от форм клиента

bookRouter.post('/upload_book_to_server',bookController.uploadBookToServer);//вызываем обработчик для загрузки книг на сервер
bookRouter.post('/upload_book_to_db',jsonParser,bookController.uploadBookToDb);//вызываем обработчик для загрузки книг на сервер


module.exports=bookRouter;//производим экспорт модуля


