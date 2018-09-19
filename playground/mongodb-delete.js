const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err)
        return console.log('Unable to connect Mongo Server');
    
    db.collection('Todos').deleteMany({completed:true}).then((res)=>{console.log(res)})
    console.log('Mongodb is connected')
})
