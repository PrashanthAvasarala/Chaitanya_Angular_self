"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
let AssignmentOneComponent = class AssignmentOneComponent {
    /* Just like Java constructor is invoked first when complied same as when the component is created this
     constructor is invoked first
     In ECMA script 6 when write function() {body} also as () => {}  */
    constructor() {
        this.name = "";
        this.text = "";
        this.buttonClick = false;
        this.textNote = " ";
        this.textChange = "";
        setTimeout(() => {
            this.buttonClick = true;
        }, 5000);
    }
    onClick() {
        if (this.name == "")
            this.textNote = "User Please enter your name";
        else
            this.textNote = this.name + " Clicked the button Hurray!";
    }
    /*The value passed in the event is stored in target folder and then in value attribute
    1)For more reference about the below syntax refer "passing and using data with event binding"
        Section 2 lecture 28 UDEMY*/
    nameChange(event) {
        /*console.log(event); in the console open event ->target->validity->value*/
        this.text = event.target.value;
        //console.log(this.textChange);
        this.text = this.text.replace(/i/g, "!");
        this.text = this.text.replace(/s/g, "$");
        this.text = this.text.replace(/a/g, "@");
    }
    onTextChange() {
        if (this.text == "")
            this.textChange = "User Please enter text in second input field";
        else
            this.textChange = this.text + " Your text has been changed";
    }
    reset() {
        this.textNote = "";
        this.name = "";
        this.textChange = "";
        this.text = "";
    }
    getDate(dt) {
        return dt && dt.getTime();
    }
};
AssignmentOneComponent = __decorate([
    core_1.Component({
        selector: 'my-assign1',
        templateUrl: './assignment.one.html',
        styleUrls: ['./../HTML/app.component.css'],
    }),
    __metadata("design:paramtypes", [])
], AssignmentOneComponent);
exports.AssignmentOneComponent = AssignmentOneComponent;
//# sourceMappingURL=assignment1.component.js.map