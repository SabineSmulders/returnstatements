// A method is a function attached to an object  

// Checking if a number is big
const big = function(number1, number2){
    const sum = number1 + number2;
    if (sum > 100) { 
        return sum    
    }
    return "true";
};

const result = big(40,50)
console.log(result)

// Bouncer at a club 
const people = function(number1){
    if (number1 > 250)
    return "it's to busy now, come back later"
}

const people = function(number2){
    if (number2 <250)
    return "come in"
}

const age = function(number3){
    if (number3 < 18)
    return "this is a club for adults"
}

// Calculating the average
const age = function(number1, number2, number3, number4, number5){
    const sum = 0;
    const avg = 0;

    for(const num of age){
        sum+= num;
        avg = sum/age.lenghth;
    }
    return avg   
}
console.log(avg (1,4,7,2,9))


