"use strict"

export class Board {
    constructor(size, content) {
        this.size = size;
        this.content = content;
        this.Board = new Array(this.size);
    }
    generateBoard() {
        if (typeof this.content == "string") {
            if (this.content == "")
                this.generateWithoutContent();
            else {
                this.generateWithContent();
            }
        }
    }
    generateWithContent() {
        let content = this.content.split(";");
        for (let i = 0; i < this.size; i++) {
            let rowContent = content.splice(0, this.size);
            this.Board[i] = this.generateRowWithContent(i, rowContent);
        }
    }
    generateWithoutContent() {
        for (let i = 0; i < this.size; i++) {
            this.Board[i] = this.generateRowWithoutContent(i);
        }

    }
    generateRowWithContent(rowNum, rowContent) {
        let row = new Array(this.size);
        for (let i = 0; i < this.size; i++) {
            id = `${rowNum}x${i}`
            row[i] = new BoardItem(id, rowContent[i]);
        }
        return row;
    }
    generateRowWithoutContent(rowNum) {
        let row = new Array(this.size);
        for (let i = 0; i < this.size; i++) {
            let id = `${rowNum}x${i}`
            row[i] = new BoardItem(id, id);
        }
        return row;
    }
}

var board = new Board(2, "");
board.generateBoard();
for (let i = 0; i < this.size; i++) {
    for (let j = 0; j < this.size; j++) {
        console.log(board.board[i, j]);
    }
}