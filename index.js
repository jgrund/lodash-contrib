var underscorePath = require.resolve('underscore');
var lodashPath = require.resolve('lodash/dist/lodash');
var cache = require.cache;
var lodash = require(lodash);

cache[underscorePath] = cache[lodashPath];

module.exports = require('underscore-contrib');
