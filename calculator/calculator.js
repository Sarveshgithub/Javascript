function onload() {
    let btnMarkup = [];
    [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', '.', 0, 'DEL', '='].forEach(val => {
        btnMarkup.push(`<button>${val}</button>`);
    })
    console.log(btnMarkup);
    document.getElementById('btns').innerHTML = btnMarkup.join('');

}
onload();