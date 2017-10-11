import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AssignmentThreeListComponent} from './assignment3.list.component';
import{DbConnComponent} from './../Services/services.component';

@Component({
    templateUrl :'./assignment3.viewUser.html',
    providers : [DbConnComponent],
})


export class viewSingleUser extends AssignmentThreeListComponent{

      /*For extending a class we need to 
        1) Import the Compenent and 
        2) Call the super class constructor through child class constructor
      */

      userId : any;
         constructor(public dbConn : DbConnComponent , private route: ActivatedRoute ) {            
              
                    super(dbConn);
                    this.route.queryParams.subscribe(params => 
                        {this.userId = params["id"]; }               
                        );
               this.viewUser(this.userId);
                            }


 }