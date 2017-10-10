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
const services_component_1 = require("./../Services/services.component");
let AssignmentThreeListComponent = class AssignmentThreeListComponent {
    constructor(dbConn) {
        this.dbConn = dbConn;
        this.displayListOfUsers();
    }
    tableData() {
        let myStles = {
            'height': '50px',
            'text-align': 'center',
            'padding': '15px',
            'margin-left': '120px',
        };
        return myStles;
    }
    displayListOfUsers() {
        this.dbConn.getListUsers()
            .subscribe((result) => {
            console.log(result);
            this.userData = result.data;
            console.log(this.userData);
        });
    }
    createUser(user) {
        console.log(user.fname);
        this.dbConn.insertUser(user)
            .subscribe((result) => {
            console.log(result.msg);
        });
        return true;
    }
};
AssignmentThreeListComponent = __decorate([
    core_1.Component({
        selector: 'list-services',
        templateUrl: './assignment3.list.html',
        providers: [services_component_1.DbConnComponent],
    }),
    __metadata("design:paramtypes", [services_component_1.DbConnComponent])
], AssignmentThreeListComponent);
exports.AssignmentThreeListComponent = AssignmentThreeListComponent;
//# sourceMappingURL=assignment3.list.component.js.map