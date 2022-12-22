export class Report {
	id?: number;
	problem: string;
	description: string;
	img_url: string;
	latitude: string | number;
	longitude: string | number;

	constructor() {
		this.problem = "";
		this.description = "";
		this.img_url = "";
		this.latitude = 0;
		this.longitude = 0;
	}
}
