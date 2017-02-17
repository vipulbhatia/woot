import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import { environment } from '../environments/environment';

@Injectable()

export class FactoryService {
    public authenticated: boolean;
    public token: string;
    public temp: any = [];
    public rsms: any = [];
    public username: string;
    public roomId = new BehaviorSubject('');
    public config: any = {
        serverUrl: '',
        nsp: '',
        mongodbUrl: ''
    }
    public lastSearchCI = '';
    public noofresults = 3;
    constructor() {
        this.authenticated = false;
        this.config.serverUrl = environment.serverUrl;
        this.config.nsp = '';
        this.config.mongodbUrl = environment.mongodbUrl;
    }

    getRoomIdAsObservable = () => {
        return this.roomId.asObservable();
    }

    getRoomIdAsEmitter = () => {
        return this.roomId;
    }

    pushToTemp = (val: any) => {
        this.temp.a.push(val);
    }

    isAuthenticated = () => {
        console.log('isAuthenticated:', this.authenticated);
        return this.authenticated;
    }

    setAuthenicated = (bool: boolean) => {
        this.authenticated = bool;
    }

    setToken = (token: string) => {
        this.token = token;
    }

    getToken = () => {
        return this.token;
    }

    setUsername = (username: string) => {
        this.username = username;
    }

    getUsername = () => {
        return this.username;
    }

    setNsp = (nsp: string) => {
        this.config.nsp = nsp;
    }

    getNsp = () => {
        return this.config.nsp;
    }

    getServerUrl = () => {
        return this.config.serverUrl;
    }

    getMongodbUrl = () => {
        return this.config.mongodbUrl;
    }
}
