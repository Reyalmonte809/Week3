
let time  = 1700;
let greeting = "";

// const morning = 0 - 1000;
// const day = 1001 - 1699 ;
// const evening = 1700 - 2399;



if(time  <= 1000){
    greeting = "Good morning! "
}else if(time < 1699){
    greeting = "Good day! "
}else{
    greeting = "Good evening! "
}

console.log(greeting);

//complex_taxes.js

let singleFiler = 80000 ;
taxOut = ""

if(singleFiler <= 12000){
    taxOut ="5%"
}else if (singleFiler < 24999.99){
    taxOut = "10%"
}else if (singleFiler < 74999.99){
    taxOut = "15%"
}else{
    taxOut = "20%"
}

console.log(taxOut)

let jointFiler = 80000
taxesOut = ""

if(jointFiler <= 12000){
    taxesOut = "0"
}else if (jointFiler < 24999.99){
    taxesOut = "6%"
}else if (jointFiler  < 74999.99){
    taxesOut = "11%"
}else{
    taxesOut = "20%"
} 

console.log(taxesOut)