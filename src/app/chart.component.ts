import {Component, AfterViewInit, ElementRef, ViewChild, Input} from '@angular/core'
declare var io: any;
declare var $:any;
declare var Morris: any;

@Component({
    selector: 'chart',
    template: `
    <div class="panel panel-default bootcards-chart">
        <div class="panel-heading">
            <h3 class="panel-title">{{title}}</h3>
        </div>
        <div class="bootcards-chart-canvas" id={{chartId}}></div>
        <div class="panel-footer">
            <small>Built with Bootcards - Chart Card</small>
        </div>
    </div>
    `
})

export class ChartComponent implements AfterViewInit {
    @Input('title') title: any;
    @Input('type') type: any;
    @Input('chartData') chartData: any;
    @Input('chartId') chartId: any;
    chartArea: any;
    private socket: any;
    constructor(el: ElementRef) {
        console.log(el.nativeElement);
        this.socket = io.connect('127.0.0.1:8000');
        this.socket.on('connect', () => {
            console.log('ready to draw...');
            this.socket.emit('message', 'join room test');
        });
        this.socket.on('message', (data: any) => {
            data = JSON.parse(data);
            if(data.sender == '') {
                console.log(data.message);
                this.chartData = data.message;
                this.draw();
            }
        });
    }

    ngAfterViewInit() {
        this.draw();
    }

    draw = () => {
        //this.chartArea.nativeElement.innerHTML = '';
        $('#'+this.chartId).empty();
        if(this.type.toUpperCase() == 'DONUT') Morris.Donut({element: this.chartId, data: this.chartData});
    }
}
