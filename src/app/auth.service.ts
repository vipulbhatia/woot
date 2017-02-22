import {Injectable} from '@angular/core'
import {Router, CanActivate} from '@angular/router'
import {DataService} from './data.service'
import { Observable } from 'rxjs/Observable'

@Injectable()

export class AuthService implements CanActivate {
    constructor(private router: Router, private _dataService: DataService) {
        console.log('AuthService');
    }
    canActivate() {
        if(this._dataService._factoryService.getAuthenticated()) return true;
        this.router.navigate(['/login']);
    }
}
