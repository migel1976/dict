const express=require('express');//подключаем библиотеку express
const jsonParser=express.json();//библиотека для работы по обработки данных полученных от форм клиента
const searchController=require('../controllers/searchController.js');//подключаем обработчики для поиска слов в БД
const searchRouter=express.Router();//библиотека для роботы с маршрутизацией на сервере

searchRouter.post('/search_by_word',jsonParser,searchController.searchByWord);//вызываем обработчик для поиска книг в БД

module.exports=searchRouter;//производим экспорт модуля
