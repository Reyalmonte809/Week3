
let time  = 1700;
let greeting = "";

const morning = 0 - 1000;
const day = 1001 - 1699 ;
const evening = 1700 - 2399;



if(morning  <= 1000){
    greeting = "Good morning! "
}else if(day <1001 < 1699){
    greeting = "Good day! "
}else{
    greeting = "Good evening! "
}

console.log(greeting);