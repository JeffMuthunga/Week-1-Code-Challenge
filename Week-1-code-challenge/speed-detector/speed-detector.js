// saving the input value from the prompt window
let speed = prompt("Please input the speed")
//saving the h1 element when we will be displaying output 
let element = document.getElementById('output')
// conditional statement for speed input and awarding of demerit points for every 5km/h
//above the speed limit (70km/h)
if(speed <0) {
    element.innerHTML = `Please input valid speed`
}
else if(speed < 70) {
    element.innerHTML =  `${speed}km/h is OK`
}
else{
    let points = Math.floor((speed - 70)/5)
    if (points < 12) {
        element.innerHTML = `Speed at ${speed}km/h, total demerit points = ${points}.`
    }
    else{
        element.innerHTML = `Speed at ${speed}km/h. LICENSE SUSPENDED!!!`
    }
}