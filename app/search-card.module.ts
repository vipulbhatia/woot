import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCardComponent } from './search-card.component.js';
import { InfoCardComponent } from './info-card.component.js';
import { ChartComponent } from './chart.component.js';

@NgModule({
    imports: [CommonModule],
    declarations: [InfoCardComponent, ChartComponent],
    exports: [SearchCardComponent]
})

export class SearchCardModule {

}
