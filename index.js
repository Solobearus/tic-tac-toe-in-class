class Game{
    constructor(){
        this.board = new Board();
        this.tic = "x";
        this.tac = "o";
        this.currentTurn = this.tic;
        this.scorePlayer1 = 0;
        this.scorePlayer2 = 0;
    }

    initApp(){

    }

    onBoardClick(){

    }

    checkRows(){

    }

    checkColumns(){
        
    }

    checkDiagonal(){
        
    }
}

class Board{
    constructor(){
        this.cells = [];
        this.cells.push([]);
        this.cells[0][0] = $('.row:nth-child(1) .cell:nth-child(1)');
        this.cells[0][1] = $('.row:nth-child(1) .cell:nth-child(2)');
        this.cells[0][2] = $('.row:nth-child(1) .cell:nth-child(3)');
        this.cells.push([]);
        this.cells[1][0] = $('.row:nth-child(2) .cell:nth-child(1)');
        this.cells[1][1] = $('.row:nth-child(2) .cell:nth-child(2)');
        this.cells[1][2] = $('.row:nth-child(2) .cell:nth-child(3)');
        this.cells.push([]);
        this.cells[2][0] = $('.row:nth-child(3) .cell:nth-child(1)');
        this.cells[2][1] = $('.row:nth-child(3) .cell:nth-child(2)');
        this.cells[2][2] = $('.row:nth-child(3) .cell:nth-child(3)');      
    }
}

