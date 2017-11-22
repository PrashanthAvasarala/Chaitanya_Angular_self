import { Component } from '@angular/core';

@Component({
  selector: 'my-assign1',
  templateUrl: './assignment.one.html',
  styleUrls: ['./../HTML/app.component.css'],

})

export class AssignmentOneComponent {
  name: any = "";
  text:any = "";
  buttonClick: boolean = false;
  textNote: any = " ";
  textChange: any = "";
  date4: Date;
  


  /* Just like Java constructor is invoked first when complied same as when the component is created this 
   constructor is invoked first
   In ECMA script 6 when write function() {body} also as () => {}  */
  constructor() {
    setTimeout(() => {
      this.buttonClick = true;
    }, 5000)
  }

 
  onClick(): void {

    if (this.name == "") this.textNote = "User Please enter your name";
    else this.textNote = this.name + " Clicked the button Hurray!";

  }


   /*The value passed in the event is stored in target folder and then in value attribute
   1)For more reference about the below syntax refer "passing and using data with event binding"
       Section 2 lecture 28 UDEMY*/
  nameChange(event: Event): void {
    /*console.log(event); in the console open event ->target->validity->value*/
     this.text = (<HTMLInputElement>event.target).value;
           
    
    
    //console.log(this.textChange);
   this.text = this.text.replace(/i/g, "!");
   this.text = this.text.replace(/s/g, "$");
   this.text = this.text.replace(/a/g, "@");
     

  }

  onTextChange(): void {
    if (this.text == "") this.textChange = "User Please enter text in second input field";
    else this.textChange = this.text + " Your text has been changed";
  }

  reset(): void {
    this.textNote = "";
    this.name = "";
    this.textChange = "";
    this.text = "";
  }

  getDate(dt: Date): number {
    return dt && dt.getTime();
}

}