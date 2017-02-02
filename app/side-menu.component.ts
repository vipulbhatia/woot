import {Component, ViewChild} from '@angular/core'
import {RouteConfig} from '@angular/router'

@Component({
    selector: 'side-menu',
    templateUrl: 'app/side-menu',
    styleUrls: ['css/side-menu.css']
})

export class SideMenuComponent {
    @ViewChild('sidemenu') sidemenu;
    private li;
    constructor() {
        this.li = [false, false, false, false];
    }
    activate = function(ele) {
        console.log('activate:', ele);
        for(var i in this.li) {
            if(i == ele) this.li[i] = true;
            else this.li[i] = false;
        }
    }
}
