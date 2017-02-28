import { Component, Input, OnInit, OnChanges } from '@angular/core'
import { DomSanitizer} from '@angular/platform-browser';
import { DataService } from './data.service'

@Component({
    selector: 'kibana-visual',
    template: `
        <iframe [src]="srcUrl" height="100%" width="100%"></iframe>
    `
})

export class KibanaVisualComponent implements OnInit, OnChanges {
    @Input('type') type: any;
    @Input('esm_name') esm_name: any;
    public srcUrl: any;
    public query: string;
    constructor(private sanitizer: DomSanitizer, public _dataService: DataService) { }

    ngOnInit() {
        this.getSrcUrls();
    }

    ngOnChanges() {
        this.getSrcUrls();
    }

    getSrcUrls = () => {
        this.query = 'host:%22' + this.esm_name + '%22+AND+account:%22' + this._dataService._factoryService.getNsp() + '%22';
        if(this.type == 'assigned-incidents') {
            this.srcUrl = "http://165.136.136.14:8083/app/kibana#/visualize/edit/73cc87a0-fab4-11e6-93a8-3b13f8f116b8?embed=true&_g=(filters:!(),refreshInterval:('$$hashKey':'object:8618',display:'30%20seconds',pause:!f,section:1,value:30000),time:(from:now-6M,mode:quick,to:now))&_a=(filters:!(),linked:!f,query:(query_string:(analyze_wildcard:!t,query:'" + this.query + "+AND+status:%22assigned%22')),uiState:(vis:(params:(sort:(columnIndex:3,direction:desc)))),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Created%20On',field:timestamp),schema:metric,type:max),(enabled:!t,id:'2',params:(customLabel:Ticket,field:ticket.keyword,order:desc,orderBy:'1',size:100),schema:bucket,type:terms),(enabled:!t,id:'3',params:(customLabel:'Notification%20Text',field:notification.keyword,order:desc,orderBy:'1',size:100),schema:bucket,type:terms),(enabled:!t,id:'4',params:(customLabel:Tool,field:tool.keyword,order:desc,orderBy:'1',size:100),schema:bucket,type:terms)),listeners:(),params:(perPage:10,showMeticsAtAllLevels:!f,showPartialRows:!f,showTotal:!f,sort:(columnIndex:!n,direction:!n),totalFunc:sum),title:'Open%20Incidents',type:table))";
        } else if(this.type == 'severity-count') {
            this.srcUrl = "http://165.136.136.14:8083/app/kibana#/visualize/edit/c0c5d750-f906-11e6-aaaa-03e57795c8db?embed=true&_g=(refreshInterval:('$$hashKey':'object:1689',display:'30+seconds',pause:!f,section:1,value:30000),time:(from:now-7d,mode:quick,to:now))&_a=(filters:!(),linked:!f,query:(query_string:(analyze_wildcard:!t,query:'" + this.query + "')),uiState:(vis:(legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(),schema:metric,type:count),(enabled:!t,id:'2',params:(field:severity.keyword,order:desc,orderBy:'1',size:5),schema:segment,type:terms)),listeners:(),params:(addLegend:!t,addTooltip:!t,isDonut:!f,legendPosition:right),title:esm_name_severity_count,type:pie))";
        } else if(this.type == 'incidents-by-severity') {
            this.srcUrl = "http://165.136.136.14:8083/app/kibana#/visualize/edit/31624530-f9a6-11e6-b905-07fa954532db?embed=true&_g=(refreshInterval:('$$hashKey':'object:1689',display:'30+seconds',pause:!f,section:1,value:30000),time:(from:now-7d,mode:quick,to:now))&_a=(filters:!(),linked:!f,query:(query_string:(analyze_wildcard:!t,query:'" + this.query + "')),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(),schema:metric,type:count),(enabled:!t,id:'2',params:(customInterval:'2h',extended_bounds:(),field:timestamp,interval:auto,min_doc_count:1),schema:segment,type:date_histogram),(enabled:!t,id:'3',params:(field:severity.keyword,order:desc,orderBy:'1',size:5),schema:group,type:terms)),listeners:(),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,defaultYExtents:!f,interpolate:linear,legendPosition:right,mode:stacked,scale:linear,setYExtents:!f,times:!()),title:'All+Incidents+by+Severity',type:area))";
        }
        this.srcUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.srcUrl);
    }
}
