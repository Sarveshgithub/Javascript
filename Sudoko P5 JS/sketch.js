let table = [   [4, 2,   ,  ,  ,  ,  ,  , 9],
                [ ,  , 6, 7,  ,  ,  , 2,  ],
                [ , 9,  ,  , 2, 5,  ,  ,  ],
                [8,  ,  ,  ,  ,  ,  ,  ,  ],
                [ ,  , 1, 3, 7, 9, 5,  ,  ],
                [ ,  ,  ,  ,  ,  ,  ,  , 1],
                [ ,  ,  , 4, 6,  ,  , 3,  ],
                [ , 5,  ,  ,  , 3, 9,  ,  ],
                [3,  ,  ,  ,  ,  ,  , 7, 2],
            ];
let sudoko =[],
    zeroElement = [];            

function setup() {
	createCanvas(360,360);
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table.length; j++) {
            if (table[i][j] === undefined) {
                table[i][j] = 0;
                zeroElement.push([i, j]);
            }
            sudoko.push(new Sudoko(i,j,table[i][j]));
        }
    }
   console.log('sudoko',sudoko);
}

function draw() {
    background(200);
    
    for(let i=0; i<sudoko.length;i++) {
       // console.log(sudoko[i]);
        sudoko[i].printTable();
    }
    // soduko.printTable1();
    // soduko.main();
        //     var nextCell;
        //     var breakpoint = 5;
        //    // this.printTable();
        //    // console.table(this.newTable);
        //     for(var i=0; i<zeroElement.length;) {
        //         var possibleMove = false;
        //         nextCell = zeroElement[i];
        //         for(var j=table[nextCell[0]][nextCell[1]]+1; j<10; j++) {
        //             table[nextCell[0]][nextCell[1]] = j;
        //             if(this.checkSubGrid(nextCell) && this.checkColumn(nextCell) && this.checkRow(nextCell)) { 
        //                 possibleMove = true;
        //                 break;
        //             }
        //         }
        //         if (!possibleMove) {
        //             this.newTable[nextCell[0]][nextCell[1]] = 0;
        //             i--;
        //         }
        //         else {
        //             i++;
        //         }
        //         breakpoint++;
        //        // this.printTable1();
        //     }
            //console.table(this.newTable);
        

}