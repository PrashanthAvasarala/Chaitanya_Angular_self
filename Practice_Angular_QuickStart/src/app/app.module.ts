
// App.module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RatingModule} from 'ng2-rating';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';





import { AppComponent,HomeComponent } from './app.component';
import { FruitComponent } from './fruits.component';
import { ProductComponent } from './products.component';
import { VariableComponent } from './Variables/variables.component';
import { PageNotFoundComponent } from './PageNotFoundComponent';
import {DirectiveComponent} from './Directives/directive.component';
import {AssignmentOneComponent} from './Assignment/assignment1.component';
import {AssignmentTwoComponent} from './Assignment/assignment2.component';
import {AssignmentThreeComponent} from './Assignment/assignment3.component';
import {AssignmentThreeListComponent} from './Assignment/assignment3.list.component';
import {viewSingleUser} from './Assignment/assignment3.viewUser';
import {StarRating} from './Assignment/star.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fruit', component: FruitComponent },
  { path: 'product', component: ProductComponent },
  { path: 'profile', component: VariableComponent },  
  { path: 'directive', component: DirectiveComponent },
  { path: 'assignment1', component: AssignmentOneComponent },
  { path: 'assignment2', component: AssignmentTwoComponent },
  { path: 'assignment3', component: AssignmentThreeComponent },
  { path: 'assignment3/list', component: AssignmentThreeListComponent },
  { path: 'assignment3/user', component: viewSingleUser },
  { path: '**', component: PageNotFoundComponent },  ]
                             

@NgModule({
  imports: [BrowserModule,
            RouterModule.forRoot(appRoutes),
            FormsModule,
            ReactiveFormsModule,
            HttpModule,
            RatingModule,
            NKDatetimeModule],

  declarations: [AppComponent,
                 HomeComponent,
                 ProductComponent,
                 FruitComponent,
                 VariableComponent,
                 PageNotFoundComponent,
                 DirectiveComponent,
                 AssignmentOneComponent,
                 AssignmentTwoComponent,
                 AssignmentThreeComponent,
                 AssignmentThreeListComponent,
                 viewSingleUser,
                 StarRating],
                 
  bootstrap: [AppComponent]
})
export class AppModule { }
