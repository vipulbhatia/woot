import {Component, Input, ViewChild, ElementRef, AfterViewInit} from '@angular/core'

@Component({
    selector: 'info-card',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <div class="panel-title">
                    {{monitoringData.esm_name}}
                </div>
            </div>
            <div class="table-responsive">
                <table #md class="table table-hover">
                    <!-- content goes here -->
                </table>
            </div>
        </div>
    `
})

export class InfoCardComponent implements AfterViewInit {
    @Input('monitoringData') monitoringData;
    @ViewChild('md') md: ElementRef;
    constructor() {
        //console.log(this.md); undefined;
    }
    ngAfterViewInit() {
        //console.log(this.md.nativeElement.innerHTML);
        var str = `<thead>
           <tr class="active"><th>Parameter Name</th><th>Polling Interval</th></tr>
           </thead>
           <tbody>`;
        for(var i in this.monitoringData.config) {
            console.log(this.monitoringData.config[i]);
            str += `<tr>
                <td>` + this.monitoringData.config[i].Parameter_name + `</td><td>` + this.monitoringData.config[i].Polling_interval + `</td>
            </tr>`;
        }
        str += `</tbody`;
        this.md.nativeElement.innerHTML = str;
    }
}
