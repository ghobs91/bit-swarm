const express = require('express');
const app = express();
const port = 3000;
const TorrentSearchApi = require('torrent-search-api');

TorrentSearchApi.enableProvider('ThePirateBay');


var torrentSearch = async function(query) { 
    const torrents = await TorrentSearchApi.search(query);
    console.log('torrents: ', torrents);
    return torrents;
  }

app.get('/api/torrentsearch/', (req, res) => {
    console.log('the req.query.query is: ', req.query.query)
    const response = torrentSearch(req.query.query);
    res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app