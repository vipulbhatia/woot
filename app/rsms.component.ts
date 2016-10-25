import {Component, EventEmitter, Directive, ContentChildren} from '@angular/core'
import {TerminalsComponent} from './terminals.component.js'
import {DataService} from './data.service.js'

@Component({
    selector: 'rsms',
    templateUrl: 'app/rsms',
    providers: [DataService],
    directives: [TerminalsComponent]
})

export class RSMsComponent {
    //private rsms = [];
    //private temp = [];
    private roomId;
    private rsmSearch = new EventEmitter();
    private socket;
    constructor(public _dataService: DataService) {
        this._dataService._factoryService.getRoomIdAsObservable()
        .distinctUntilChanged()    
        .subscribe(
            val => {
                console.log('rsms component got:', val);
                if(val != '' && val != undefined) this.loadTerminal(val);
            }
        )
        this.rsmSearch.distinctUntilChanged()
        .subscribe(
            (value) => {
                this._dataService.temp = [];
                var exp = new RegExp(value, 'i');
                for(var r in this._dataService.rsms) {
                    if(exp.test(this._dataService.rsms[r])) {
                        this._dataService.temp.push(this._dataService.rsms[r].replace(/^room-/, ''));
                    }
                }
            }
        )
    }

    loadTerminal = function(roomId) {
        console.log('joining room:', roomId);
        this.roomId = roomId;
    }

}
