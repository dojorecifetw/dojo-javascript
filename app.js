module.exports = {
  toArabic: function(romanNumeral) {
    var romans = {'I': 1, 'V': 5, 'X': 10};
    var result = 0;
    var resultRoman = romanNumeral.split('');
    var currentNumber = 0;
    resultRoman.forEach(function(char){
      if (currentNumber >= romans[char]){ 
        result += romans[char]; } 
      else {
        result -= romans[char];
      }
      currentNumber = romans[char];
    })
    return result;
  }
}