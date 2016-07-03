import {Component} from 'angular2/core'
import {DataService} from './data.service.js';

@Component({
    selector: '[registration-form]',
    templateUrl: 'app/registration-form',
    providers: [DataService]
})

export class RegistrationFormComponent {
    registerModel: Object;
    constructor(private _dataService: DataService) {
        this.registerModel = {
            newemail: {
                value: "",
                valid: true,
                pristine: true
            },
            newpassword: {
                value: "",
                valid: true,
                pristine: true
            },
            confirmpassword: {
                value: "",
                valid: true,
                pristine: true
            }
        }
    }

    isValidEmail = function(email) {
        console.log('validating email...');
        this.registerModel.newemail = this._dataService.isValidEmail(email);
    }
}
