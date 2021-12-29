module.exports = function toReadable(number) {

        let a = [
          '', 'one', 'two', 'three', 'four',
          'five', 'six', 'seven', 'eight', 'nine',
          'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
          'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
        ];
        let b = [
          '', '', 'twenty', 'thirty', 'forty',
          'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
        ];
        let g = [
          '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion',
          'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
        ];

        const numToArr = String(number).split('').reverse();

        if(number === 0) return 'zero';

        if(number%100 === 0) {
            return a[numToArr[2]] + ' hundred';
        }

        return [
                  Number(numToArr[2]) === 0 ? '' : numToArr[2] ? a[numToArr[2]] + ' hundred ' : '',
                  Number(numToArr[0]) === 0 ? b[numToArr[1]] : Number(numToArr[1]) === 1 ? '' :
                  Number(numToArr[1]) === 0 ? '' : b[numToArr[1]] ? b[numToArr[1]] + ' ' : '',
                  a[numToArr[1]+numToArr[0]] || a[numToArr[0]]
                ].join('');
};

