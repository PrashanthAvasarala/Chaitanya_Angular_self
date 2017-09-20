"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
let VariableComponent = class VariableComponent {
    constructor() {
        /*
            number
            string
            boolean
    
            stringarray
            numberArray
            
    
            object:any
            function
        
            null
    
            tuple
         */
        this.name = "Prashanth";
        this.age = 23;
        this.correct = true;
        this.fruits = ['banana', 'kiwi', 'orange'];
        this.ages = [23, 30, 35];
        this.tuple = [23, 'asdf', 'qshore', 45];
        this.users = { name: 'Prashanth', tech: 'angularJs', area: 'USA', Stage: 'Learning' };
        this.a = null;
    }
    callMe() {
        console.log('hello');
    }
};
VariableComponent = __decorate([
    core_1.Component({
        selector: 'my-variable',
        /*template: `<h1>variable Page</h1>`,*/
        templateUrl: `./variable.component.html`,
    })
], VariableComponent);
exports.VariableComponent = VariableComponent;
//# sourceMappingURL=variables.component.js.map