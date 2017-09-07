import { Component } from '@angular/core';

@Component({
  selector: 'products',
  template: `<h1>Hello {{name}}</h1>`,
  
})
export class ProductComponent { 
     name: any = 'I am Flipkart';
 }
