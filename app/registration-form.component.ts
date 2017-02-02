import {Component, EventEmitter, AfterViewInit} from '@angular/core'
import {DataService} from './data.service.js'
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
declare var $: any

@Component({
    selector: '[registration-form]',
    templateUrl: 'app/registration-form',
    styleUrls: ['css/login-form.css'],
    providers: [DataService]
})

export class RegistrationFormComponent implements AfterViewInit {
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

    ngAfterViewInit() {
        $('.selectpicker').selectpicker();
    }
}
