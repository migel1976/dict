const mongoose=require('mongoose');
const config=require('config');

const Schema=mongoose.Schema;

const wordSchema=new Schema({
  name:String,
  count:Number,
  type:String,
  year:Number,
  sentence:String
});

const table=config.get('table');
module.exports=mongoose.model(table,wordSchema);
