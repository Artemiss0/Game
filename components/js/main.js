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
var GameObject = (function () {
    function GameObject() {
        this.x = 0;
        this.y = 0;
        this.element = name;
        this.type = 'type';
        this.randomX = 0;
        this.randomY = 0;
        this.offSetX = 0;
        this.offSetY = 0;
    }
    GameObject.prototype.update = function () {
    };
    GameObject.prototype.createCrate = function () {
        this.element = document.createElement(this.type);
        document.body.appendChild(this.element);
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    GameObject.prototype.addFruit = function () {
        var _this = this;
        var tree = document.getElementsByTagName('tree')[0];
        this.element = document.createElement(this.type);
        tree.appendChild(this.element);
        this.randomX = Math.floor(Math.random() * tree.clientWidth);
        this.randomY = Math.floor(Math.random() * tree.clientHeight);
        this.x = this.randomX;
        this.y = this.randomY;
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.moveBind = function (e) { return _this.updatePosition(e); };
        this.element.addEventListener("mousedown", function (e) { return _this.initDrag(e); });
        this.element.addEventListener("mouseup", function (e) { return _this.initStopDrag(e); });
    };
    GameObject.prototype.initDrag = function (e) {
        e.preventDefault();
        this.offSetX = e.clientX - this.x;
        this.offSetY = e.clientY - this.y;
        window.addEventListener("mousemove", this.moveBind);
    };
    GameObject.prototype.updatePosition = function (e) {
        e.preventDefault();
        this.x = e.clientX - this.offSetX;
        this.y = e.clientY - this.offSetY;
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    GameObject.prototype.initStopDrag = function (e) {
        window.removeEventListener("mousemove", this.moveBind);
        e.preventDefault();
    };
    return GameObject;
}());
var Crate = (function (_super) {
    __extends(Crate, _super);
    function Crate() {
        var _this = _super.call(this) || this;
        new AppleCrate();
        new PineappleCrate();
        new GrapeCrate();
        return _this;
    }
    Crate.prototype.update = function () {
    };
    return Crate;
}(GameObject));
var AppleCrate = (function (_super) {
    __extends(AppleCrate, _super);
    function AppleCrate() {
        var _this = _super.call(this) || this;
        _this.createCrate();
        return _this;
    }
    AppleCrate.prototype.createCrate = function () {
        this.type = 'appleCrate';
        this.x = (window.innerWidth - 180) / 2;
        this.y = (window.innerHeight / 2) + 250;
        _super.prototype.createCrate.call(this);
    };
    return AppleCrate;
}(GameObject));
var PineappleCrate = (function (_super) {
    __extends(PineappleCrate, _super);
    function PineappleCrate() {
        var _this = _super.call(this) || this;
        _this.createCrate();
        return _this;
    }
    PineappleCrate.prototype.createCrate = function () {
        this.type = 'pineappleCrate';
        this.x = (window.innerWidth - 180) / 2 - 200;
        this.y = (window.innerHeight / 2) + 250;
        _super.prototype.createCrate.call(this);
    };
    return PineappleCrate;
}(GameObject));
var GrapeCrate = (function (_super) {
    __extends(GrapeCrate, _super);
    function GrapeCrate() {
        var _this = _super.call(this) || this;
        _this.createCrate();
        return _this;
    }
    GrapeCrate.prototype.createCrate = function () {
        this.type = 'grapeCrate';
        this.x = (window.innerWidth - 180) / 2 + 200;
        this.y = (window.innerHeight / 2) + 250;
        _super.prototype.createCrate.call(this);
    };
    return GrapeCrate;
}(GameObject));
var Fruit = (function (_super) {
    __extends(Fruit, _super);
    function Fruit() {
        var _this = _super.call(this) || this;
        new Apple();
        new Pineapple();
        new Grape();
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
        this.crate = new Crate();
        this.game = g;
        new Tree();
        new Fruit();
        console.log(this.crate);
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