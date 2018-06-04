"use strict";
var Crates = (function () {
    function Crates() {
    }
    Crates.prototype.update = function () {
    };
    return Crates;
}());
var Fruit = (function () {
    function Fruit() {
        console.log('i am fruit');
    }
    Fruit.prototype.update = function () {
    };
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
        this.fruit = new Fruit();
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
//# sourceMappingURL=main.js.map