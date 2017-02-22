import {Component, Input, OnChanges, OnInit} from '@angular/core'
import { DomSanitizer} from '@angular/platform-browser';

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

export class InfoCardComponent implements OnInit, OnChanges {
    @Input('data') data: any;
    @Input('type') type: any;
    public editable: any;
    public types: any;
    public srcUrlAlertCount: any;
    public srcUrlSeverityCount: any;
    public srcUrlAssignedIncidents: any;
    constructor(private sanitizer: DomSanitizer) {
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

    ngOnChanges() {
        this.srcUrlAlertCount = "http://165.136.136.14:8083/app/kibana#/visualize/edit/e9834090-f903-11e6-93a8-f7ff82880ccc?embed=true&_g=(refreshInterval:('$$hashKey':'object:1610',display:'30+seconds',pause:!f,section:1,value:30000),time:(from:now-24h,mode:quick,to:now))&_a=(filters:!(),linked:!f,query:(query_string:(analyze_wildcard:!t,query:'host:%22" + this.data.esm_name + "%22')),uiState:(vis:(legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(),schema:metric,type:count),(enabled:!t,id:'2',params:(customInterval:'2h',extended_bounds:(),field:timestamp,interval:auto,min_doc_count:1),schema:segment,type:date_histogram)),listeners:(),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,defaultYExtents:!f,drawLinesBetweenPoints:!t,interpolate:linear,legendPosition:right,radiusRatio:9,scale:linear,setYExtents:!f,showCircles:!t,times:!()),title:esm_name_alert_count,type:line))";
        this.srcUrlAlertCount = this.sanitizer.bypassSecurityTrustResourceUrl(this.srcUrlAlertCount);

        this.srcUrlSeverityCount = "http://165.136.136.14:8083/app/kibana#/visualize/edit/c0c5d750-f906-11e6-aaaa-03e57795c8db?embed=true&_g=(refreshInterval:('$$hashKey':'object:3057',display:'30+seconds',pause:!f,section:1,value:30000),time:(from:now-24h,interval:'1m',mode:quick,timezone:Asia%2FKolkata,to:now))&_a=(filters:!(),linked:!f,query:(query_string:(analyze_wildcard:!t,query:'host:%22" + this.data.esm_name + "%22')),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(),schema:metric,type:count),(enabled:!t,id:'2',params:(field:severity.keyword,order:desc,orderBy:'1',size:5),schema:segment,type:terms)),listeners:(),params:(addLegend:!t,addTooltip:!t,isDonut:!f,legendPosition:right),title:esm_name_severity_count,type:pie))";
        this.srcUrlSeverityCount = this.sanitizer.bypassSecurityTrustResourceUrl(this.srcUrlSeverityCount);

        this.srcUrlAssignedIncidents = "http://165.136.136.14:8083/app/kibana#/discover/78821d60-f928-11e6-a1a4-952b18bde246?embed=true&_g=(refreshInterval:('$$hashKey':'object:5143',display:'30+seconds',pause:!f,section:1,value:30000),time:(from:now-30d,interval:'1h',mode:quick,timezone:Asia%2FKolkata,to:now))&_a=(columns:!(host,severity,ticket,notification,tool,status),filters:!(),index:ec_alerts,interval:auto,query:(query_string:(analyze_wildcard:!t,query:'host:%22CHW-R-BAY-SFMH-TERM4%22+AND+status:%22assigned%22')),sort:!(timestamp,desc),uiState:(spy:(mode:(fill:!f,name:!n)),vis:(legendOpen:!f)))";
        this.srcUrlAssignedIncidents = this.sanitizer.bypassSecurityTrustResourceUrl(this.srcUrlAssignedIncidents);
    }
}
