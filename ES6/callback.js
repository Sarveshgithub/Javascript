function onload(){
    function first(param, callback) {
        console.log('i am good! ' +param);
        callback();
    }
   let callback = function(){
    console.log('i am a callback function')
}
   first('sarvesh',callback);
}
onload();