let num = process.argv.slice(2).map(Number);
function getEven(num){
    console.log("Even Numbers: ")
    for(let i=0;i<num.length;i++){
        if(num[i]%2==0){
            console.log(num[i]);
        }
    }
}
function getEvenIndex(num){
    console.log("Even Index Numbers: ")
    for(let i=0;i<num.length;i++){
        if(i%2==0){
            console.log(num[i]);
        }
    }
}
function primeNumbers(num){
    let s = true;
    let sum = 0;
    for(let i=0;i<num.length;i++){
        s = true;
        for(let j=2;j<=(num[i]/2);j++){
            if(num[i]%j==0){
             s=false;
             break;
            }
        }
    if(s == true && num[i]!=1){
    sum += num[i];
    }
    }
    console.log("Prime Number Addition: ", sum);
}
getEven(num);
getEvenIndex(num);
primeNumbers(num);