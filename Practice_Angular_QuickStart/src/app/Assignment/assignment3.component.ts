/*Import the Form Builder , Form Group , validators from @angular/forms
  and Import ReactiveForms in module.ts from @angular/forms
  Abstract Control  = Form Control + FormGroup

  UseFul Links For FormControl , FormBuilders , FormGroup - refernce :
    1) Angular Documentation : 'https://angular.io/guide/reactive-forms';
    2) Run the Angular App : 'Angular_ReactiveForm'

How To write Custom Validations
   1) Write the code in separete TS file and export the clas.
   2) Import the class name in Component and use the methods. 

   For reference see below links -
   CustomValidation for Number Check - "https://ampersandacademy.com/tutorials/ionic-framework-version-2/how-to-write-the-custom-validation-function"
   Stack Over Flow (Min/Max validation) - "https://stackoverflow.com/questions/39847862/min-max-validator-in-angular-2-final/39848327"

    How to write Custom Validator Classes : 'https://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html'


*/
import{Component} from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';

@Component({
    templateUrl : './assignment.three.html',
    styles : ['.']
})
export class AssignmentThreeComponent {

    entryForm : FormGroup;
    
    /*
       With the formBuilder we can group the all the form Input  elements at once,
       No need of creating the 
       fname = new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])) 
       for every input element.
       
      
    */
    constructor(private fb : FormBuilder){
       this.createForm();
    }

   /*
       while using the regular expressions we can directly use '[a-zA-Z]+'  instead of  '/^[a-zA-Z]+$' 
       No( /,^,$)
       Stack-Over-flow - "https://stackoverflow.com/questions/41768721/regex-in-angular-2-form-validators-producing-different-results-when-argument-is"
   */
     
     createForm(){
         this.entryForm = this.fb.group({
            fname : ['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]+')])],
            lname: '',
            age : '',
            email : '',
            password : ''

         });
     }

    
}
