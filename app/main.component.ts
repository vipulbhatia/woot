import {Component, ComponentResolver, ReflectiveInjector, ViewContainerRef, Directive, ViewChild} from 'angular2/core'
import {LoginFormComponent} from './login-form.component.js'
import {RegistrationFormComponent} from './registration-form.component.js'

@Component({
    selector: 'main',
    templateUrl: 'app/main',
        directives: [RegistrationFormComponent]
})

export class MainComponent {
    @ViewChild('loginForm', {read: ViewContainerRef}) loginFormRef;
    private authenticated;
    constructor(private vcRef: ViewContainerRef, private resolver: ComponentResolver) {
        this.authenticated = false;
    }

    private injectComponent = function(cmp) {
        if(!document.loginForm) {
            this.resolver.resolveComponent(cmp)
              .then(factory => {
                const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
                this.loginFormRef.createComponent(factory, 0, injector, []);
            });
        }
    }

    loadLoginForm = function() {
        this.injectComponent(LoginFormComponent);
    }

}
