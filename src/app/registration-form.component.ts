import {Component, EventEmitter, DoCheck} from '@angular/core'
import {DataService} from './data.service'

@Component({
    selector: '[registration-form]',
    templateUrl: './registration-form.html',
    styleUrls: ['./login-form.css']
})

export class RegistrationFormComponent implements DoCheck {
    registerModel: any = {
        newemail: {
            value: '',
            valid: true,
            error: ''
        },
        newpassword:  {
            value: '',
            valid: true
        },
        confirmpassword:  {
            value: '',
            valid: true
        },
        valid: true
    }
    newemailControl = new EventEmitter();
    constructor(public _dataService: DataService) {
        this.newemailControl
        .distinctUntilChanged()
        .subscribe((value) => {
            console.log(value);
            if(this._dataService.isValidEmail(value)) {
                this._dataService.checkEmail(value)
                    .subscribe(
                        (data: any) => {this.registerModel.newemail.valid = true},
                        (err: any) => {this.registerModel.newemail.valid = false; this.registerModel.newemail.error = 'Email already registered!';}
                    );
            } else {
                this.registerModel.newemail.valid = false;
                this.registerModel.newemail.error = 'Invalid email address!';
            }
        });
    }

    ngDoCheck() {
        if(this.registerModel.newemail.valid && this.registerModel.newpassword.value == this.registerModel.confirmpassword.value && this.registerModel.newpassword != '') {
            this.registerModel.valid = true;
        } else {
            this.registerModel.valid = false;
        }
    }
}
