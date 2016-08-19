import {Component, ViewChild} from '@angular/core'
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router'
import {SearchComponent} from './search.component.js'

@Component({
    selector: 'side-menu',
    templateUrl: 'app/side-menu',
    styleUrls: ['css/side-menu.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class SideMenuComponent {
    @ViewChild('sidemenu') sidemenu;
    private li;
    constructor() {
        this.li = [true, false, false];
    }
    activate = function(ele) {
        console.log('activate:', ele);
        for(var i in this.li) {
            if(i == ele) this.li[i] = true;
            else this.li[i] = false;
        }
    }
}
