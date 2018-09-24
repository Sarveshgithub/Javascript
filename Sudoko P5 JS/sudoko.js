class Sudoko {
    constructor(col, row, num, table) {
        this.col = col;
        this.row = row;
        this.num = num;
        this.table = table;
    }

    printTable() {
        fill(0)
        rect(this.row * 40, this.col * 40, 40, 40);
        stroke(255);
        textSize(30);
        textAlign(CENTER);
        fill(255)
        text(this.num, this.row * 41, this.col * 41, 40, 40);
    }

    checkRow() {
        // console.log('val:', this.num, 'col:', this.row, 'row:', this.col);
        // console.log('data', this.table[this.col][this.row]);
        for (var i = 0; i < this.table.length; i++) {
            //  console.log('data-row', this.table[this.col][i]);
            if (i === this.row) {
                // console.log('data-prest', this.table[this.col][i]);
                continue;
            }
            if (this.table[this.col][i] === this.num) {
                // console.log(this.table, this.row)
                return false;
            }
        }
        return true;
    }

    checkColumn() {
        for (var i = 0; i < this.table.length; i++) {
             console.log('data-col', this.table[i][this.row]);
            if (i === this.col) {
                // console.log('data-prest', this.table[i][this.row]);
                continue;
            }
            if (this.table[i][this.row] === this.num) {
                return false;
            }
        }
        return true;
    }

    checkSubGrid() {
        //  console.log('val:', this.num, 'col:', this.row, 'row:', this.col);
        for (var i = Math.floor(this.col / 3) * 3; i < Math.floor(this.col / 3) * 3 + 3; i++) {
            for (var j = Math.floor(this.row / 3) * 3; j < Math.floor(this.row / 3) * 3 + 3; j++) {
                
                if ((i === this.col) && (j === this.row)) {
                    continue;
                }   
                if (this.table[i][j] === this.table[this.col][this.row]) {
                    return false;
                }
            }
        }
        return true;
    }
}