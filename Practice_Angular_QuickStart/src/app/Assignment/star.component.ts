import { Component} from "@angular/core";
import {RatingModule} from "ng2-rating";

@Component({
    selector: 'x-star-rating',
    template : `
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

export class StarRating {
    
    starsCount: number = 2.5;
    starsCounts: number[] = [];
   

    
}