// crud operation


const mongodb = require('mongodb')

const mongoclient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task_manager'

mongoclient.connect(connectionUrl , {useUnifiedTopology: true} , (error,client) => {
    if(error){
        return console.log('sorry unable to connect');
    }

    console.log('connected correctly')
})  