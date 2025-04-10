
let start: number[][] = [
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
    constructor(public colorPawn: 'white' | 'black', public x: number, public y: number,) {
        this.colorPawn = colorPawn
        this.x = x
        this.y = y
    }
}


function enableToMove(pawn: Pawn | null, board: (Pawn | null)[][], tile: HTMLDivElement | null) {


    if (tile?.getAttribute('name') === 'isEnable') {
        tile.removeAttribute('name')

    } else if (pawn?.colorPawn === 'black') {
        if (board[pawn.x - 1][pawn.y - 1] === null ||
            board[pawn.x - 1][pawn.y + 1] === null) {
            tile?.setAttribute('name', 'isEnable')
            console.log(board[pawn?.x].indexOf(pawn))

        }
    } else if (pawn?.colorPawn === 'white') {
        if (board[pawn.x + 1][pawn.y + 1] === null ||
            pawn && board[pawn.x + 1][pawn.y - 1] === null) {
            tile?.setAttribute('name', 'isEnable')
            console.log(board[pawn?.x][pawn?.y])

        }
    }
}


function createTile(board: Element | null, colorTile: string) {
    const tile = document.createElement("div")
    tile.className = `${colorTile}Tile`
    board?.appendChild(tile)
    return tile
}


function createPawn(tile: HTMLDivElement | null, couleurPawn: 'n' | 'b', pawn: Pawn | null, board: (Pawn | null)[][]) {
    const imgPawn = document.createElement("img")
    imgPawn.src = `assets/pion-${couleurPawn}.png`
    tile?.appendChild(imgPawn)
    imgPawn.addEventListener("click", () => {
        enableToMove(pawn, board, tile)
    })
}


let i: number = 0
let j: number = 0
let startPawnBoard: (Pawn | null)[][] = Array(10).fill(null)
    .map(() => Array(10).fill(null))

let pawnRow: (Pawn | null)[] = startPawnBoard[i]

for (i = 0; i < startPawnBoard.length; i++) {
    for (j = 0; j < pawnRow.length; j++) {
        if ((i + j) % 2 !== 0) {

            if (start[i][j] === 1) {
                startPawnBoard[i][j] = new Pawn('white', i, j)
            } else if (start[i][j] === -1) {
                startPawnBoard[i][j] = new Pawn('black', i, j)
            } else { }
        } else { }
    }
}


function buildBoard(board: (Pawn | null)[][]) {
    let checkboard = document.querySelector(".checkboard")

    for (i = 0; i < board.length; i++) {
        for (j = 0; j < pawnRow.length; j++) {
            if ((i + j) % 2 !== 0) {

                if (board[i][j]?.colorPawn === 'white') {
                    createPawn(createTile(checkboard, 'black'), 'b', board[i][j], board)
                } else if (board[i][j]?.colorPawn === 'black') {
                    createPawn(createTile(checkboard, 'black'), 'n', board[i][j], board)
                } else {
                    createTile(checkboard, 'black')
                }
            } else {
                createTile(checkboard, 'white')
            }
        }
    }
}


let newPawnBoard = startPawnBoard
newPawnBoard[6][1] = null
newPawnBoard[5][0] = new Pawn('black', 5, 0)
newPawnBoard[3][8] = null
newPawnBoard[4][9] = new Pawn('white', 4, 9)
console.log(newPawnBoard)

buildBoard(newPawnBoard)

function gameGame() {

}

function movePiece() {

}

