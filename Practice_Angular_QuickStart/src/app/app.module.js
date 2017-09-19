"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// App.module
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var fruits_component_1 = require("./fruits.component");
var products_component_1 = require("./products.component");
var variables_component_1 = require("./Variables/variables.component");
var PageNotFoundComponent_1 = require("./PageNotFoundComponent");
var directive_component_1 = require("./Directives/directive.component");
var assignment1_component_1 = require("./Assignment/assignment1.component");
var assignment2_component_1 = require("./Assignment/assignment2.component");
var appRoutes = [
    { path: '', component: app_component_1.HomeComponent },
    { path: 'fruit', component: fruits_component_1.FruitComponent },
    { path: 'product', component: products_component_1.ProductComponent },
    { path: 'profile', component: variables_component_1.VariableComponent },
    { path: 'directive', component: directive_component_1.DirectiveComponent },
    { path: 'assignment1', component: assignment1_component_1.AssignmentOneComponent },
    { path: 'assignment2', component: assignment2_component_1.AssignmentTwoComponent },
    { path: '**', component: PageNotFoundComponent_1.PageNotFoundComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes),
            forms_1.FormsModule],
        declarations: [app_component_1.AppComponent,
            app_component_1.HomeComponent,
            products_component_1.ProductComponent,
            fruits_component_1.FruitComponent,
            variables_component_1.VariableComponent,
            PageNotFoundComponent_1.PageNotFoundComponent,
            directive_component_1.DirectiveComponent,
            assignment1_component_1.AssignmentOneComponent,
            assignment2_component_1.AssignmentTwoComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map