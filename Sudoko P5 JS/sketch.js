var table = [   [4, 2,   ,  ,  ,  ,  ,  , 9],
                [ ,  , 6, 7,  ,  ,  , 2,  ],
                [ , 9,  ,  , 2, 5,  ,  ,  ],
                [8,  ,  ,  ,  ,  ,  ,  ,  ],
                [ ,  , 1, 3, 7, 9, 5,  ,  ],
                [ ,  ,  ,  ,  ,  ,  ,  , 1],
                [ ,  ,  , 4, 6,  ,  , 3,  ],
                [ , 5,  ,  ,  , 3, 9,  ,  ],
                [3,  ,  ,  ,  ,  ,  , 7, 2],
            ];
let sudoko;            
function setup() {
	createCanvas(360,360);
	soduko = new Sudoko(table);	
}

function draw() {
	background(200);
	soduko.printTable();

}