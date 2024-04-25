//dress - inputs? mood feeling, weather/temp, output: color, layers, material
mood =  "good" //or bad
weather = "good"
destination = "park" // bank or gym

//output with defaults
color = "black"
layer = "1"
material = "cotton"

if(mood == "good"){
    // KEEP BLACK
}else {
    color = "blue or pink"
}

if(weather == "bad"){
    layers++ //increase by one
}else{
    material = "silk" //something light 
}

if (destination == "work"){
    material = "knit"
    layer++
} 

console.log(color, layer, material)