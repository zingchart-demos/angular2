/**
 * Created by prodee on 8/11/16.
 */

export class Chart {
	id: String;
	data: Object;
	height: any;
	width: any;

	constructor (config: Object) {
		this.id = config.id;
		this.data = config.data;
		this.height = config.height || 400;
		this.width = config.width || '100%';
	}
}