class Game {
    constructor() {
        this.scoreElement = $('h1');
        $('button').click(() => this.initApp());         
        this.board = new Board();
        this.initListeners()
        this.tic = "x";
        this.tac = "o";
        this.currentTurn = this.tic;
        this.scores = {};
        this.scores[this.tic] = 0;
        this.scores[this.tac] = 0;
        this.currentTurnCounter = 0;
        this.scoreElement.text(`${this.tic} : ${this.scores[this.tic]} ---------- ${this.tac} : ${this.scores[this.tac]}`)
    }

    initListeners() {

        for (let i = 0; i < this.board.cells.length; i++) {
            for (let j = 0; j < this.board.cells[i].length; j++) {

                console.log(this.board.cells[i][j]);
                // this.board.cells[i][j].click((e) => { this.onBoardClick(e) })
                this.board.cells[i][j].addEventListener('click', (e) => { this.onBoardClick(e) })
            }
        }
        // this.board.cells

    }

    initApp() {
        this.board.clearBoard();
        this.currentTurn = this.tic;
        this.currentTurnCounter = 0;
    }

    onBoardClick(e) {

        if (e.target.innerHTML.trim() === "") {
            this.currentTurnCounter++;
            e.target.innerHTML = this.currentTurn;

            if (this.currentTurnCounter >= 5 && this.board.checkWon(this.currentTurn)) {
                this.scores[this.currentTurn]++;
                this.scoreElement.text(`${this.tic} : ${this.scores[this.tic]} ---------- ${this.tac} : ${this.scores[this.tac]}`)
                alert(this.currentTurn + " Won!");
                this.initApp();
            } else if (this.currentTurnCounter === 9) {
                alert("Tie!");
                this.initApp();
            } else {
                this.currentTurn = this.currentTurn === this.tic ? this.tac : this.tic;
            }
        }
    }
}

class Board {
    constructor() {
        this.cells = [];
        // this.cells.push([]);
        // this.cells[0][0] = $('.row:nth-child(1) .cell:nth-child(1)');
        // this.cells[0][1] = $('.row:nth-child(1) .cell:nth-child(2)');
        // this.cells[0][2] = $('.row:nth-child(1) .cell:nth-child(3)');
        // this.cells.push([]);
        // this.cells[1][0] = $('.row:nth-child(2) .cell:nth-child(1)');
        // this.cells[1][1] = $('.row:nth-child(2) .cell:nth-child(2)');
        // this.cells[1][2] = $('.row:nth-child(2) .cell:nth-child(3)');
        // this.cells.push([]);
        // this.cells[2][0] = $('.row:nth-child(3) .cell:nth-child(1)');
        // this.cells[2][1] = $('.row:nth-child(3) .cell:nth-child(2)');
        // this.cells[2][2] = $('.row:nth-child(3) .cell:nth-child(3)');

        this.cells.push($(".row"));
        for (let i = 0; i < 3; i++) {
            this.cells[i] = $(`.row:nth-child(${i + 1}) .cell`);
            // console.log(this.cells[i]);

        }

        // console.log(this.cells);

    }

    checkWon(currentTurn) {
        return this.checkRows(currentTurn) || this.checkColumns(currentTurn) || this.checkDiagonal(currentTurn);
    }

    checkRows(currentTurn) {
        for (let i = 0; i < this.cells.length; i++) {
            if (
                this.cells[i][0].innerHTML === currentTurn &&
                this.cells[i][1].innerHTML === currentTurn &&
                this.cells[i][2].innerHTML === currentTurn
            ) {
                return true;
            }
        }
        return false;
    }

    checkColumns(currentTurn) {
        for (let i = 0; i < this.cells.length; i++) {
            if (
                this.cells[0][i].innerHTML === currentTurn &&
                this.cells[1][i].innerHTML === currentTurn &&
                this.cells[2][i].innerHTML === currentTurn
            ) {
                return true;
            }
        }
        return false;
    }

    checkDiagonal(currentTurn) {
        if (
            this.cells[0][0].innerHTML === currentTurn &&
            this.cells[1][1].innerHTML === currentTurn &&
            this.cells[2][2].innerHTML === currentTurn
        ) {
            return true;
        }
        if (
            this.cells[0][2].innerHTML === currentTurn &&
            this.cells[1][1].innerHTML === currentTurn &&
            this.cells[2][0].innerHTML === currentTurn
        ) {
            return true;
        }
        return false
    }

    clearBoard() {
        for (const rows of this.cells) {
            for (const cells of rows) {
                cells.innerHTML = "";
            }
        }
    }
}

const game = new Game();