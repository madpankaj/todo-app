const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect Mongodb Server');
    }
    db.collection('Todos').find({completed:true}).toArray().then((doc)=>{
        console.log(JSON.stringify(doc, undefined, 2))
        }, (err)=>{
        console.log('Unable to fetch Users')
    })
    console.log('Mongo Is now Connected');
    db.close();
})
