const path = require("node:path");
const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter');
const pool = require('./config/database');
const expressSession = require('express-session');
const connectPgSimple = require('connect-pg-simple')(expressSession);
const passport = require('passport');

const pgSession = new connectPgSimple({
    pool,
    tableName: 'session'
  });

app.use(expressSession({
    store: pgSession,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }
}));
require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use((req, res, next ) => {
  res.locals.user = req.user || null;
  next();
})
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/', indexRouter);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error)
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500);
  res.render('pages/error', {
    status: err.status || 500,
    message: err.message
  });
});

app.listen(3000, () => console.log('Server running on port 3000...'));
