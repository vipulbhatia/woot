import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service.js';

@Component({
    selector: 'users',
    templateUrl: '../public/html/users.html',
    styleUrls: ['../public/css/users.css']
})

export class UsersComponent implements OnInit {
    public users: any;
    public roles = ['admin', 'user'];//get this value from db
    public statuses = ['active', 'inactive', 'pending'];//get this value from db

    constructor(public _dataService: DataService) {  }

    ngOnInit() {
        this._dataService.getUsers()
            .subscribe((data: any) => {
                this.users = data.results;
            })
    }
    editUser = (user: any) => {
        user.edited = true;
    }
    updateUserRole = (user: any, newrole: any) => {
        console.log(user.role, newrole);
        if(this.roles.indexOf(newrole) != -1) user.role = newrole;
    }
    updateUserStatus = (user: any, newstatus: any) => {
        console.log(user.status, newstatus);
        if(this.statuses.indexOf(newstatus) != -1) user.status = newstatus;
    }
    updateUser = (user: any) => {
        this._dataService.updateUser(user)
            .subscribe((data: any) => {
                                    console.log(data);
                                    user.edited = false;
                                },
                        (err: any) => console.error(err))
    }
}
