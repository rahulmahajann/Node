print = () => {
    console.log('after 2 secs using external function');
}

setTimeout(print, 2000);


const geocoder = (locat , callback) => {
    setTimeout(() => {
        const data = {
        latitude:  0,
        longitude: 0
    }

    
    callback(data)

}, 5000);
}

geocoder('delhi', (kaam) => {
    console.log(kaam);
})


const add = (a,b,callback)=>{
    setTimeout(() => {
        callback(a+b)
    }, 10000);
}

add(10,5,(sum) =>{
    console.log(sum);
})