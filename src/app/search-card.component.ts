import {Component, EventEmitter} from '@angular/core'
import {DataService} from './data.service'
import { DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'search',
    templateUrl: './search-card.html',
    styles: ['.search-bar-full { margin-top: 10px; }']
})

export class SearchCardComponent {
    charts: any = [];
    accounts: any = [];
    results: any = [];
    temp: any = [];
    pages: any = [];
    noofresults: any;
    currpage: any = 0;
    totalPages: any = 0;
    monitoringData: any;
    serverInfo: any = {};
    serverName: any = '';
    monitoringDataKeys: any;
    show: boolean = true;
    formInline = false;
    chartData: any = [];
    ciSearchControl = new EventEmitter();
    public srcUrlSeverityCount: any;
    public srcUrlIncidentsBySeverity: any;
    public srcUrlAssignedIncidents: any;
    constructor(public _dataService: DataService, private sanitizer: DomSanitizer) {
        this.noofresults = this._dataService._factoryService.noofresults;
        /*this.temp = [
            {
                esm_name: 'TESTCI',
                account: 'HTN',
                accounted_by: 'MLM',
                cost: 'nc',
                data: {
                    MLM: {
                        originating_source: 'vipul-Dell-Precision-M3800-SSH',
                        ip: '192.134.32.88'
                    }
                }
            }
        ]
        this.monitoringData = {
            config: [
                {
                    instance_name: 'CPU',
                    param_thresh: [
                        {
                            parameter_name: 'CPU: 0',
                            sev3: '9 90',
                            sev4: '10 100'
                        },
                        {
                            parameter_name: 'CPU: 1',
                            sev3: '9 90',
                            sev4: '10 100'
                        }
                    ]
                },
                {
                    instance_name: 'Windows',
                    param_thresh: [
                        {
                            parameter_name: 'Process 1',
                            sev3: '9 90',
                            sev4: '10 100'
                        },
                        {
                            parameter_name: 'Process 2',
                            sev3: '9 90',
                            sev4: '10 100'
                        }
                    ]
                }
            ]
        }*/
        this.ciSearchControl.debounceTime(400)
            .distinctUntilChanged()
            .subscribe(
                val => {
                    //var ciList = val.split(/\s+|,|\n|\r/);
                    if(val != '') this._dataService.search(val)
                        .subscribe(
                            (data: any) => {
                                console.log(data);
                                this.results = this.temp = [];
                                if(data.results.length >= 1) {
                                    console.log(data.results[data.results.length - 1]._id);
                                    this._dataService._factoryService.lastSearchCI = data.results[data.results.length - 1]._id;
                                    this.results = data.results;
                                    this.temp = data.results;
                                    this.currpage = 0;
                                    this.totalPages = 0;
                                    this.show = false;
                                }
                            },
                            (err: any) => console.error('error: ', err),
                            () => console.log('finished searching...')
                        )
                }
            )
        this.chartData = [
          { label: '2008', value: 20 },
          { label: '2009', value: 10 },
          { label: '2010', value: 5 },
          { label: '2011', value: 5 },
          { label: '2012', value: 20 }
      ];
        this.charts.push({chartId: 'search-chart-1', title: 'Donut 1', type: 'Donut', chartData: this.chartData});

        /*this._dataService.getAccounts()
            .subscribe(
                (data: any) => this.accounts = data.results,
                (err: any) => console.error(err),
                () => console.log('finished getting accounts...')
            );
            */
    }

    selectPage = function(page: any) {
        for(var i=0; i<this.pages.length; i++) {
            this.pages[i] = (i == page) ? true : false;
        }
        var start = page*this.noofresults;
        var end = (start+this.noofresults >= this.results.length) ? -1 : start+this.noofresults;
        this.temp = this.results.slice(page*this.noofresults, page*this.noofresults+this.noofresults);
    }

    getMonitoringData = function(result: any) {
        console.log('getting monitoring data:');
        this._dataService.getMonitoringData(result.esm_name, result.accounted_by)
            .subscribe(
                (data: any) => {
                    this.monitoringData = data.results[0];//this._dataService.jsonToArray(data.results[0]);
                    this.serverName = result.esm_name;
                    //this.show = false;
                    //this.formInline = true;
                },
                (err: any) => console.error(err),
                () => console.log('finished getting monitoring data...')
            )
    }

    showServerInfo = (data: any) => {
        this.serverInfo = data;
        this.serverName = data.esm_name;
    }

    search = function() {
        this._dataService.search(this.ci)
            .subscribe(
                (data: any) => {
                    console.log('where am i');
                    console.log(data);
                    console.log('id:', data.results[length - 1]._id);
                    this._factoryService.lastSearchCI = data.results[length - 1]._id;
                    this.results = data.results;
                    this.pages = [];
                    for(var i=0; i<Math.ceil(this.results.length/this.noofresults); i++) {
                        this.pages[i] = (i == 0) ? true : false;
                    }
                    (this.results.length <= this.noofresults) ? this.temp=this.results : this.temp=this.results.slice(0, this.noofresults);
                    console.log(this.pages);
                    //this.show = true;
                    //this.formInline = false;
                },
                (err: any) => console.error('error: ', err),
                () => console.log('finished searching...')
            )
    }

    getNext = (ci: any) => {
        if(this.currpage < this.totalPages) {
            this.temp = this.results.slice((this.currpage+1) * this.noofresults, (this.currpage+2) * this.noofresults);
            this.currpage++;
        } else {
            this._dataService.getNext(ci)
                .subscribe(
                    (data: any) => {
                        console.log(data);
                        if(data.results.length >= 1) {
                            console.log('id:', data.results[data.results.length - 1]._id);
                            this._dataService._factoryService.lastSearchCI = data.results[data.results.length - 1]._id;
                            //this.results.concat(data.results);
                            for(var i=0; i<data.results.length; i++) {
                                this.results.push(data.results[i]);
                            }
                            console.log('showing results:', this.results);
                            this.temp = data.results;
                            this.currpage++;
                            this.totalPages++;
                        }
                    },
                    (err: any) => console.error('error: ', err),
                    () => console.log('finished searching...')
                )
            }
    }

    getPrev = () => {
        console.log('getting prev...', this.currpage, this.results);
        if(this.currpage >= 1) {
            this.temp = this.results.slice((this.currpage-1) * this.noofresults, this.currpage * this.noofresults);
            console.log('showing temp:', this.temp);
            this.currpage--;
        }
    }
}
