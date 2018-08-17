function onload(){
   let newSet = new Set();
   newSet.add(1);
   newSet.add('string');
   newSet.add(['mango','apple']);
   let obj = {1:'mango', 2:'apple'};
   newSet.add(obj);
  // console.log(newSet);

    //methods in sets

    //console.log(newSet.has('string'));
    //newSet.clear();
    newSet.delete(1)
     //console.log(newSet);

     //Interating over set

    //  for(let i of newSet){
    //      console.log(i);
    //  }

    let arr = Array.from(newSet)
    console.log(arr);
}
onload()