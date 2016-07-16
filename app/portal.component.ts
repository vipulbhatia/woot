import {Component} from '@angular/core'
import {SideMenuComponent} from './side-menu.component.js'
import {HeaderComponent} from './header.component.js'
import {FooterComponent} from './footer.component.js'
import {ROUTER_DIRECTIVES} from '@angular/router'

@Component({
    selector: 'main',
    templateUrl: 'app/portal',
    styleUrls: ['css/portal.css'],
    directives: [SideMenuComponent, HeaderComponent, FooterComponent, ROUTER_DIRECTIVES]
})

export class PortalComponent {

}
