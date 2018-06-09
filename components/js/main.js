"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Crate = (function () {
    function Crate() {
    }
    Crate.prototype.update = function () {
    };
    return Crate;
}());
var GameObject = (function () {
    function GameObject() {
        this.x = 0;
        this.y = 0;
        this.element = name;
        this.type = 'type';
        this.randomX = 0;
        this.randomY = 0;
    }
    GameObject.prototype.update = function () {
    };
    GameObject.prototype.addFruit = function () {
        var tree = document.getElementsByTagName('tree')[0];
        this.element = document.createElement(this.type);
        tree.appendChild(this.element);
        this.randomX = Math.floor(Math.random() * tree.clientWidth);
        this.randomY = Math.floor(Math.random() * tree.clientHeight);
        this.x = this.randomX;
        this.y = this.randomY;
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return GameObject;
}());
var Fruit = (function (_super) {
    __extends(Fruit, _super);
    function Fruit() {
        var _this = _super.call(this) || this;
        _this.apple = new Apple();
        _this.pineapple = new Pineapple();
        _this.grape = new Grape();
        return _this;
    }
    Fruit.prototype.update = function () {
    };
    return Fruit;
}(GameObject));
var Apple = (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        var _this = _super.call(this) || this;
        _this.addFruit();
        return _this;
    }
    Apple.prototype.addFruit = function () {
        this.type = 'apple';
        _super.prototype.addFruit.call(this);
    };
    return Apple;
}(GameObject));
var Pineapple = (function (_super) {
    __extends(Pineapple, _super);
    function Pineapple() {
        var _this = _super.call(this) || this;
        _this.addFruit();
        return _this;
    }
    Pineapple.prototype.addFruit = function () {
        this.type = 'pineapple';
        _super.prototype.addFruit.call(this);
    };
    return Pineapple;
}(GameObject));
var Grape = (function (_super) {
    __extends(Grape, _super);
    function Grape() {
        var _this = _super.call(this) || this;
        _this.addFruit();
        return _this;
    }
    Grape.prototype.addFruit = function () {
        this.type = 'grape';
        _super.prototype.addFruit.call(this);
    };
    return Grape;
}(GameObject));
var Game = (function () {
    function Game() {
        this.startscreen = new StartScreen(this);
        this.gameloop();
    }
    Game.prototype.gameloop = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.gameloop(); });
    };
    Game.prototype.PlayGame = function () {
        new PlayGame(this);
        this.startscreen.removeButton();
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var PlayGame = (function () {
    function PlayGame(g) {
        this.game = g;
        this.tree = new Tree();
        this.fruit = new Fruit();
    }
    return PlayGame;
}());
var StartScreen = (function (_super) {
    __extends(StartScreen, _super);
    function StartScreen(g) {
        var _this = _super.call(this) || this;
        _this.game = g;
        _this.button = document.createElement("button");
        document.body.appendChild(_this.button);
        _this.button.innerHTML = 'start';
        _this.x = (window.innerWidth - _this.button.clientWidth) / 2;
        _this.y = (window.innerHeight - _this.button.clientHeight) / 2;
        _this.button.style.transform = "translate(" + _this.x + "px, " + _this.y + "px)";
        _this.button.addEventListener("click", function () { return _this.game.PlayGame(); });
        return _this;
    }
    StartScreen.prototype.removeButton = function () {
        this.button.remove();
    };
    return StartScreen;
}(GameObject));
var Tree = (function (_super) {
    __extends(Tree, _super);
    function Tree() {
        var _this = _super.call(this) || this;
        _this.tree = document.createElement('tree');
        document.body.appendChild(_this.tree);
        _this.x = (window.innerWidth - _this.tree.clientWidth) / 2;
        _this.y = (window.innerHeight - _this.tree.clientHeight) / 4;
        _this.tree.style.transform = "translate(" + _this.x + "px, " + _this.y + "px)";
        return _this;
    }
    Tree.prototype.update = function () {
    };
    return Tree;
}(GameObject));
//# sourceMappingURL=main.js.map