import {Component} from '@angular/core';
import {DataService} from './data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'header',
    templateUrl: './header.html',
    styleUrls: ['./header.css']
})

export class HeaderComponent {
    constructor(private _dataService: DataService, private router: Router) { }
}
