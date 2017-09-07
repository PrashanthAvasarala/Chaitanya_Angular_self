import { Component } from '@angular/core';

@Component({
  selector: 'fruits',
  //template: `<h1>Hello {{name}}</h1>`,
  template : 
  `<h1>Hello {{name}}</h1>
   <p> Below two tags are from product components </p>
  <products></products>
  <products></products> `,
  styles : [`p { color : dodgerblue ; }`]
       
})
export class FruitComponent { 
     name: any = 'I am apple';
 }
