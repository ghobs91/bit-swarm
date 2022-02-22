const express = require('express');
const app = express();
const TorrentSearchApi = require('torrent-search-api');
const port = process.env.PORT || 3000;

TorrentSearchApi.enableProvider('ThePirateBay');


var torrentSearch = async function(query) { 
    const torrents = await TorrentSearchApi.search(query);
    console.log('torrents: ', torrents);
    return torrents;
  }

app.get('/', (req, res) => res.send('Home Page Route'));

app.get('/api/torrentsearch/', (req, res) => {
    console.log('the req.query.query is: ', req.query.query)
    const response = torrentSearch(req.query.query);
    res.send(response)
})

app.get('/about', (req, res) => res.send('About Page Route'));
app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));
app.get('/contact', (req, res) => res.send('Contact Page Route'));

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));

module.exports = app