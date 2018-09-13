// Created By Sarvesh
// Class for handle the result and statement
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
class Calculator {
    constructor() {
        this.statement = '';
        this.result = '';
    }
    update(val) {
        this.statement += val;
        document.getElementById('statement').innerHTML = this.statement;
    }
    awnswer() {
        document.getElementById('result').innerHTML = eval(this.statement);
        var speech = new SpeechSynthesisUtterance();

        // Set the text and voice attributes.
        //   speech.text = `Your awswer is ${eval(this.statement)}`
        //   speech.volume = 1;
        //   speech.rate = 1;
        //   speech.pitch = 1;
        //   window.speechSynthesis.speak(speech);
    }
    remove() {
        this.statement = this.statement.slice(0,this.statement.length-1);
        document.getElementById('statement').innerHTML = this.statement;
    }
}

let calc = new Calculator();

//function call on load
function onload() {

    // document.getElementById("x").src="stop.png"
    let btnMarkup = [];
    [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', '.', 0, 'DEL', '='].forEach(val => {
        btnMarkup.push(`<button>${val}</button>`);
    })
    document.getElementById('btns').innerHTML = btnMarkup.join('');
    recognition.continuous = true;
   
    // recognition.onresult = function(event) {
    //     console.log('start : ', event);
    // };
    recognition.addEventListener('result', e => {
        const transcript  = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
        if(e.results[0].isFinal)
        console.log(transcript);
    })
    recognition.start();
}
onload();

document.addEventListener('click', function(val) {
    let target;
    target = val['target']['tagName'].toLowerCase();
    if (target == 'button') {
        if(val['target']['innerHTML'] == '=')
        calc.awnswer();
        else if(val['target']['innerHTML'] == 'DEL')
        calc.remove();
        else 
        calc.update(val['target']['innerHTML']);
       
    }
})
