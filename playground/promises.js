const doworkpromise = new Promise( (resolve,reject) => {
    setTimeout( () => {
        reject('sorry! :( things went wrong')
        resolve(['rahul'])
    },2000)
})

doworkpromise.then( (result) => {
    console.log('success',result);
}).catch( (error) => {
    console.log('error!',error);
})