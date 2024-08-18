const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define the API endpoint
app.get('/api/fetchData', async (req, res) => {
    try {
        const url = 'https://hianime.p.rapidapi.com/anime/servers?episodeId=12345';
        const response = await axios.get(url, {
            headers: {
                'x-rapidapi-key': '1c1438c1d9msh979fa7f217b0005p186e0fjsn5902434cfcb1',
                'x-rapidapi-host': 'hianime.p.rapidapi.com',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
