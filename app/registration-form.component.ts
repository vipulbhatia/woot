import {Component, EventEmitter} from '@angular/core'
import {DataService} from './data.service.js'

@Component({
    selector: '[registration-form]',
    templateUrl: 'app/registration-form',
    providers: [DataService]
})

export class RegistrationFormComponent {
    registerModel = {
        newemail: null,
        newpassword: null,
        confirmpassword: null
    }
    newemailControl = new EventEmitter();
    constructor(private _dataService: DataService) {
        this.newemailControl.debounceTime(400)
        .distinctUntilChanged()
        .subscribe((value) => {console.log(value);this._dataService.checkEmail(value)});
    }
}
