var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'examen-2'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/LibreriasJavascript'
  },

  test: {
    root: rootPath,
    app: {
      name: 'examen-2'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/examen-2-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'examen-2'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/examen-2-production'
  }
};

module.exports = config[env];
