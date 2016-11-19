import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()

export class FactoryService {
    private authenticated: boolean;
    private token;
    private temp;
    private username;
    private roomId = new BehaviorSubject('');
    private config = {
        serverUrl: '',
        nsp: '',
        mongodbUrl: ''
    }
    constructor() {
        this.authenticated = false;
        this.config.serverUrl = 'http://127.0.0.1:8082';
        this.config.nsp = '';
        this.config.mongodbUrl = 'http://127.0.0.1:8083';
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

    isAuthenticated = () => {
        console.log('isAuthenticated:', this.authenticated);
        return this.authenticated;
    }

    setAuthenicated = (bool: boolean) => {
        this.authenticated = bool;
    }

    setToken = (token) => {
        this.token = token;
    }

    getToken = () => {
        return this.token;
    }

    setUsername = (username) => {
        this.username = username;
    }

    getUsername = () => {
        return this.username;
    }

    setNsp = (nsp) => {
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
