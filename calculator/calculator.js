// Created By Sarvesh
// Class for handle the result and statement
class Calculator {
    constructor() {
        this.statement = '';
        this.result = '';
        this.voiceStart = false;
    }
    update(val) {
        this.statement += val;
        document.getElementById('statement').innerHTML = this.statement;
    }
    awnswer() {
        document.getElementById('result').innerHTML = eval(this.statement);
        if (this.voiceStart) this.speak();
    }
    remove() {
        this.statement = this.statement.slice(0, this.statement.length - 1);
        document.getElementById('statement').innerHTML = this.statement;
    }
    voice(val) {
        this.voiceStart = val;
    }
    speak() {
        // Set the text and voice attributes.
        var speech = new SpeechSynthesisUtterance();
        speech.text = `Your awswer is ${eval(this.statement)}`
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    }
}
let calc = new Calculator();
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
//function call on load
function onload() {
    // document.getElementById("x").src="stop.png"
    let btnMarkup = [];
    [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', '.', 0, 'DEL', '='].forEach(val => {
        btnMarkup.push(`<button>${val}</button>`);
    })
    document.getElementById('btns').innerHTML = btnMarkup.join('');
}
onload();

document.addEventListener('click', function(val) {
    let target;
    target = val['target']['tagName'].toLowerCase();
    if (target == 'button') {
        if (val['target']['innerHTML'] == '=') calc.awnswer();
        else if (val['target']['innerHTML'] == 'DEL') calc.remove();
        else calc.update(val['target']['innerHTML']);
    }
})
recognition.continuous = true;
recognition.onresult = function(e) {
    const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('')
    if (e.results[0].isFinal) {
        splitVoice(transcript)
        if (transcript.includes('equal')) {
            calc.awnswer();
        }
    }
};

function toggle() {
    console.log(document.getElementById('checkbox').checked);
    if (document.getElementById('checkbox').checked) {
        recognition.start();
        calc.voice(true);
    } else {
        recognition.stop();
        speechstart = false;
        calc.voice(false);
    }
}

function splitVoice(val) {
    
    let actualval =  val.replace('multi','*')
    .replace('div','/')
    .replace('add','+')
    .replace('x','*')
    .replace(/ /g,'')
    .match(/\d|\+|\-|\*|\./g).join('')
    calc.update(actualval);
}