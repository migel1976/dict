const mongoose=require('mongoose');//библиотека для работы с БД Mongo
const config=require('config');//подключаем католог в котором определяется конфигурация сервера, порт,адрес БД

//определяем структуру таблицы в БД
const Schema=mongoose.Schema;
const wordSchema=new Schema({
  name:String,
  count:Number,
  type:String,
  year:Number,
  sentence:String
});

const table=config.get('table');//задаем имя таблицы определенное в конфигурационном файле
module.exports=mongoose.model(table,wordSchema);//производим экспорт модуля для дальнешего вызова
