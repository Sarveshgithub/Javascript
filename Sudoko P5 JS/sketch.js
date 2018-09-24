let table = [[4, 2, , , , , , , 9],
[, , 6, 7, , , , 2,],
[, 9, , , 2, 5, , ,],
[8, , , , , , , ,],
[, , 1, 3, 7, 9, 5, ,],
[, , , , , , , , 1],
[, , , 4, 6, , , 3,],
[, 5, , , , 3, 9, ,],
[3, , , , , , , 7, 2],
];
let sudoko = [],
    zeroElement = [],
    current,
    index = 0,
    number = 1,
    stack = []

function setup() {
    createCanvas(360, 360);
    for (let col = 0; col < table.length; col++) {
        for (let row = 0; row < table.length; row++) {
            if (table[col][row] === undefined) {
                table[col][row] = 0;
                zeroElement.push([col, row]);
            }
            sudoko.push(new Sudoko(col, row, table[col][row], table));
        }
    }
    console.log('sudoko', sudoko);
    //console.log('checkrow', sudoko[80].checkRow());
    //console.log('checkcol', sudoko[80].checkSubGrid());
    current = sudoko[index];

    //console.log(current.col);
}

function draw() {
    background(200);

    for (let i = 0; i < sudoko.length; i++) {
        // console.log(sudoko[i]);
        sudoko[i].printTable();
    }
    if (current.num === 0) {
        current.num = number;
        if (!current.checkRow() && !current.checkColumn() && !current.checkRow()) {
            console.log('sfsdf');
           // number = 0;
            index++;
            current = sudoko[index];
            stack.push(current);
        }
        else if (number > 8) {
            current.num = 0;
            current =stack.pop();
            number = current.num;
            current.num = 0;
        }

    }
    else {
        index++;
        current = sudoko[index];
        number = 1;
    }
    number++;

    // for(var j=0; j<10; j++) {
    //     current.num = j;
    //     if(current.checkSubGrid() && current.checkColumn() && current.checkRow()) { 
    //         //possibleMove = true;
    //         break;
    //     }
    // }
    // if (!possibleMove) {
    //     this.newTable[nextCell[0]][nextCell[1]] = 0;
    //     i--;
    // }
    // else {
    //     i++;
    // }
    // breakpoint++;
    // this.printTable1();
    // }
    // console.table(this.newTable);


}