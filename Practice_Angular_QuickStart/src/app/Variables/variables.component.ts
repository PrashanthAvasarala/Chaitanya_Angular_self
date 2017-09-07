import { Component } from '@angular/core';

 @Component({
   selector: 'my-variable',
   /*template: `<h1>variable Page</h1>`,*/
   templateUrl: `./variable.component.html`,
 })
 
 export class VariableComponent  {
     /*
         number
         string
         boolean
 
         stringarray
         numberArray
         
 
         object:any
         function
     
         null
 
         tuple
      */
     name:string = "Prashanth";
     age:number = 23;
     
     correct:boolean = true;
 
     fruits:string[] = ['banana', 'kiwi', 'orange'];
     ages:number[] = [23, 30, 35];
 
     tuple = [23, 'asdf', 'qshore', 45];
 
     users:any = { name:'Prashanth', tech:'angularJs', area:'USA' , Stage : 'Learning' };
 
     a:null = null;
 
     callMe():void{
         console.log('hello');
     }
 }
 