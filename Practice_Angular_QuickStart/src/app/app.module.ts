
// App.module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent,HomeComponent } from './app.component';
import { FruitComponent } from './fruits.component';
import { ProductComponent } from './products.component';
import { VariableComponent } from './Variables/variables.component';
import { PageNotFoundComponent } from './PageNotFoundComponent';
import {DirectiveComponent} from './Directives/directive.component';
import {AssignmentOneComponent} from './Assignment/assignment1.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fruit', component: FruitComponent },
  { path: 'product', component: ProductComponent },
  { path: 'profile', component: VariableComponent },  
  { path: 'directive', component: DirectiveComponent },
  { path: 'assignment1', component: AssignmentOneComponent },
  { path: '**', component: PageNotFoundComponent },  ]
                             

@NgModule({
  imports: [BrowserModule,
            RouterModule.forRoot(appRoutes),
            FormsModule],
  declarations: [AppComponent,
                 HomeComponent,
                 ProductComponent,
                 FruitComponent,
                 VariableComponent,
                 PageNotFoundComponent,
                 DirectiveComponent,
                 AssignmentOneComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
