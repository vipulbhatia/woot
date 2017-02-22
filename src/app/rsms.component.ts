import {Component, EventEmitter, Directive, ContentChildren} from '@angular/core'
import {DataService} from './data.service'

@Component({
    selector: 'rsms',
    templateUrl: './rsms.html',
    styleUrls: ['./rsms.css']
})

export class RSMsComponent {
    public rsms = [];
    public roomId: any;
    public rsmSearch = new EventEmitter();
    public myRsmSearch = new EventEmitter();
    public socket: any;
    constructor(public _dataService: DataService) {
        console.log('rsms component:', this._dataService.temp);
        this._dataService._factoryService.getRoomIdAsObservable()
        .distinctUntilChanged()
        .subscribe(
            (val: any) => {
                console.log('rsms component got:', val);
                if(val != '' && val != undefined) this.loadTerminal(val);
            }
        )
        this.rsmSearch.distinctUntilChanged()
        .subscribe(
            (value: any) => {
                console.log('filtering...', value);
                this._dataService._factoryService.temp = [];
                this._dataService._factoryService.temp = this.filterList(value, this._dataService._factoryService.rsms);
            }
        )
        this.myRsmSearch.distinctUntilChanged()
            .subscribe(
                (value: any) => {
                    console.log('filtering my rsm list', value);
                    this._dataService._factoryService.myTemp = this.filterList(value, this._dataService._factoryService.myRsmList);
                }
            )
    }

    loadTerminal = (roomId: any) => {
        console.log('joining room:', roomId);
        this.roomId = roomId;
    }

    filterList = (value: any, list: any) => {
        var temp = [];
        var exp = new RegExp(value, 'i');
        for(var r in list) {
            if(exp.test(list[r])) {
                temp.push(list[r]);
            }
        }
        return temp;
    }
}
