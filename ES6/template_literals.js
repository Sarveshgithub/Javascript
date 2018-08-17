
function onload(){

 function callfuntion(data){
     return data.toUpperCase();
 }   
let data = 'I am good';    
let template = `<h1>${callfuntion('Sarvesh')}</h1> 
                 <p>This is my name ${data}</p> `;
    document.getElementById('template').innerHTML = template;
}


onload();