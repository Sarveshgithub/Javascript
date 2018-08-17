function onload(){

    let newMap = new Map();
    newMap.set('number', 1);
    newMap.set('string', 'Sarvesh');
    newMap.set('array',['apple','mango']);
    //console.log(newMap);
    console.log(newMap.get('array'))
    
    //Interating over Map 
    for([key, value] of newMap){
        console.log(`${key}  ${value}`)
    }

}
onload();