import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class DbConnComponent {

    
    constructor(private http: Http) {

    }

    getListUsers(): any {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        var list = this.http.get('http://api.qshore.com/users')
            .map((response: Response) => {
                return response.json();
            });
        return list;

    }

    insertUser(user: any) {

        return this.http.post('http://api.qshore.com/add-user', user)
            .map(
            (response: Response) => {
                return response.json();
            });
    }

    getSingleUser(id: any): any {
        console.log("hi")
        console.log(id);
        
        return this.http.get('http://api.qshore.com/view-user/' + id)
            .map(
                  (response: Response) => 
                  {
                     return response.json();
                   }
            );
    }
}