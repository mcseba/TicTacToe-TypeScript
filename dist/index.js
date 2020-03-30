var Board = (function () {
    function Board(Table) {
        this.turn = true;
        this.text = document.getElementById('moves');
        this.winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        this.table = Table;
    }
    return Board;
}());
var Cell = (function () {
    function Cell(button) {
        this.move = 'X';
        this.cell = button;
        console.log('utworzono');
    }
    Cell.prototype.Mark = function () {
        console.log(this.cell);
        this.cell.innerHTML = this.move;
    };
    return Cell;
}());
var table = [];
var Cell1 = new Cell(document.getElementById('buttonCell1'));
var Cell2 = new Cell(document.getElementById('buttonCell2'));
var Cell3 = new Cell(document.getElementById('buttonCell3'));
var Cell4 = new Cell(document.getElementById('buttonCell4'));
var Cell5 = new Cell(document.getElementById('buttonCell5'));
var Cell6 = new Cell(document.getElementById('buttonCell6'));
var Cell7 = new Cell(document.getElementById('buttonCell7'));
var Cell8 = new Cell(document.getElementById('buttonCell8'));
var Cell9 = new Cell(document.getElementById('buttonCell9'));
table.push(Cell1.cell, Cell2.cell, Cell3.cell, Cell4.cell, Cell5.cell, Cell6.cell, Cell7.cell, Cell8.cell, Cell9.cell);
var Game = new Board(table);
