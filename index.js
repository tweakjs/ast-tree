/**
 * Module Dependencies
 */

var colors = require('colors');
var walk = require('walk-ast');

/**
 * Expose `tree`
 */

module.exports = tree;

/**
 * Create a tree for debugging
 *
 * @param {Objects} nodes
 * @return {String}
 * @api public
 */

function tree(nodes) {
  var str = [];

  walk(nodes, function(node) {
    var line = [];
    var d = depth(node);
    var prefix = repeat('-', d);

    line.push(prefix.grey);
    line.push(node.type);

    var val = node.name || node.raw;
    if (val) line.push(':', val.blue);

    str[str.length] = line.join(' ');
  });

  return str.join('\n');
}

/**
 * Depth
 */

function depth(node) {
  var d = 0;
  var parent = node.parentNode;

  while(parent) {
    parent = parent.parentNode;
    ++d;
  }
  return d;
}

/**
 * Repeat a string `n` times
 *
 * @param {String} str
 * @param {Number} n
 * @return {String}
 */

function repeat(str, n) {
  return new Array(+n + 1).join(str);
}
