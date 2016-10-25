import {Component, OnViewInit} from '@angular/core'

@Component({
    selector: 'chart',
    template: `
    <div class="panel panel-default bootcards-chart">
        <div class="panel-heading">
            <h3 class="panel-title">Chart Card Heading</h3>
        </div>
        <div class="bootcards-chart-canvas" id="barChart"></div>
        <div class="panel-footer">
            <small>Built with Bootcards - Chart Card</small>
        </div>
    </div>
    `
})

export class ChartComponent implements OnViewInit {
    constructor() { }

    ngOnViewInit() {
        Morris.Bar({
          element: 'barChart',
          data: [
            {person: 'Guy Bardsley', sales: 550},
            {person: 'Adam Callahan', sales: 1500},
            {person: 'Arlo Geist', sales: 3750},
            {person: 'Sheila Hutchins', sales: 3500}
          ],
          xkey: 'person',
          ykeys: ['sales'],
          labels: ['Sales'],
          hideHover: 'auto'
        });
    }
}
