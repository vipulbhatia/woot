import {Component, ComponentFactory, ComponentMetadata, ComponentResolver, ReflectiveInjector, ViewContainerRef, TemplateRef, Input, ViewChild} from '@angular/core'
import { DataService } from './data.service.js';
import {RouterModule} from '@angular/router';

@Component({
    selector: '[login-form]',
    templateUrl: 'app/login-form',
    styleUrls: ['css/login-form.css'],
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
