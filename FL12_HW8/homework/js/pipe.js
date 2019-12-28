function pipe(){
    if(arguments.length > 0){
        var x = arguments[0];

        for(var i = 1, l = arguments.length; i < l; i++) {
        x = arguments[i](x); 
    }

        return x;
    }
}

function plusOne(x){
  return x + 1;
}

pipe(1, plusOne);
pipe(1, plusOne,plusOne);