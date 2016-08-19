import {Injectable} from '@angular/core'

@Injectable()

export class FactoryService {
    private authenticated: boolean;
    constructor() {
        this.authenticated = false;
    }

    isAuthenticated = function() {
        console.log('isAuthenticated:', this.authenticated);
        return this.authenticated;
    }

    setAuthenicated = function(bool: boolean) {
        this.authenticated = bool;
    }
}
