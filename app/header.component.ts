import {Component} from '@angular/core'
import {FactoryService} from './factory.service.js'
import {Router} from '@angular/router'
import {RSMsComponent} from './rsms.component.js'

@Component({
    selector: 'header',
    templateUrl: 'app/header',
    styleUrls: ['css/header.css'],
    directives: [RSMsComponent]
})

export class HeaderComponent {
    constructor(private _factoryService: FactoryService, private router: Router) { }

    logout = function() {
        console.log('logout called:');
        this._factoryService.setAuthenicated(false);
        this.router.navigate(['/login']);
    }
}
