price = 10
size= "small"

switch (size){
    case "tiny":
        price -=4
        break;
    case "small":
        price -=2
        break;
    case "large":
        price +=2
        break;
    case "xl":
        price +=4
        break;
    default:
        break;
}

console.log(price);