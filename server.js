const http = require('https');

const options = {
	method: 'GET',
	hostname: 'hianime.p.rapidapi.com',
	port: null,
	path: '/anime/episode-srcs?id=steinsgate-3%3Fep%3D230&server=vidstreaming&category=dub',
	headers: {
		'x-rapidapi-key': '1c1438c1d9msh979fa7f217b0005p186e0fjsn5902434cfcb1',
		'x-rapidapi-host': 'hianime.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();