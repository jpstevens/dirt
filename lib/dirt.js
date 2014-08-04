var path = require('path');

var isInt = function(n){
  return typeof n== "number" && isFinite(n) && n%1===0;
};
var isPositive = function(n){
  return (n > 0);
};

var dirt = {
  up: function(num, filename){
    if(!(isPositive(num) && isInt(num))) {
      var err = new Error();
      err.name = 'InvalidNumberError';
      err.message = 'Number of directories to traverse up must be 1 or greater.';
      throw err;
    }
    var chunks = [];
    for(var i=0; i<num; i++) {
      chunks.push('..');
    }
    if(filename) {
      filename = filename.replace(/^(\.)?\//, '');
      chunks.push(filename);
    }
    return chunks.join('/');
  },

  require: function(num, filename) {
    var filePath = this.up(2, 'dirt/test/fixtures/example.json');
    return require(filePath);
  }
};

module.exports = dirt;
