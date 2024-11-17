const path = require("node:path");
const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/', indexRouter);
app.listen(3000, () => console.log('Server running on port 3000...'));
