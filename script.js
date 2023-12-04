// Question 1
function evenNumber(i){
    if(i%2 === 0){
      return true
    }
    else{
  
        return false
    }
}
console.log(evenNumber(4));

// Question 2
function myPrint(n1, n2){
   let n = n1
    while(n1<=n2){
    console.log('n1 to n2', n)
     n++;
     if(n>n2) break;
}
  }
myPrint(8, 15)

// Question 3
function mySum(x, y){
    let Sum = 0
    for(let i=y; i>=x; i--){
      Sum += i;
    }
    return Sum;
}
const add = mySum(6,12)
console.log(add)