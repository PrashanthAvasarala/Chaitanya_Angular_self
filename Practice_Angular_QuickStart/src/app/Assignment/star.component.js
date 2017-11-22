"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
let StarRating = class StarRating {
    constructor() {
        this.starsCount = 2.5;
        this.starsCounts = [];
    }
};
StarRating = __decorate([
    core_1.Component({
        selector: 'x-star-rating',
        template: `
    <div class="container">    
       <!-- regular rating -->
       <rating [(ngModel)]="starsCount"></rating>
       <br/><br/>
    
       <!-- rating with 10 stars -->
       <rating [(ngModel)]="starsCount"
               [max]="10">
       </rating>
       <br/><br/>
    
       <!-- rating with custom icons -->
       <rating [(ngModel)]="starsCount"
               fullIcon="◆"
               emptyIcon="◇">
       </rating>
       <br/><br/>
    
       <!-- rating readonly -->
       <rating [(ngModel)]="starsCount"
               [readonly]="true"
               >
       </rating>
       <br/><br/>
    
       <!-- rating disabled -->
       <rating [(ngModel)]="starsCount"
               [disabled]="true">
       </rating>
       <br/><br/>
    
       <!-- rating required -->
       <rating [(ngModel)]="starsCount"
               [required]="true">
       </rating>
       <br/><br/>
    
       <!-- rating with half stars -->
       <rating [(ngModel)]="starsCount"
               [float]="true">
       </rating>
       <br/><br/>
    
       <!-- rating with custom titles -->
       <rating [(ngModel)]="starsCount"
               [titles]="['one', 'two', 'three', 'four', 'five']">
       </rating>
       <br/><br/>
    
   </div>`,
    })
], StarRating);
exports.StarRating = StarRating;
//# sourceMappingURL=star.component.js.map