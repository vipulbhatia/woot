import {Injectable} from '@angular/core'
import {Http, Headers, Response, RequestOptions} from '@angular/http'
import {FactoryService} from './factory.service.js'
import {Router} from '@angular/router'

@Injectable()

export class DataService {
    private host;
    public rsms;
    public temp;
    private socket;
    constructor(private http: Http, public _factoryService: FactoryService, private router: Router) {
        this.host = this._factoryService.getMongodbUrl();
        this.rsms = [];
        this.temp = [];
        this.socket = io.connect(this._factoryService.getServerUrl() + '/' + this._factoryService.getNsp());

        this.socket.on('connect', () => {
            this.socket.emit('auth', this._factoryService.getToken());
        });

        this.socket.on('all-rooms', (rooms) => {
            console.log('all-rooms:', rooms);
            this.temp = [];
            this.rsms = [];
            //rooms = rooms.split(',');
            for(var i in rooms) {
                console.log(rooms[i]);
                if(/-TTY$|-SSH$|-WIN$/.test(rooms[i])) {
                    this.rsms.push(rooms[i]);
                    this.temp = this.rsms;
                }
            }
        });

        this.socket.on('message', (data) => {
            data = JSON.parse(data);
            if(data.sender != '') {
                this.temp = [];
                this.rsms = [];
                data.message = data.message.split(',');
                for(var i in data.message) {
                    console.log(data.message[i]);
                    if(/-TTY$|-SSH$|-WIN$/.test(data.message[i])) {
                        this.rsms.push(data.message[i].replace(/^room-/, ''));
                        this.temp = this.rsms;
                    }
                }
            }
        });
    }

    jsonToArray = function(json) {
        var arr = [],
            i = 0;
        for(var key in json) {
            arr[i] = [key, json[key]];
            ++i;
        }
        return arr;
    }

    login = function(bodyq) {
        console.log('login called');
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var body: any = JSON.stringify({email:bodyq.email});
        this.http.post('/api/login', JSON.stringify({email:bodyq.email, password:bodyq.password}), {headers: headers})
            .map(res => res.json())
            .subscribe(
                data => {
                    console.log('data service: got reponse:', data);
                    if(data.status === 200) {
                        this._factoryService.setAuthenicated(true);
                        this._factoryService.setToken(data.token);
                        this._factoryService.setUsername(data.username);
                        this._factoryService.setNsp(data.nsp);
                        this.router.navigate(['/portal/']);
                    } else {
                        this._factoryService.setAuthenicated(false);
                    }
                    return;
                }
            )
    }

    checkEmail = function(email) {
        console.log('checking email...');
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var body: any = JSON.stringify({email:email});
        this.http.post('/api/checkEmail', JSON.stringify({email:email}), {headers: headers})
            .map(res => res.json())
            .subscribe(
                data => console.log(data.status)
            )
    }

    getAccounts = function() {
        console.log('Data Service: getting accounts: ');
        return this.http.get('/api/getaccounts?token='+this._factoryService.getToken())
            .map(res => res.json());
    }

    search = function(ci) {
        console.log('search: ', ci);
        return this.http.get(this.host+'/findhost/'+ci+'/10')
                    .map(res => res.json());
    }

    getMonitoringData = function(ci, tool) {
        var db;
        switch(tool.toUpperCase()) {
            case 'MLM': db = 'portal';break;
        }
        console.log('getting monitoring data: ', ci);
        return this.http.get(this.host+'/'+db+'/'+ci)
                    .map(res => res.json());
    }

    getRsms = function() {
        console.log('getting rsms: ');
        return this.http.get('/api/getrsms?token='+this._factoryService.getToken())
                    .map(res => res.json());
    }

    getRooms = function() {
        console.log('getting rsm rooms from exchange: ');
        return this.http.get('http://127.0.0.1:8000/api/getrooms')
                    .map(res => res.json());
    }

    getUsers = () => {
        console.log('getting users data');
        return this.http.get(this._factoryService.getMongodbUrl() + '/users/htn')// + this._factoryService.getNsp())
                    .map(res => res.json())
    }

    updateUser = (user) => {
        console.log('updating user:', user.username);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(this._factoryService.getMongodbUrl() + '/users/update', user, options)
                    .map(res => res.json())
    }

    isValidEmail = function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = re.test(email) ? true : false;
        var pristine = (email === '') ? true : false;
        return {
            value: email,
            valid: valid,
            pristine: pristine
        }
    }

}
