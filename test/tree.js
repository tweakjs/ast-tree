/**
 * Module Dependencies
 */

var tree = require('..');
var fs = require('fs');
var read = fs.readFileSync;
var acorn = require('acorn');

/**
 * Read in the file
 */

var str = read(__dirname + '/source.js', 'utf8');
var nodes = acorn.parse(str);

/**
 * Create the tree
 */

var out = tree(nodes);
console.log(out);
