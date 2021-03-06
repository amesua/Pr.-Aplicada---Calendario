import {Component, OnInit} from '@angular/core';
import {RouterExtensions} from 'nativescript-angular/router';
import { TextField } from "tns-core-modules/ui/text-field";
import { setTimeout } from "tns-core-modules/timer";
import { Page } from "tns-core-modules/ui/page";





@Component({
    selector: 'registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
    
})

export class registroComponent implements OnInit{

    constructor(
        private router: RouterExtensions,
        private page: Page
    ){this.page.actionBarHidden = true;}

    
    ngOnInit(){}

    public onNavigate(){
        this.router.back();
        
    }

    public onBack(){
        this.router.back();
    }

}
export class UsageComponent {
    name = "";

    onReturnPress(args) {
        // returnPress event will be triggered when user submits a value
        let textField = <TextField>args.object;

        // Gets or sets the placeholder text.
        console.log(textField.hint);
        // Gets or sets the input text.
        console.log(textField.text);
        // Gets or sets the secure option (e.g. for passwords).
        console.log(textField.secure);

        // Gets or sets the soft keyboard type. Options: "datetime" | "phone" | "number" | "url" | "email"
        console.log(textField.keyboardType);
        // Gets or sets the soft keyboard return key flavor. Options: "done" | "next" | "go" | "search" | "send"
        console.log(textField.returnKeyType);
        // Gets or sets the autocapitalization type. Options: "none" | "words" | "sentences" | "allcharacters"
        console.log(textField.autocapitalizationType);

        // Gets or sets a value indicating when the text property will be updated.
        console.log(textField.updateTextTrigger);
        // Gets or sets whether the instance is editable.
        console.log(textField.editable);
        // Enables or disables autocorrection.
        console.log(textField.autocorrect);
        // Limits input to a certain number of characters.
        console.log(textField.maxLength);

        setTimeout(() => {
            textField.dismissSoftInput(); // Hides the soft input method, ususally a soft keyboard.
        }, 100);
    }

    onFocus(args) {
        // focus event will be triggered when the users enters the TextField
        let textField = <TextField>args.object;
    }

    onBlur(args) {
        // blur event will be triggered when the user leaves the TextField
        let textField = <TextField>args.object;
    }

}