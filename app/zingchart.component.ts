/**
 * Created by prodee on 8/11/16.
 */

import { Component, NgZone, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart } from './chart.model';

@Component({
	selector: 'zingchart',
	inputs: ['chart'],
	template: `<div id="{{chart.id}}"></div>`
})
export class ZingChart implements AfterViewInit, OnDestroy {
	chart: Chart

	constructor (private zone: NgZone) { }

	ngAfterViewInit () {
		this.zone.runOutsideAngular(() => zingchart.render(this.chart));
	}

	ngOnDestroy () {
		zingchart.exec(this.chart.id, 'destroy');
	}
}
