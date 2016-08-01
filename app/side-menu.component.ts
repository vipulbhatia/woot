import {Component} from '@angular/core'
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router'
import {SearchComponent} from './search.component.js'

@Component({
    selector: 'side-menu',
    templateUrl: 'app/side-menu',
    styleUrls: ['css/side-menu.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class SideMenuComponent {

}
