import {Injectable} from '@angular/core'
import {Http, Headers, Response, RequestOptions} from '@angular/http'
import {FactoryService} from './factory.service'
import {Router} from '@angular/router'
declare var io: any;

@Injectable()

export class DataService {
    private host: String;
    public rsms: any;
    public temp: any;
    private socket: any;
    public headers = new Headers();
    constructor(public http: Http, public _factoryService: FactoryService, private router: Router) {
        this.host = this._factoryService.getMongodbUrl();
        this.rsms = [];
        this.temp = [];
        this.headers.append('Content-Type', 'application/json');
        this.isAuthenticated();
    }

    jsonToArray = function(json: any) {
        var arr = [],
            i = 0;
        for(var key in json) {
            arr[i] = [key, json[key]];
            ++i;
        }
        return arr;
    }

    loadSocketio = () => {
        console.log('loadSocketio: ', this._factoryService.getNsp());
        this.socket = io.connect('/' + this._factoryService.getNsp());

        this.socket.on('connect', () => {
            this.socket.emit('auth', this._factoryService.getToken());
        });

        this.socket.on('all-rooms', (rooms: any) => {
            console.log('all-rooms:', rooms);
            this._factoryService.temp = [];
            this._factoryService.rsms = [];
            this._factoryService.myRsmList = [];
            var userRe = new RegExp('^' + this._factoryService.getUsername() + '-(.*)-(TTY|SSH|WIN)$', 'i');
            //rooms = rooms.split(',');
            for(var i in rooms) {
                console.log(rooms[i]);
                if(userRe.test(rooms[i])) {
                    this._factoryService.myRsmList.push(rooms[i]);
                    this._factoryService.myTemp = this._factoryService.myRsmList;
                } else if(/-TTY$|-SSH$|-WIN$/.test(rooms[i])) {
                    this._factoryService.rsms.push(rooms[i]);
                    this._factoryService.temp = this._factoryService.rsms;
                }
            }
            console.log('temp values', this._factoryService.temp);
        });

        /*this.socket.on('message', (data: any) => {
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
        });*/
    }

    isAuthenticated = () => {
        console.log('checking auth status...');
        if(this._factoryService.getToken()) {
            this.headers.append('Authorization', this._factoryService.getToken());
            this.http.get(this._factoryService.config.API_BASEURL + '/login', {headers: this.headers})
                .map((res: any) => res.json())
                .subscribe(
                    (data: any) => {
                        this.loadProfile(data);
                    },
                    (err: any) => {
                        console.error(err);
                    }
                )
        }
    }

    loadProfile = (data: any) => {
        console.log('got data:', data);
        this._factoryService.setAuthenicated(true);
        this._factoryService.setToken(data.token);
        this._factoryService.setUsername(data.username);
        this._factoryService.setNsp(data.nsp);
        console.log('loaded settings...', this._factoryService.getUsername());
        this.router.navigate(['/portal/']);
    }

    login = (bodyq: any) => {
        console.log('login called');
        var body: any = JSON.stringify({email:bodyq.email});
        this.http.post(this._factoryService.config.API_BASEURL + '/login', JSON.stringify({email:bodyq.email, password:bodyq.password}), {headers: this.headers})
            .map((res: any) => res.json())
            .subscribe(
                (data: any) => {
                    console.log('authenticated successfully...');
                    this.loadProfile(data);
                    this.loadSocketio();
                },
                (err: any) => {
                    console.error(err);
                }
            )
    }

    logout = function() {
        console.log('logout called:');
        this._factoryService.setAuthenicated(false);
        this._factoryService.removeToken();
        this.router.navigate(['/login']);
    }

    register = (registerModel: any) => {
        console.log('registering user');
        this.http.post(this._factoryService.config.API_BASEURL + '/users/register', {registerModel: registerModel}, {headers: this.headers})
            .map((res: any) => res.json())
            .subscribe(
                (data: any) => {}
            )
    }

    checkEmail = (email: any) => {
        console.log('checking email...');
        var body: any = JSON.stringify({email:email});
        return this.http.post(this._factoryService.config.API_BASEURL + '/users/checkEmail', JSON.stringify({email:email}), {headers: this.headers})
            .map((res: any) => res.json());
    }

    getAccounts = () => {
        console.log('Data Service: getting accounts: ');
        return this.http.get('/api/getaccounts?token='+this._factoryService.getToken())
            .map((res: any) => res.json());
    }

    search = (ci: any) => {
        console.log('search here: ', ci);
        return this.http.get(this._factoryService.config.API_BASEURL + '/findhost/' + ci + '/' + this._factoryService.noofresults, {headers: this.headers})
                    .map((res: any) => res.json());
    }

    getNext = (ci: any) => {
        console.log('get next:', ci, this._factoryService.lastSearchCI);
        return this.http.get(this._factoryService.config.API_BASEURL + '/findhost/' + ci + '/' + this._factoryService.noofresults + '/' + this._factoryService.lastSearchCI, {headers: this.headers})
                    .map((res: any) => res.json());
    }

    getMonitoringData = (ci: any, tool: any) => {
        var db;
        switch(tool.toUpperCase()) {
            case 'MLM': db = 'portal';break;
        }
        console.log('getting monitoring data: ', ci);
        return this.http.get(this._factoryService.config.API_BASEURL + '/' + db + '/' + ci, {headers: this.headers})
                    .map((res: any) => res.json());
    }

    getRsms = () => {
        console.log('getting rsms: ');
        return this.http.get('/api/getrsms?token='+this._factoryService.getToken(), {headers: this.headers})
                    .map((res: any) => res.json());
    }

    getRooms = () => {
        console.log('getting rsm rooms from exchange: ');
        return this.http.get('http://127.0.0.1:8000/api/getrooms')
                    .map((res: any) => res.json());
    }

    getUsers = () => {
        console.log('getting users data');
        return this.http.get(this._factoryService.config.API_BASEURL + '/users/' + this._factoryService.getNsp(), {headers: this.headers})// + this._factoryService.getNsp())
                    .map((res: any) => res.json())
    }

    updateUser = (user: any) => {
        console.log('updating user:', user.username);
        return this.http.post(this._factoryService.config.API_BASEURL + '/users/update', user, {headers: this.headers})
                    .map((res: any) => res.json())
    }

    isValidEmail = (email: any) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = re.test(email) ? true : false;
        return valid;
        /*var pristine = (email === '') ? true : false;
        return {
            value: email,
            valid: valid,
            pristine: pristine
        }*/
    }

}
