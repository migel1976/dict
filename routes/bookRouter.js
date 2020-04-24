const express=require('express');
const bookController=require('../controllers/bookController.js');
const bookRouter=express.Router();
const jsonParser=express.json();

bookRouter.post('/upload_book_to_server',bookController.uploadBookToServer);
bookRouter.post('/upload_book_to_db',jsonParser,bookController.uploadBookToDb);

module.exports=bookRouter;


