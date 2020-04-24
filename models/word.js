const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const wordSchema=new Schema({
  name:String,
  count:Number,
  type:String,
  year:Number
});

module.exports=mongoose.model('Probe',wordSchema);
