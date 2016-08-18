import {Injectable} from '@angular/core'
import {Http, Headers, Response, RequestOptions} from '@angular/http'
import {FactoryService} from './factory.service.js'
import {Router} from '@angular/router'

@Injectable()

export class DataService {
    constructor(private http: Http, private _factoryService: FactoryService, private router: Router) { }

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
                    if(data.status === 200) {
                        this._factoryService.setAuthenicated(true);
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
        return this.http.get('/api/getaccounts')
            .map(res => res.json());
    }

    search = function(ci) {
        console.log('search: ', ci);
        return this.http.get('/api/search?ci='+ci)
                    .map(res => res.json());
    }

    getMonitoringData = function(ci, tool) {
        console.log('getting monitoring data: ', ci);
        return this.http.get('/api/getmonitoringdata?ci='+ci+'&tool='+tool)
                    .map(res => res.json());
    }

    getRsms = function() {
        console.log('getting rsms: ');
        return this.http.get('/api/getrsms')
                    .map(res => res.json());
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
