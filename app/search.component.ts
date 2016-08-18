import {Component} from '@angular/core'
import {DataService} from './data.service.js'

@Component({
    selector: 'search',
    templateUrl: 'app/search',
    providers: [DataService]
})

export class SearchComponent {
    accounts = [];
    results = [];
    temp = [];
    pages = [];
    noofresults = 5;
    currpage = 0;
    monitoringData;
    serverName = '';
    monitoringDataKeys;
    show = true;
    formInline = false;
    constructor(private _dataService: DataService) {
        this._dataService.getAccounts()
            .subscribe(
                data => this.accounts = data.results,
                err => console.error(err),
                () => console.log('finished getting accounts...')
            );
    }

    selectPage = function(page) {
        for(var i=0; i<this.pages.length; i++) {
            this.pages[i] = (i == page) ? true : false;
        }
        var start = page*this.noofresults;
        var end = (start+this.noofresults >= this.results.length) ? -1 : start+this.noofresults;
        this.temp = this.results.slice(page*this.noofresults, page*this.noofresults+this.noofresults);
    }

    getMonitoringData = function(result) {
        this._dataService.getMonitoringData(result.Hostname, result.Tool)
            .subscribe(
                data => {
                    console.log(data.results[0]);
                    this.monitoringData = this._dataService.jsonToArray(data.results[0]);
                    this.serverName = result.Hostname;
                    this.show = false;
                    this.formInline = true;
                },
                err => console.error(err),
                () => console.log('finished getting monitoring data...')
            )
    }

    search = function() {
        this._dataService.search(this.ci)
            .subscribe(
                data => {
                    this.results = data.results;
                    this.pages = [];
                    for(var i=0; i<Math.ceil(this.results.length/this.noofresults); i++) {
                        this.pages[i] = (i == 0) ? true : false;
                    }
                    (this.results.length <= this.noofresults) ? this.temp=this.results : this.temp=this.results.slice(0, this.noofresults);
                    console.log(this.pages);
                    this.show = true;
                    this.formInline = false;
                },
                err => console.error(err),
                () => console.log('finished searching...')
            )
    }

}
