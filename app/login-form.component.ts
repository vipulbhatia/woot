import {Component, ComponentFactory, ReflectiveInjector, ViewContainerRef, TemplateRef, Input, ViewChild} from '@angular/core';
import { DataService } from './data.service.js';
import {RouterModule} from '@angular/router';

@Component({
    selector: '[login-form]',
    templateUrl: '../public/html/login-form.html',
    styleUrls: ['../public/css/login-form.css'],
    providers: [DataService]
})

export class LoginFormComponent {
    public loginModel: any = {
        email: null,
        password: null
    };
    @ViewChild('email') emailRef: ViewChild;
    constructor(public _dataService: DataService) { }

    get = function() {
        return JSON.stringify(this.loginModel);
    }

    login = this._dataService.login;

}
