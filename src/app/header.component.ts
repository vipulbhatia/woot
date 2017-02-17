import {Component} from '@angular/core';
import {FactoryService} from './factory.service';
import {Router} from '@angular/router';

@Component({
    selector: 'header',
    templateUrl: './header.html',
    styleUrls: ['./header.css']
})

export class HeaderComponent {
    constructor(private _factoryService: FactoryService, private router: Router) { }

    logout = function() {
        console.log('logout called:');
        this._factoryService.setAuthenicated(false);
        this.router.navigate(['/login']);
    }
}
