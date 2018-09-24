class Sudoko {
    constructor(row, num, col) {
        this.row = row;
        this.col = col;
        this.num = num;
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

    checkRow(row) {
        for (var i = 0; i < this.table; i++) {
            if (i === row[1]) {
                continue;
            }
            if (this.table[row[0]][i] === this.table[row[0]][row[1]]) {
                return false;
            }
        }
        return true;
    }

    checkColumn(column) {
        for (var i = 0; i < this.newTable.length; i++) {
            if (i === column[0]) {
                continue;
            }
            if (this.newTable[i][column[1]] === this.newTable[column[0]][column[1]]) {
                return false;
            }
        }
        return true;
    }

    checkSubGrid(grid) {
        for (var i = Math.floor(grid[0] / 3) * 3; i < Math.floor(grid[0] / 3) * 3 + 3; i++) {
            for (var j = Math.floor(grid[1] / 3) * 3; j < Math.floor(grid[1] / 3) * 3 + 3; j++) {
                if ((i === grid[0]) && (j === grid[1])) {
                    continue;
                }
                if (this.newTable[i][j] === this.newTable[grid[0]][grid[1]]) {
                    return false;
                }
            }
        }
        return true;
    }
}