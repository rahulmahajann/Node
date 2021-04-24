// crud operation


const mongodb = require('mongodb')
const mongoclient = mongodb.MongoClient
const objectid = mongodb.ObjectID

                // destructuring 
// const {mongoclient , objectid} = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task_manager'

// const id = new objectid()
// console.log(id.id.length);
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

mongoclient.connect(connectionUrl , {useUnifiedTopology: true} , (error,client) => {
    if(error){
        return console.log('sorry unable to connect');
    }

    // console.log('connected correctly')

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'rahul',
    //     age:20,
    //     pob: 'delhi'
    // }, (error,result) => {
    //     if(error){
    //         return console.log('inable to insert user');
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'yukti',
    //         age:20,
    //         pob:'delhi'
    //     },{
    //         name:'lala',
    //         age:'20'
    //     }
    // ], (error,result) => {
    //     if(error){
    //         return console.log('sorry unable to add data in users');
    //     }

    //     console.log(result.ops[0]);

    // })


    // db.collection('task').insertMany([
    //     {
    //         description: 'create notes',
    //         completed:  false
    //     },{
    //         description: 'buy vegies',
    //         completed:  true     
    //     },{
    //         description: 'message her',
    //         completed:  true
    //     }
    // ], (error,result) => {
    //     if(error){
    //         console.log('sorry unable to add data into task');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').findOne({
    //     name: 'yukti',
    //     pob: 'gzb'
    // }, (error,user) => {
    //     if(error){
    //         return console.log('sorry unable to find the data');
    //     }

    //     console.log(user);

    // })

    //         // find all the related data
    // db.collection('users').find({
    //     pob: 'delhi'
    // }).toArray((error,user) => {
    //     console.log(user);
    // })

    // db.collection('task').findOne({
    //     _id: objectid("608340a8c10b0523989e90ff")
    // }, (error,user) => {
    //     if(error){
    //         return console.log('sorry data not found');
    //     }

    //     console.log(user);

    // })


    // db.collection('task').find({
    //     completed: false
    // }).toArray((error,user) => {
    //     if(error){
    //         return console.log('sorry data not found');
    //     }

    //     console.log(user);

    // })

    //            // promises
    // db.collection('users').updateOne({
    //     _id: new objectid("60848e6f9e77d138046581b7")
    // }, {
    //     $set:{
    //         name:'pritish air-1'
    //     }
    // }).then( (result) =>{
    //     console.log(result);
    // }).catch( (error) => {
    //     console.log(error);
    // })

    // db.collection('users').updateOne({
    //     name: 'lala'
    // },{
    //     $set:{
    //         pob: 'meerut'
    //     }
    // }).then( (result) =>{
    //     console.log(result);
    // }).catch( (error) =>{
    //     console.log(error);
    // })
    
    // db.collection('users').updateOne({
    //     name: 'rahul'
    // },{
    //     $set:{
    //         age:19
    //     }
    // }).then( (result) =>{
    //     console.log(result);
    // }).catch( (error) =>{
    //     console.log(error);
    // })

    db.collection('task').updateMany({
        completed: false
    },{
        $set: {
            completed: true
        }
    }).then( (result) => {
        console.log(result);
    }).catch( (error) => {
        console.log(error);
    })

})  