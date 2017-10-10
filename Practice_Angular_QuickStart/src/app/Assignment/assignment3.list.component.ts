import{Component} from '@angular/core';
import{DbConnComponent} from './../Services/services.component';

@Component({
    selector : 'list-services',
    templateUrl : './assignment3.list.html',
    providers : [DbConnComponent],


})

export class AssignmentThreeListComponent{

    userData : any;

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

    displayListOfUsers(){
        this.dbConn.getListUsers()
        .subscribe(
            (result:any) => {
                console.log(result);
                this.userData = result.data;
                console.log(this.userData);
            }
        );
    }

    createUser(user : any): boolean {

        console.log(user.fname);
        this.dbConn.insertUser(user)
        .subscribe(
            (result:any) => {
               console.log(result.msg);
            });
            return true;
     }

    
}