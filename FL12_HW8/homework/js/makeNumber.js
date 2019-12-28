function makeNumber(someText) {

    return someText.split('').filter(a => !isNaN(a)).join('');

}

makeNumber('jk3890fe3489');