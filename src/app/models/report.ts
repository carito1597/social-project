export class Report {
	id?: number;
	problem: string;
	description: string;
	latitude: string | number;
	longitude: string | number;

	constructor() {
		this.problem = "";
		this.description = "";
		this.latitude = 0;
		this.longitude = 0;
	}
}
