const path = require("node:path");
const express = require('express');
const pool = require('./config/database');
const expressSession = require('express-session');
const connectPgSimple = require('connect-pg-simple')(expressSession);
const passport = require('passport');

const indexRouter = require('./routes/indexRouter');
const messagesRouter = require("./routes/messagesRouter");
const usersRouter = require('./routes/usersRouter');

const app = express();

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

// Passport configuration
require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

// General Express middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Attach the user object to EJS locals variable
app.use((req, res, next ) => {
  res.locals.user = req.user || null;
  next();
})

// EJS configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Assigning routers
app.use('/', indexRouter);
app.use('/messages', messagesRouter);
app.use('/users', usersRouter);

// 404 handling
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error)
})

// General eror handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500);
  res.render('pages/error', {
    status: err.status || 500,
    message: err.message || 'Internal server error',
    details: err.details || []
  });
});

app.listen(3000, () => console.log('Server running on port 3000...'));
