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
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        //template: `<h1>Welcome {{name}}</h1>`,
        templateUrl: './HTML/app.component.html',
        styleUrls: ['./HTML/app.component.css'],
    })
], AppComponent);
exports.AppComponent = AppComponent;
var HomeComponent = (function () {
    //Just like Java constructor is invoked first when complied same as when the component is created this 
    // constructor is invoked first
    // In ECMA script 6 when write function() {body} also as () => {} 
    function HomeComponent() {
        var _this = this;
        this.name = "";
        this.buttonClick = false;
        this.textNote = " ";
        this.textChange = "";
        setTimeout(function () {
            _this.buttonClick = true;
        }, 5000);
    }
    /*The value passed in the event is stored in target folder and then in value attribute
     1)For more reference about the below syntax refer "passing and using data with event binding"
         Section 2 lecture 28 UDEMY*/
    HomeComponent.prototype.onUserTest = function (event) {
        /*console.log(event); in the console open event ->target->validity->value*/
        this.name = event.target.value;
    };
    HomeComponent.prototype.onClick = function () {
        console.log(this.textChange.length);
        console.log(this.textChange.charAt(0));
        console.log(this.textChange.toString().trim());
        if (this.name == "") {
            console.log("hi");
            this.textNote = "User Please enter your name";
        }
        else {
            console.log("hello");
            this.textNote = this.name + " Clicked the button Hurray!";
        }
    };
    HomeComponent.prototype.reset = function () {
        this.textNote = "";
        this.name = "";
        this.textChange = "";
    };
    HomeComponent.prototype.nameChange = function (event) {
        /*         this.textChange = (<HTMLInputElement>event.target).value;
                let temp : String[] = this.textChange.toString().trim();
                let count = 0;
                do{
                  /*temp.charAt(count) == 's'*/
        /* if(1){
              temp[count] = '$' ;
            }
            count++;
          }while(count <= temp.length)
   */
        var c = this.textChange;
        //console.log(this.textChange);
        c = c.replace(/i/g, "!");
        c = c.replace("s", "$");
        c = c.replace("a", "@");
        console.log(c);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'my-home',
        templateUrl: './HTML/app.home.html',
        styleUrls: ['./HTML/app.component.css'],
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=app.component.js.map