import { ajax } from 'jquery';

export default {
	createGuide(data) {
		return ajax({
			url: "http://localhost:3500/api/styleguide/create",
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json',
				'Accept' : 'application/json'
			},
			data: JSON.stringify(data)
		})
	},

	getGuides() {
		return ajax({
			url: "http://localhost:3500/api/styleguide/get",
			method: 'GET',
			headers: {
				'Content-Type' : 'application/json',
				'Accept' : 'application/json'
			}
		})
	},
	
	getFonts() {
		const apiKey = 'AIzaSyDKawQ2rl2rHSbYIhlAWZnsr_dfb3vGLnk';
		return ajax({
			url: `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`,
			method: 'GET',
			dataType: 'JSON',
		})
	}
	
}