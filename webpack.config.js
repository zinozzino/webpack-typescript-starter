const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = require('./config/webpack.config.' + NODE_ENV + '.js');
