import {Component, ComponentFactory, ComponentMetadata, ComponentResolver, ReflectiveInjector, ViewContainerRef, TemplateRef, Input, ViewChild} from '@angular/core'
import {DataService} from './data.service.js'

@Component({
    selector: '[login-form]',
    templateUrl: 'app/login-form',
    providers: [DataService]
})

export class LoginFormComponent {
    private loginModel = {
        email: null,
        password: null
    };
    @ViewChild('email') emailRef;
    constructor(private _dataService: DataService) { }

    get = function() {
        return JSON.stringify(this.loginModel);
    }

    login = this._dataService.login;

}
