import{Component} from '@angular/core';
import{DbConnComponent} from './../Services/services.component';

@Component({
    selector : 'list-services',
    templateUrl : './assignment3.list.html',
    providers : [DbConnComponent],


})

export class AssignmentThreeListComponent{

     userData : any;
     status: any;
     

    constructor(public dbConn : DbConnComponent ){
         this.displayListOfUsers();
    }

    tableData():any{
        let myStles = {
            'height' : '50px',
            'text-align': 'center',
            'padding': '15px',
            'margin-left' : '120px', 
        }
        return myStles;
    }

    displayListOfUsers():any{
        this.dbConn.getListUsers()
        .subscribe(
            (result:any) => {
                //console.log(result);
                this.userData = result.data;
                //console.log(this.userData);
            }
        );

        return this.userData;
    }

    createUser(user : any): boolean {
       
        console.log(user.fname);
        this.dbConn.insertUser(user)
        .subscribe(
            (result:any) => {
               console.log(result.msg);
               this.status = result.status;
            });
            return this.status;
     }

     viewUser(id:any) : any{
           console.log("hello");
           this.dbConn.getSingleUser(id)
           .subscribe( (result:any) =>{
                       this.userData =  result.data;
                       this.status = result.status;
                   }
        );
  
       return this.userData;
        
     }

    
}