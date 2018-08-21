function onload(){
    let newFunction = (param) => {
        //console.log(`This is the function ${param}`);
    }
    newFunction('Sarvesh');

    //Iteration over a loop

    let arrayofString = ['apple', 'mango','papaya'];
    arrayofString.forEach(val => {
        console.log(`values of array ${val}`);
    })
}
onload();