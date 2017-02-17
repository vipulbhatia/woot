import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()

export class FactoryService {
    private authenticated: boolean;
    private token: string;
    private temp: any;
    private username: string;
    private roomId = new BehaviorSubject('');
    private config = {
        serverUrl: '',
        nsp: '',
        mongodbUrl: ''
    }
    constructor() {
        this.authenticated = false;
        this.config.serverUrl = 'https://localhost:8082';
        this.config.nsp = '';
        this.config.mongodbUrl = 'https://localhost:8083';
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
