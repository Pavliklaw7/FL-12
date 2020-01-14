function convert(...arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== String(arr[i])) {
            arr[i] = String(arr[i]);
        } else if (arr[i] !== isNaN) {
            arr[i] = Number(arr[i]);
        }
    } return arr;
}


function executeforEach(arr, func) {
    for (let el of arr) {
        func(el);
    }
}


function mapArray(arr, callback) {
    let newArr = [];
    executeforEach(arr, el => newArr.push(callback(+el)));
    return newArr
}


function fillterArray(arr, filter) {
    let newArr = [];
    executeforEach(arr, el => filter(el) ? newArr.push(el) : 0);
    return newArr;
}


function flipOver(str) {
    let flippedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        flippedStr += str[i];
    }
    return flippedStr;
}


function makeListFromRange(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}


function getArayOfKeys(objectsArr, KeyName) {
    let newArr = [];
    executeforEach(objectsArr, objectEl => newArr.push(objectEl[KeyName]));
    return newArr;
}


function substitute(arr) {
    let minNum = 30;
    return mapArray(arr, el => el < minNum ? '*' : el);
}


function getPastDate(date, days) {
    const day = 24,
        hour = 60,
        milliseconds = 60000,
        millisAgo = day * days * hour * milliseconds,
        pastDay = new Date(date.getTime() - millisAgo);
    return pastDay.getDate();
}


function formatDate(date) {

    let currentDate = new Date(),
        timeStrFormat = -2;
    const year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hours = ('0' + date.getHours()).substr(timeStrFormat),
        mm = ('0' + date.getMinutes()).substr(timeStrFormat),
        formattedDate = `${year}/${month}/${day} ${hours}:${mm}`;
    
    if (date === new Date()) {
        date = currentDate;
    }
    return formattedDate;
}