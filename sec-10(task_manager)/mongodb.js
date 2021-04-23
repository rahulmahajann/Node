// crud operation


const mongodb = require('mongodb')

const mongoclient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task_manager'

mongoclient.connect(connectionUrl , {useUnifiedTopology: true} , (error,client) => {
    if(error){
        return console.log('sorry unable to connect');
    }

    // console.log('connected correctly')

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'rahul',
        age:19
    }, (error,result) => {
        if(error){
            return console.log('inable to insert user');
        }
        console.log(result.ops);
    })

    db.collection('users').insertMany([
        {
            name:'yukti',
            age:20,
            pob:'delhi'
        },{
            name:'lala',
            age:'20'
        }
    ], (error,result) => {
        if(error){
            return console.log('sorry unable to add data in users');
        }

        console.log(result.ops[0]);

    })


    db.collection('task').insertMany([
        {
            description: 'create notes',
            completed:  false
        },{
            description: 'buy vegies',
            completed:  true     
        },{
            description: 'message her',
            completed:  true
        }
    ], (error,result) => {
        if(error){
            console.log('sorry unable to add data into task');
        }

        console.log(result.ops);
    })

})  