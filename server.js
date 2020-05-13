// const cors=require('cors');
const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const config=require('config');
const multer=require('multer');
const app=express();
const bookRouter=require('./routes/bookRouter.js');
const homeRouter=require('./routes/homeRouter.js');
const searchRouter=require('./routes/searchRouter.js');

const storageConfig=multer.diskStorage({
      destination:(req,file,cb)=>{
          cb(null,'uploads');
      },
      filename:(req,file,cb)=>{
          cb(null,file.originalname);
      }
});
app.use(express.static(__dirname));
// app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(multer({storage:storageConfig}).single('file'));
// app.use(cors());
app.use('/book',bookRouter);
app.use('/',searchRouter);
app.use('/list',homeRouter);

app.use(function(req,res){
      res.status(404).send('Нет такой страницы');
});


const PORT=config.get('port');
const mongoUrl=config.get('mongoUrl');
mongoose.connect(mongoUrl,
  {
      useNewUrlParser: true,
     useUnifiedTopology: true
  }
    ,(err)=>{
  if(err) return console.log('Не могу подключится к БД',err);
  app.listen(PORT,()=>console.log(`Сервер запущен на порту ${PORT}`));
});

