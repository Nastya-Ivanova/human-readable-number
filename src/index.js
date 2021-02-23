module.exports = function toReadable (number) {
    let numbersObj = {
        0 : 'zero',
        1 : 'one',
        2 : 'two',
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 : 'six',
        7 : 'seven',
        8 : 'eight',
        9 : 'nine',
        10 : 'ten',
        11 : 'eleven',
        12 : 'twelve',
        13 : 'thirteen',
        14 : 'fourteen',
        15 : 'fifteen',
        16 : 'sixteen',
        17 : 'seventeen',
        18 : 'eighteen',
        19 : 'nineteen',
        20 : 'twenty',
        30 : 'thirty',
        40 : 'forty',
        50 : 'fifty',
        60 : 'sixty',
        70 : 'seventy',
        80 : 'eighty',
        90 : 'ninety',
        100 : 'hundred',
    }

    function getNumberToHundred(num){
        if(num >= 0 && num < 21){
            return numbersObj[num];
        }
        else if(num > 20 && num < 100){
            return num%10 ? numbersObj[Math.trunc(num/10)*10] + ' ' + numbersObj[num%10] : numbersObj[num];
        }
    }

    if(number < 100){
        return getNumberToHundred(number);
    }

    else{
        return number%100 ? numbersObj[Math.trunc(number/100)] + ' hundred' + ' ' + getNumberToHundred(number%100) : numbersObj[Math.trunc(number/100)] + ' hundred';
    }
}
