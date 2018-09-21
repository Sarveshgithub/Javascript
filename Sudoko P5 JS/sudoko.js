class Sudoko {
    constructor(table) {
        this.table = table;
    }
    printTable() {
        //  console.log('table', this.table);
        for (let i = 0; i < this.table.length; i++) {
            //console.log(this.table[i]);
            for (let j = 0; j < this.table.length; j++) {
                fill(0)
                rect(i * 30, j * 30, 30, 30);
                stroke(255);
                // textSize(30);
                if (this.table[i][j] === undefined) {
                    this.table[i][j] = 0;
                }
                //console.log(this.table[i][j])
                textAlign(CENTER);
                fill(255)
                text(this.table[j][i], i * 31, j * 31, 30, 30);
            }
        }
        //console.table(this.table);
    }
}