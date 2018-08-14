function TestVar(){
    var a = 'Test'
     if(true){
         var a = 'Test2'
         console.log(a)
     }
     console.log(a);
}

TestVar();

function TestLet(){
    // let a = "testLet"
    //  if(true) {
    //      let a = 'testLet1'
    //      console.log(a);
    //  }
    //  console.log(a);
    for(let i=0 ; i<10;i++){
        console.log(i);
    }
    console.log(i);
}

TestLet();


function TestConst(){
    const temparr = [];
    temparr.push('Apple');
    temparr.push('Banana');
    console.log(temparr);
    temparr = 'Sarvesh'
}

TestConst();