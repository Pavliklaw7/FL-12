function countNumbers(someText){

  let number_count = {};
  let arr = someText.split('').filter(a => !isNaN(a)).sort((a,b) => a-b);

  arr.forEach(num => {
    Object.keys(number_count).includes(num) ? number_count[num] +=1 : number_count[num] = 1;
  });

    return number_count;

}

countNumbers('123wqe-=+_849032');
