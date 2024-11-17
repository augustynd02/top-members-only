const path = require("node:path");
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', (req, res) => res.send('test'));

app.listen(3000, () => console.log('Server running on port 3000...'));
