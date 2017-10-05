"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
let AssignmentTwoComponent = class AssignmentTwoComponent {
    constructor() {
        this.textParam = " ";
        this.timeStamp = [];
        this.clicks = [];
    }
    ngOnInit() {
        this.tempValue = false;
        this.counter = 1;
        this.buttonClicks = 1;
    }
    textStyle() {
        let myStles = {
            'color': '#cc0066',
            'margin': '10px 0 0 500px',
        };
        return myStles;
    }
    buttonStyle() {
        let buttonStyle = {
            'margin': '10px 0 0 500px',
        };
        return buttonStyle;
    }
    secondButtonStyle() {
        let secondButtonStyle = {
            'margin': '10px 0 0 0',
        };
        return secondButtonStyle;
    }
    displayButtonClick(event) {
        console.log(event.timeStamp);
        this.timeStamp.push(event.timeStamp);
        ((this.counter % 2) == 0) ? this.tempValue = true : this.tempValue = false;
        this.counter++;
        this.clicks.push(this.buttonClicks++);
        this.textParam = " '\Secret Password = tune\' ";
    }
    reset() {
        this.timeStamp = [];
        this.clicks = [];
        this.textParam = null;
    }
};
AssignmentTwoComponent = __decorate([
    core_1.Component({
        templateUrl: './assignment.two.html',
        styles: ['.']
    })
], AssignmentTwoComponent);
exports.AssignmentTwoComponent = AssignmentTwoComponent;
//# sourceMappingURL=assignment2.component.js.map