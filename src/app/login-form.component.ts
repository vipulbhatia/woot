import {Component, ComponentFactory, ReflectiveInjector, ViewContainerRef, TemplateRef, Input, ViewChild} from '@angular/core';
import { DataService } from './data.service';
import {RouterModule} from '@angular/router';

@Component({
    selector: '[login-form]',
    templateUrl: './login-form.html',
    styleUrls: ['./login-form.css']
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
