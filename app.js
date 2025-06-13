var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var i18next = require('i18next');
var Backend = require('i18next-fs-backend');
var middleware = require('i18next-http-middleware');

var indexRouter = require('./routes/index');
var credentialsRouter = require('./routes/credentials');
var credentialbyidRouter = require('./routes/credential-by-id');
var uploadCredentialRouter = require('./routes/upload-credential');
var changeLanguageRouter = require('./routes/change-language');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// i18n configuration
i18next.use(Backend).use(middleware.LanguageDetector).init({
  // Config for loading translation files
  backend: {
    loadPath: path.join(process.cwd(), 'locales', '{{lng}}', '{{ns}}.json'),
  },
  // Config for identifying the active language for each request
  detection: {
    order: ['querystring', 'cookie'],
    caches: ['cookie'],
  },
  // Language to fall back to when no language is detected or requested is unavailable
  fallbackLng: 'en',
  // Preload the following languages into memory during startup
  preload: ['en', 'es'],
});

app.use(
  middleware.handle(i18next)
);

app.use('/', indexRouter);
app.use('/credentials', credentialsRouter);
app.use('/credential-by-id', credentialbyidRouter);
app.use('/upload-credential', uploadCredentialRouter);
app.use('/change-language', changeLanguageRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  const error = err;
  const errorMsg = err.message ? err.message : {}
  res.render('error', { error, errorMsg });
});

module.exports = app;
