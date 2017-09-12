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
   name:any = "";
   buttonClick:boolean = false;
   textNote:any = " ";
   textChange:any = "";
   

  //Just like Java constructor is invoked first when complied same as when the component is created this 
  // constructor is invoked first
  // In ECMA script 6 when write function() {body} also as () => {} 
   constructor() {
         setTimeout(() => {
          this.buttonClick = true;
                    },5000)
   } 

   /*The value passed in the event is stored in target folder and then in value attribute
    1)For more reference about the below syntax refer "passing and using data with event binding"
        Section 2 lecture 28 UDEMY*/
  onUserTest(event : Event):void{
    /*console.log(event); in the console open event ->target->validity->value*/
    this.name = (<HTMLInputElement>event.target).value;
 }
   
   onClick():void{
    console.log(this.textChange.length);
    console.log(this.textChange.charAt(0));
    console.log(this.textChange.toString().trim());
       if(this.name == "")
        {
          console.log("hi");
          this.textNote = "User Please enter your name";
        }
        else{
          console.log("hello");
         this.textNote = this.name + " Clicked the button Hurray!";
       }
      }

      reset():void{
           this.textNote = "";
           this.name = "";
           this.textChange="";
      }
  
       nameChange(event:Event):void{
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

      } 

 
}