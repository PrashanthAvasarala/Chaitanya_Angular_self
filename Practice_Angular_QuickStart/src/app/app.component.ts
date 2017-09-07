import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<h1>Welcome {{name}}</h1>`,
  templateUrl : './HTML/app.component.html',
  styleUrls : ['./HTML/app.component.css'],
})
export class AppComponent { 
   
 }

 @Component({
  selector: 'my-home',
  templateUrl : './HTML/app.home.html',
  styleUrls : ['./HTML/app.component.css'],
  
})

export class HomeComponent{
   name:any = ' ';
}