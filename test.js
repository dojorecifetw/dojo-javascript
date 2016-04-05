var assert = require('assert');
var RomanNumeral = require('./app.js');

describe('RomanNumeral', function() {
  
    it('should return 1 when it receives I', function () {
      
      assert.equal(1, RomanNumeral.toArabic("I"));
    });
  
  it('should return 5 when it receives    V', function () {
      
      assert.equal(5, RomanNumeral.toArabic("V"));
    });
  
  it('should return 2 when it receives    II', function () {
      
      assert.equal(2, RomanNumeral.toArabic("II"));
    });
  
  it('should return 10 when it receives X', function() {
    
    assert.equal(10,
    RomanNumeral.toArabic("X"));
  })
  
  it('should return 4 when it receives IV', function(){
    assert.equal(4, 
    RomanNumeral.toArabic("IV"));
  })

});