import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form.component.js';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [RegistrationFormComponent],
    exports: [RegistrationFormComponent]
})

export class RegistrationFormModule {

}
