const express=require('express');
const jsonParser=express.json();
const homeController=require('../controllers/homeController.js');
const homeRouter=express.Router();

// homeRouter.get('/:letter',homeController.list);
homeRouter.get('/',homeController.list);
// homeRouter.get(jsonParser,homeController.list);

module.exports=homeRouter;
