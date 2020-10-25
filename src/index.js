module.exports = function toReadable (number) {
    if(number === 0) return 'zero';
    let numberNames = {
        1:'one', 2:'two', 3:'three',  4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine',
        10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen',
        20:'twenty', 30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 80:'eighty', 90:'ninety'
      }
    
      let numberWord = number.toString();
    
      let result = '';
      let hundreds = '';
    
      if(numberWord.length === 3) {
        hundreds = numberNames[numberWord[0]] + ' hundred';
        numberWord = numberWord.slice(1);
      }
    
      if(numberNames[numberWord]) {
        result = hundreds + ' ' + numberNames[numberWord];
      } else {
        if (numberWord == '00') {
          return hundreds;
        }
        let tens = numberNames[numberWord[0]] ? numberNames[numberWord[0]*10] : '';
        let unit = numberNames[numberWord[1]];
    
        result = (tens != '') ? (hundreds + ' ' + tens + ' ' + unit) : (hundreds + ' ' + unit);
      }
    
      return result.trim();
}
