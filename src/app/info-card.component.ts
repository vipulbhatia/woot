import {Component, Input, ViewChild, ElementRef, AfterViewInit, OnChanges, OnInit} from '@angular/core'

@Component({
    selector: 'info-card',
    templateUrl: './info-card.html'
    /*template: `
        <div class="panel panel-default">
            <div class="panel-heading clearfix">
                <div class="panel-title pull-left">
                    {{data.esm_name}}
                </div>
                <div class="pull-right">
                    <a class="btn btn-primary" (click)="makeEditable()">
                        <i class="gyphicon glyphicon-pencil"></i>
                        <span>Edit</span>
                    </a>
                </div>
            </div>
            <div class="table-responsive">
                <table #md class="table table-hover">
                    <!-- content goes here -->
                </table>
            </div>
        </div>
    `*/
})

export class InfoCardComponent implements OnInit {
    @Input('data') data: any;
    @Input('type') type: any;
    public editable: any;
    public types: any;
    constructor() {
        this.editable = false;
        this.types = {
            information: false,
            configurable: false
        }
    }

    makeEditable = () => {
        this.editable = true;
        //this.renderView();
    }

    ngOnInit() {
        for(var i in this.types) {
            this.types[i] = (i == this.type) ? true : false;
        }
        console.log('info-card: information:', this.types.information, this.type);
    }
}
