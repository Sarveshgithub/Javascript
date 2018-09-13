// Created By Sarvesh
// Class for handle the result and statement
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
    }
    remove() {
        this.statement = this.statement.slice(0,this.statement.length-1);
        document.getElementById('statement').innerHTML = this.statement;
    }
}

let calc = new Calculator();
//function call on load
function onload() {
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
        if(val['target']['innerHTML'] == '=')
        calc.awnswer();
        else if(val['target']['innerHTML'] == 'DEL')
        calc.remove();
        else 
        calc.update(val['target']['innerHTML']);
       
    }
})