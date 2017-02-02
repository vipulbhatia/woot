import {Component, ComponentFactoryResolver, ReflectiveInjector, ViewContainerRef, Directive, ViewChild} from '@angular/core'
import {RegistrationFormComponent} from './registration-form.component.js';

@Component({
    selector: 'main',
    templateUrl: 'app/main-login'
})

export class MainLoginComponent {
    @ViewChild('registrationForm', {read: ViewContainerRef}) registrationFormRef;
    private authenticated;
    constructor(private vcRef: ViewContainerRef, private resolver: ComponentFactoryResolver) {
        this.authenticated = false;
    }

    private injectComponent = function(cmp) {
        if(!document.registrationForm) {
            const factory = this.resolver.resolveComponentFactory(cmp);
            const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
            const ref = this.registrationFormRef.createComponent(factory, 0, injector, []);

        }
    }

    loadRegistrationForm = function() {
        this.injectComponent(RegistrationFormComponent);
    }

}
