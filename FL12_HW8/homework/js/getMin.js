function getMin(...arr){
    
    return arr.sort((a,b) => a - b)[0];

}

getMin(5, 7, 0, -3);