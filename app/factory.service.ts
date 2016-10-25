import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()

export class FactoryService {
    private authenticated: boolean;
    private token;
    private temp;
    private roomId = new BehaviorSubject('');
    constructor() {
        this.authenticated = false;
    }

    getRoomIdAsObservable = () => {
        return this.roomId.asObservable();
    }

    getRoomIdAsEmitter = () => {
        return this.roomId;
    }

    showTemp = () => {
        console.log(this.temp.a);
    }

    getTemp = () => {
        return this.temp;
    }

    pushToTemp = (val) => {
        this.temp.a.push(val);
    }

    isAuthenticated = function() {
        console.log('isAuthenticated:', this.authenticated);
        return this.authenticated;
    }

    setAuthenicated = function(bool: boolean) {
        this.authenticated = bool;
    }

    setToken = function(token) {
        this.token = token;
    }

    getToken = function() {
        return this.token;
    }
}
