import {Component, EventEmitter, Directive, ContentChildren} from '@angular/core'
import {DataService} from './data.service'

@Component({
    selector: 'rsms',
    templateUrl: './rsms.html'
})

export class RSMsComponent {
    public rsms = [];
    public roomId: any;
    public rsmSearch = new EventEmitter();
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
                this._dataService._factoryService.temp = [];
                var exp = new RegExp(value, 'i');
                for(var r in this._dataService._factoryService.rsms) {
                    if(exp.test(this._dataService._factoryService.rsms[r])) {
                        this._dataService._factoryService.temp.push(this._dataService._factoryService.rsms[r].replace(/^room-/, ''));
                    }
                }
            }
        )
    }

    loadTerminal = (roomId: any) => {
        console.log('joining room:', roomId);
        this.roomId = roomId;
    }

}
