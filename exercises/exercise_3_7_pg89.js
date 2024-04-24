//pay_rules.js

//inputs
let payRate =  17.3;
let hoursWorked = 45;
//OUTPUT
let reason = "";
let grossPay = payRate * hoursWorked;
//constant
const LIMIT = 40;
//evaluate expression
const isOver = hoursWorked > LIMIT
const isUnder = hoursWorked < LIMIT
//make a decision
if(isOver) {
    reason = "IS OVER LIMIT"
    const extra = hoursWorked - LIMIT;
    const basePay = LIMIT * payRate;
    const bonusRate = 1.5 * payRate;
    const extraPay = extra * bonusRate;
    //replace default
    grossPay = basePay + extraPay
}else if(isUnder){
    reason = "IS UNDER LIMIT"
}else{
    reason = "IS EXACTLY AT LIMIT"
}
// final output
console.log(reason, grossPay);