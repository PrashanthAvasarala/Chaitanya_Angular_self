import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<h1>Welcome {{name}}</h1>`,
  templateUrl : './HTML/app.component.html',
  styleUrls : ['./HTML/app.component.css','styles.css'],
})
export class AppComponent { 
   
 }

 @Component({
  selector: 'my-home',
  templateUrl : './HTML/app.home.html', // we can write three to four lines of HTML code in template as well
 /*  template : `<br>
  <input type = "text" [(ngModel)] = "name"/>
  <br><br>
  <p> Welcome {{name}}</p>`, */
  styleUrls : ['./HTML/app.component.css'],
  
})

export class HomeComponent{
   name:any = ' ';
   buttonClick = false;

  //Just like Java constructor is invoke first as when the component is created
  // In ECMA script 6 when write function() {body} as () => {} also
   constructor() {
         setTimeout(() => {
          this.buttonClick = true;
                    },5000)
   }
}