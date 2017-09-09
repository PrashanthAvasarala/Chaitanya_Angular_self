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
   textNote = " You didn't Click the button,please click !";
   

  //Just like Java constructor is invoked first when complied same as when the component is created this 
  // constructor is invoked first
  // In ECMA script 6 when write function() {body} also as () => {} 
   constructor() {
         setTimeout(() => {
          this.buttonClick = true;
                    },5000)
   } 
   
   onClick():void{
         this.textNote = " Clicked the button Hurray!";
       }
      
  /*The value passed in the event is stored in target folder and then in value attribute
    1)For more reference about the below syntax refer "passing and using data with event binding"
        Section 2 lecture 28 UDEMY*/
  onUserTest(event : Event):void{
     this.name = (<HTMLInputElement>event.target).value;
  }


}