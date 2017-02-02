import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service.js';

@Component({
    selector: 'users',
    templateUrl: 'app/users',
    styleUrls: ['css/users.css']
})

export class UsersComponent implements OnInit {
    private users;
    private roles = ['admin', 'user'];//get this value from db
    private statuses = ['active', 'inactive', 'pending'];//get this value from db

    constructor(private _dataService: DataService) {  }

    ngOnInit() {
        this._dataService.getUsers()
            .subscribe((data) => {
                this.users = data.results;
            })
    }
    editUser = (user) => {
        user.edited = true;
    }
    updateUserRole = (user, newrole) => {
        console.log(user.role, newrole);
        if(this.roles.indexOf(newrole) != -1) user.role = newrole;
    }
    updateUserStatus = (user, newstatus) => {
        console.log(user.status, newstatus);
        if(this.statuses.indexOf(newstatus) != -1) user.status = newstatus;
    }
    updateUser = (user) => {
        this._dataService.updateUser(user)
            .subscribe((data) => {
                                    console.log(data);
                                    user.edited = false;
                                },
                        (err) => console.error(err))
    }
}
