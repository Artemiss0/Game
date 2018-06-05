"use strict";
var Crates = (function () {
    function Crates() {
        this.center = window.innerWidth / 2;
        this.x = [this.center - 200, this.center, this.center + 200];
        this.y = window.innerHeight / 2 + 300;
        for (var i = 0; i < 3; i++) {
            var crate = void 0;
            crate = document.createElement('crate');
            document.body.appendChild(crate);
            crate.style.transform = "translate(" + this.x[i] + "px, " + this.y + "px)";
        }
    }
    Crates.prototype.update = function () {
    };
    return Crates;
}());
var Fruit = (function () {
    function Fruit() {
        this.type = "apple";
    }
    return Fruit;
}());
var Game = (function () {
    function Game() {
        this.s = new StartScreen(this);
        this.gameloop();
    }
    Game.prototype.gameloop = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.gameloop(); });
    };
    Game.prototype.PlayGame = function () {
        new PlayGame(this);
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var PlayGame = (function () {
    function PlayGame(g) {
        this.button = document.getElementsByTagName("button")[0];
        this.button.style.display = "none";
        this.game = g;
        this.crate = new Crates();
        this.tree = new Tree();
    }
    return PlayGame;
}());
var StartScreen = (function () {
    function StartScreen(g) {
        var _this = this;
        this.game = g;
        this.button = document.createElement("button");
        document.body.appendChild(this.button);
        this.button.innerHTML = 'start';
        this.x = (window.innerWidth - this.button.clientWidth) / 2;
        this.y = (window.innerHeight - this.button.clientHeight) / 2;
        this.button.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.button.addEventListener("click", function () { return _this.game.PlayGame(); });
    }
    StartScreen.prototype.update = function () {
    };
    return StartScreen;
}());
var Tree = (function () {
    function Tree() {
        this.fruits = [];
        this.tree = document.createElement('tree');
        document.body.appendChild(this.tree);
        this.x = (window.innerWidth - this.tree.clientWidth) / 2;
        this.y = (window.innerHeight - this.tree.clientHeight) / 4;
        this.tree.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        for (var i = 0; i < 3; i++) {
            this.fruits.push(new Fruit());
            console.log(this.fruits);
        }
    }
    Tree.prototype.update = function () {
    };
    return Tree;
}());
//# sourceMappingURL=main.js.map