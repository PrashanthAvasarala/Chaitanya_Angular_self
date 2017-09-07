import {Component} from '@angular/core';
@Component({
    selector : 'directive',
    templateUrl : './directive.component.html',
    styles : [`p { color : dodgerblue,font-family: Arial, Helvetica, sans-serif;
        font-size: 250%;}
             `]
})

export class DirectiveComponent{
    age = ' ';
}
