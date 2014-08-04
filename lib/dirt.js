(function(){

  var path, isInt, isPositive, dirt;

  path = require('path');

  isInt = function(n){
    return typeof n== "number" && isFinite(n) && n%1===0;
  };

  isPositive = function(n){
    return (n > 0);
  };

  dirt = {

    up: function(num, filename){

      var chunks;

      if(!(isPositive(num) && isInt(num))) {
        var err;
        err = new Error();
        err.name = 'InvalidNumberError';
        err.message = 'Number of directories to traverse up must be 1 or greater.';
        throw err;
      }

      chunks = [];

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

      var filePath;

      filePath = this.up(2, 'dirt/test/fixtures/example.json');
      return require(filePath);

    }

  };

  module.exports = dirt;

})();
