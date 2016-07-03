import {Injectable} from 'angular2/core'
import {Http, Headers, Response, RequestOptions} from 'angular2/http'

@Injectable()

export class DataService {
    constructor(private http: Http) {

    }

    login = function(bodyq) {
        console.log('login called');
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var body: any = JSON.stringify({email:bodyq.email.value});
        this.http.post('/api/login', JSON.stringify({email:bodyq.email.value}), {headers: headers})
            .map(res => res.json())
            .subscribe(
                data => console.log(data.status)
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
