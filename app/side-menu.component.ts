import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'side-menu',
    templateUrl: '../public/html/side-menu.html',
    styleUrls: ['../public/css/side-menu.css']
})

export class SideMenuComponent {
    @ViewChild('sidemenu') sidemenu: ViewChild;
    public li: any;
    constructor() {
        this.li = [false, false, false, false];
    }
    activate = function(ele: any) {
        console.log('activate:', ele);
        for(var i in this.li) {
            if(i == ele) this.li[i] = true;
            else this.li[i] = false;
        }
    }
}
