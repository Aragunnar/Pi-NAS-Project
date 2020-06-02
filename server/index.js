// Import packages
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Server start with listening calls for incoming requests
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

/*// Default route
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
// Write route
app.route('/write', (req, res) => res.send('Here you can write to the storage'));
// Read route
app.route('/read', (req, res) => res.send('Here yu can read the storage'));

app.use(express.static('public',options));*/