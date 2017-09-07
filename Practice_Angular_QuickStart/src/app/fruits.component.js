"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FruitComponent = (function () {
    function FruitComponent() {
        this.name = 'I am apple';
    }
    return FruitComponent;
}());
FruitComponent = __decorate([
    core_1.Component({
        selector: 'fruits',
        //template: `<h1>Hello {{name}}</h1>`,
        template: "<h1>Hello {{name}}</h1>\n   <p> Below two tags are from product components </p>\n  <products></products>\n  <products></products> ",
        styles: ["p { color : dodgerblue ; }"]
    })
], FruitComponent);
exports.FruitComponent = FruitComponent;
//# sourceMappingURL=fruits.component.js.map