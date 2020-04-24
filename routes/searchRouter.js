const express=require('express');
const jsonParser=express.json();
const searchController=require('../controllers/searchController.js');

const searchRouter=express.Router();
searchRouter.post('/search_by_word',jsonParser,searchController.searchByWord);

module.exports=searchRouter;
