var assert = require('assert');
var Song = require('./app.js');

describe('Song', function() {
  
    it('should return Adele Song when it call hello method', function () {
      
      assert.equal("it's me.", Song.hello());
    });

});