function onload() {
    // let newPromise = new Promise((resolve, reject) => {
    //     resolve(4)
    // });

    // newPromise.then((res) => {
    //     console.log('res::'+res);
    // })

    let newPromise = new Promise((resolve, reject) => {
        let user = false;

        if(user) 
         resolve('present');
         else
         reject('not present');
    });

    newPromise.then((res) =>{
        console.log('User is: '+res);
    }).catch((res) => {
        console.log('User is : '+res);
    })


}
onload()