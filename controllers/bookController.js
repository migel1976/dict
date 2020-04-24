exports.uploadBookToServer=function(req,res){
  //res.send('добавление книги на сервер');
  console.log('uploadBookToServer');
  console.log(req.file.path);
  var filePath=req.file.path;
  if(!filePath){
      console.log('ошибка при загрузке файла');
      res.send('ошибка при загрузке файла');
  }
  else{
      console.log('файл загружен');
      res.send(filePath);
  }
};

exports.uploadBookToDb=function(req,res){
  res.send('добавление книги в БД');
};
