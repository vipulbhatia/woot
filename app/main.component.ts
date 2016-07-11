import {Component} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router'

@Component({
    selector: 'main',
    template: `
        <h1>Component Router</h1>
        <nav>
          <a [routerLink]="['/login']">Crisis Center</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class MainComponent {

}
