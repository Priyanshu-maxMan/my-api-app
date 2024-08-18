const fetch = require('node-fetch');

const url = 'https://hianime.p.rapidapi.com/anime/episode-srcs?id=steinsgate-3%3Fep%3D230&server=vidstreaming&category=dub';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '1c1438c1d9msh979fa7f217b0005p186e0fjsn5902434cfcb1',
    'x-rapidapi-host': 'hianime.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}