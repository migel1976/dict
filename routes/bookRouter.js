const express=require('express');
const bookController=require('../controllers/bookController.js');
const bookRouter=express.Router();

bookRouter.post('/upload_book_to_server',bookController.uploadBookToServer);
bookRouter.use('/upload_book_to_db',bookController.uploadBookToDb);

module.exports=bookRouter;


