import {Component, EventEmitter} from '@angular/core'
import {TerminalsComponent} from './terminals.component.js'
import {DataService} from './data.service.js'

@Component({
    templateUrl: 'app/rsms',
    providers: [DataService],
    directives: [TerminalsComponent]
})

export class RSMsComponent {
    private rsms = ['DSUSFGLTAPP05', 'room-tVhGvF3O1Mf5FVBgAAAB', 'room-eldOucH2mwSjSb8cAAAA'];
    private temp;
    private roomId;
    private rsmSearch = new EventEmitter();
    constructor(private _dataService: DataService) {
        this._dataService.getRsms().subscribe(
                (data) => {
                    //this.rsms = data.results;
                    this.temp = this.rsms;
                }
        );

        this.rsmSearch.distinctUntilChanged()
        .subscribe(
            (value) => {
                this.temp = [];
                var exp = new RegExp(value, 'i');
                for(var r in this.rsms) {
                    if(exp.test(this.rsms[r])) {
                        this.temp.push(this.rsms[r]);
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
