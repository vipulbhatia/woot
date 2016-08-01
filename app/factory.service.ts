import {Injectable} from '@angular/core'

@Injectable()

export class FactoryService {
    private authenticated = false;

    isAuthenticated = function() {
        console.log('isAuthenticated:', this.authenticated);
        return (this.authenticated === true) ? true : false;
    }

    setAuthenicated = function(bool) {
        this.authenticated = (bool === true) ? true : false;
    }
}
