"use strict";
let start = [
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
    [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
    [0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
    [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0,]
];
class Pawn {
    constructor(colorPawn, x, y) {
        this.colorPawn = colorPawn;
        this.x = x;
        this.y = y;
        this.colorPawn = colorPawn;
        this.x = x;
        this.y = y;
    }
}
function enableToMove(pawn, board, tile) {
    if ((tile === null || tile === void 0 ? void 0 : tile.getAttribute('name')) === 'isEnable') {
        tile.removeAttribute('name');
    }
    else if ((pawn === null || pawn === void 0 ? void 0 : pawn.colorPawn) === 'black') {
        if (board[pawn.x - 1][pawn.y - 1] === null ||
            board[pawn.x - 1][pawn.y + 1] === null) {
            tile === null || tile === void 0 ? void 0 : tile.setAttribute('name', 'isEnable');
            console.log(board[pawn === null || pawn === void 0 ? void 0 : pawn.x].indexOf(pawn));
        }
    }
    else if ((pawn === null || pawn === void 0 ? void 0 : pawn.colorPawn) === 'white') {
        if (board[pawn.x + 1][pawn.y + 1] === null ||
            pawn && board[pawn.x + 1][pawn.y - 1] === null) {
            tile === null || tile === void 0 ? void 0 : tile.setAttribute('name', 'isEnable');
            console.log(board[pawn === null || pawn === void 0 ? void 0 : pawn.x][pawn === null || pawn === void 0 ? void 0 : pawn.y]);
        }
    }
}
function createTile(board, colorTile) {
    const tile = document.createElement("div");
    tile.className = `${colorTile}Tile`;
    board === null || board === void 0 ? void 0 : board.appendChild(tile);
    return tile;
}
function createPawn(tile, couleurPawn, pawn, board) {
    const imgPawn = document.createElement("img");
    imgPawn.src = `assets/pion-${couleurPawn}.png`;
    tile === null || tile === void 0 ? void 0 : tile.appendChild(imgPawn);
    imgPawn.addEventListener("click", () => {
        enableToMove(pawn, board, tile);
    });
}
let i = 0;
let j = 0;
let startPawnBoard = Array(10).fill(null)
    .map(() => Array(10).fill(null));
let pawnRow = startPawnBoard[i];
for (i = 0; i < startPawnBoard.length; i++) {
    for (j = 0; j < pawnRow.length; j++) {
        if ((i + j) % 2 !== 0) {
            if (start[i][j] === 1) {
                startPawnBoard[i][j] = new Pawn('white', i, j);
            }
            else if (start[i][j] === -1) {
                startPawnBoard[i][j] = new Pawn('black', i, j);
            }
            else { }
        }
        else { }
    }
}
function buildBoard(board) {
    var _a, _b;
    let checkboard = document.querySelector(".checkboard");
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < pawnRow.length; j++) {
            if ((i + j) % 2 !== 0) {
                if (((_a = board[i][j]) === null || _a === void 0 ? void 0 : _a.colorPawn) === 'white') {
                    createPawn(createTile(checkboard, 'black'), 'b', board[i][j], board);
                }
                else if (((_b = board[i][j]) === null || _b === void 0 ? void 0 : _b.colorPawn) === 'black') {
                    createPawn(createTile(checkboard, 'black'), 'n', board[i][j], board);
                }
                else {
                    createTile(checkboard, 'black');
                }
            }
            else {
                createTile(checkboard, 'white');
            }
        }
    }
}
let newPawnBoard = startPawnBoard;
newPawnBoard[6][1] = null;
newPawnBoard[5][0] = new Pawn('black', 5, 0);
newPawnBoard[3][8] = null;
newPawnBoard[4][9] = new Pawn('white', 4, 9);
console.log(newPawnBoard);
buildBoard(newPawnBoard);
function gameGame() {
}
function movePiece() {
}
//# sourceMappingURL=index.js.map