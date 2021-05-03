import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: `
    <p>This is a warning</p>
    `,
    styles:[
        `
        p{
            padding: 20px;
            color:yellow;
        }
        `
    ]
})

export class WarningAlertComponent{

}