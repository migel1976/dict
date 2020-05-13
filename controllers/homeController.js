const Word=require('../models/word.js');

exports.list=(req,res)=>{
	console.log(req.query.find);
	
	var query={};
	var q=req.query.find;
	var re = new RegExp('^'+q);
	console.log(re);
	query.name={$regex:re, $options:'i'};
	Word.find(query,{"name":1,"count":1,_id:0},(err,list)=>{
	if(err) return status(400).send(err);
	 console.log('list all records in db:',list);
	res.send(list);
 });
	 // Word.find({},{"name":1,"count":1,_id:0},(err,list)=>{
	// const letter=req.params.letter;
	// let letter=`въ`;
	// console.log('letter is ', req.params.letter);
		// console.log('req.body ',req.body);	
	// console.log('letter is ', letter);
	// const query=`/^ц/`;
	// const query='/^'+letter+'/';
	// const query='"name":/^'+letter+'/';
	// const query=`"name":/^а/`;
	// const query=`въ`;
    // console.log(query);	
	
	// Word.find({name:query},{"name":1,"count":1,_id:0},(err,list)=>{
	// Word.find({query},{"name":1,"count":1,_id:0},(err,list)=>{
	// Word.find({"name":query},{"name":1,"count":1,_id:0},(err,list)=>{
	
	// Word.find({"name":+query},{"name":1,"count":1,_id:0},(err,list)=>{
	// Word.find({"name":/^ц/},{"name":1,"count":1,_id:0},(err,list)=>{
	// Word.find({name:/^req.params.letter/},{"name":1,"count":1,_id:0},(err,list)=>{
	// Word.find({name:req.params.letter},{"name":1,"count":1,_id:0},(err,list)=>{
	// // Word.find({name:letter},(err,list)=>{
	// Word.find({"name":"req.query.find"},{"name":1,"count":1,_id:0},(err,list)=>{
    // var word={"name":/^req.query.find/};	
	   // query.name={$regex:/^ц/, $options:'i'};

	// var re = new RegExp('/^' + q + '/');
	
	// searchQuery.product_name= {$regex: req.query.search.value, $options: 'i'};
	// Word.find(word,{"name":1,"count":1,_id:0},(err,list)=>{
	// Word.find(query,(err,list)=>{
	// Word.find({'name':{'$regex':req.query.find}},(err,list)=>{
    // var q=req.query.find;
	// console.log(q);
	// var query={"name":/^+"ц"+/};

	// Word.find({'name':{'$regex':req.query.find.value}},(err,list)=>{
// 	Word.find({"name":req.query.find},(err,list)=>{
	// Word.find({"name":/^ц/},(err,list)=>{
	// Word.find({"name":{"$regex":"/^в/"}},(err,list)=>{
	
};
