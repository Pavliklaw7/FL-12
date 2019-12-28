function isLeapYear(d){

    let date = new Date(d);
    let mess = 'Invalid Date';

    if(date instanceof Date && !isNaN(date)){

        let year = date.getFullYear();

        if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
            mess = year + ' is a leap year';
        }else{
            mess = year + ' is not a leap year';
        }
    }
    return mess;
}

isLeapYear();