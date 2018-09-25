function onload() {
// Array Method
let arr ; 
arr = Array.from('sarvesh');
console.log(Array.from([1,2,3], function(val){
    return val+1;
}));
}

onload();