import {Injectable} from '@angular/core'
import {Router, CanActivate} from '@angular/router'
import {FactoryService} from './factory.service.js'

@Injectable()

export class AuthService implements CanActivate {
    constructor(private router: Router, private _factoryService: FactoryService){
        console.log('AuthService');
    }
    canActivate() {
        if(this._factoryService.isAuthenticated()) return true;
        this.router.navigate(['/login']);
        return false;
    }
}
