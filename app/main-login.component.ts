import {Component, ComponentResolver, ReflectiveInjector, ViewContainerRef, Directive, ViewChild} from '@angular/core'
import {LoginFormComponent} from './login-form.component.js'
import {RegistrationFormComponent} from './registration-form.component.js'

@Component({
    selector: 'main',
    templateUrl: 'app/main-login',
    directives: [LoginFormComponent]
})

export class MainLoginComponent {
    @ViewChild('registrationForm', {read: ViewContainerRef}) registrationFormRef;
    private authenticated;
    constructor(private vcRef: ViewContainerRef, private resolver: ComponentResolver) {
        this.authenticated = false;
    }

    private injectComponent = function(cmp) {
        if(!document.registrationForm) {
            this.resolver.resolveComponent(cmp)
              .then(factory => {
                const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
                this.registrationFormRef.createComponent(factory, 0, injector, []);
            });
        }
    }

    loadRegistrationForm = function() {
        this.injectComponent(RegistrationFormComponent);
    }

}
