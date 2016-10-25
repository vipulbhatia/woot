import {Component, EventEmitter} from '@angular/core'
import {DataService} from './data.service.js'
import {InfoCardComponent} from './info-card.component.js'
import {ChartComponent} from './chart.component.js'

@Component({
    selector: 'search',
    templateUrl: 'app/search-card',
    providers: [DataService],
    directives: [InfoCardComponent, ChartComponent]
})

export class SearchCardComponent {
    charts = [];
    accounts = [];
    results = [];
    temp = [];
    pages = [];
    noofresults = 50;
    currpage = 0;
    monitoringData;
    serverInfo;
    serverName = '';
    monitoringDataKeys;
    show = true;
    formInline = false;
    chartData = [];
    ciSearchControl = new EventEmitter();
    constructor(public _dataService: DataService) {
        this.temp = [
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
        }
        this.ciSearchControl.debounceTime(400)
            .distinctUntilChanged()
            .subscribe(
                val => {
                    //var ciList = val.split(/\s+|,|\n|\r/);
                    if(val != '') this._dataService.search(val)
                        .subscribe(
                            data => {
                                console.log(data);
                                console.log(data.results[0]);
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
                            err => console.error('error: ', err),
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
        console.log('getting monitoring data:');
        this._dataService.getMonitoringData(result.esm_name, result.accounted_by)
            .subscribe(
                data => {
                    this.monitoringData = data.results[0];//this._dataService.jsonToArray(data.results[0]);
                    this.serverName = result.esm_name;
                    this.show = false;
                    //this.formInline = true;
                },
                err => console.error(err),
                () => console.log('finished getting monitoring data...')
            )
    }

    showServerInfo = (data) => {
        this.serverInfo = data;
    }

    search = function() {
        this._dataService.search(this.ci)
            .subscribe(
                data => {
                    console.log(data);
                    console.log(data.results[0]);
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
                err => console.error('error: ', err),
                () => console.log('finished searching...')
            )
    }
}
