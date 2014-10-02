(function(){

  var dirt, path;

  path = require('path');

  dirt = {

    up: function(num, filename){
      var chunks = [];

      if(!(isPositive(num) && isInt(num))) {
        var err;
        err = new Error();
        err.name = 'InvalidNumberError';
        err.message = 'Number of directories to traverse up must be 1 or greater.';
        throw err;
      }

      for(var i=0; i<num; i++) {
        chunks.push('..');
      }

      if(filename) {
        filename = filename.replace(/^(\.)?\//, '');
        chunks.push(filename);
      }

      return chunks.join('/');
    },

    require: function(num, fileName) {
      var filePath;
      filePath = this.up(num, fileName);
      return require(filePath);
    }

  };

  module.exports = dirt;

  function isInt(n){
    return typeof n== "number" && isFinite(n) && n%1===0;
  };

  function isPositive(n){
    return (n > 0);
  };

})();
