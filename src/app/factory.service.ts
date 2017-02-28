import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import { environment } from '../environments/environment'

@Injectable()

export class FactoryService {
    public authenticated: boolean;
    public token: string;
    public temp: any = [];
    public rsms: any = [];
    public myRsmList: any = [];
    public myTemp: any = [];
    public username: string;
    public roomId = new BehaviorSubject('');
    public config: any = {
        serverUrl: '',
        nsp: '',
        mongodbUrl: '',
        API_BASEURL: '/api'
    }
    public lastSearchCI = '';
    public noofresults = 5;
    public loginError: string;
    public registrationError: string;
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

    setAuthenicated = (bool: boolean) => {
        this.authenticated = bool;
    }

    getAuthenticated = () => {
        return this.authenticated;
    }

    setToken = (token: string) => {
        this.token = token;
        localStorage.setItem('token', this.token);
    }

    getToken = () => {
        var token = '';
        if(this.token) token = this.token;
        else if(localStorage.getItem('token')) token = localStorage.getItem('token');
        return token;
    }

    removeToken = () => {
        this.setToken(null);
        localStorage.removeItem('token');
        return true;
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
