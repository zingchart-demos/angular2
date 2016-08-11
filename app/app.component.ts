/**
 * Created by prodee on 8/11/16.
 */

import { Component } from '@angular/core';

import { ZingChart } from './zingchart.component';
import { Chart } from './chart.model';

@Component({
	selector: 'my-app',
	template: '<zingchart *ngFor="let chart of charts" [chart]="chart"></zingchart>',
	directives: [ZingChart]
})
export class AppComponent {
	charts: Chart[];

	constructor () {
		this.charts = [
			{
				id: 'chart-1',
				data: {
					type: 'bar',
					series: [{
						values: [2, 3, 4, 5, 3, 3, 2]
					}]
				},
				height: 300
			}
		]
	}
}
