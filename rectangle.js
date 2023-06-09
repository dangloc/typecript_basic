"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = require("./shape");
class Rectangle extends shape_1.Shape {
    constructor(x, y, _width, _height) {
        super(x, y);
        this._width = _width;
        this._height = _height;
    }
    area() {
        return this._width * this._height;
    }
}
exports.Rectangle = Rectangle;
