import {Component} from '@angular/core'
import {FormControl, REACTIVE_FORM_DIRECTIVES} from '@angular/forms'
import {DataService} from './data.service.js'
import {NgModel} from '@angular/common'

@Component({
    selector: '[registration-form]',
    templateUrl: 'app/registration-form',
    providers: [REACTIVE_FORM_DIRECTIVES, DataService]
})

export class RegistrationFormComponent {
    registerModel = {
        newemail: new NgModel,
        newpassword: null,
        confirmpassword: null
    }
    newemailControl = new FormControl("");
    constructor(private _dataService: DataService) {
        this.newemailControl.control.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe((value) => {console.log(value);this._dataService.checkEmail(value)});
    }
}
