import {Injectable} from '@angular/core'
import {Router, CanActivate} from '@angular/router'

@Injectable()

export class AuthService implements CanActivate {
    constructor(private router: Router){
        console.log('AuthService');
    }
    canActivate() {
        this.router.navigate(['/login']);
        return false;
    }
}
