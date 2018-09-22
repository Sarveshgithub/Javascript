class Sudoko {
    constructor(table) {
        this.table = table;
    }
    printTable() {
        for (let i = 0; i < this.table.length; i++) {
            for (let j = 0; j < this.table.length; j++) {
                fill(0)
                rect(i * 40, j * 40, 40, 40);
                stroke(255);
                if (this.table[i][j] === undefined) {
                    this.table[i][j] = 0;
                }
                textSize(30);
                textAlign(CENTER);
                fill(255)
                text(this.table[j][i], i * 41, j * 41, 40, 40);
            }
        }
    }

    solveSudoko() {
        
    }
}