import {Component, ComponentFactory, ComponentMetadata, ComponentResolver, Input, ReflectiveInjector, ViewContainerRef, TemplateRef} from '@angular/core'
import{FormControl, REACTIVE_FORM_DIRECTIVES} from '@angular/forms'
import {DataService} from './data.service.js'
import {Observable} from 'rxjs/Observable'

@Component({
    selector: '[login-form]',
    templateUrl: 'app/login-form',
    providers: [DataService, REACTIVE_FORM_DIRECTIVES]
})

export class LoginFormComponent {
    loginModel: any = {
        email: {}
    }

    term = new FormControl("");
    items: Observable<Object>;
    constructor(private _dataService: DataService) {
        this.loginModel.email.value = '';
        this.loginModel.email.valid = this.loginModel.email.pristine = true;
        this.term.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe((value) => {console.log(value); this._dataService.checkEmail(value)});
    }

    get = function() {
        return JSON.stringify(this.loginModel);
    }

}
