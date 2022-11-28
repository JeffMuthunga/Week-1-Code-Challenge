//prompt that lets users input marks in the browser and saves it in mark variable 
let mark = prompt("Input Student Marks")
//finds h1 element in order to append the grade
let record = document.getElementById('grade')

// conditional statements to rank the grade from the input
    if(mark >100 || mark < 0){
        record.innerHTML = `Wrong input`
        alert("Wrong Input")
        
        }
    else if(mark > 79){
        record.innerHTML = `${mark} = Grade A`
        alert(` ${mark} = Grade A`)
        
        }
    else if(mark >60){
        record.innerHTML = `${mark} = Grade B`
            alert(`${mark} = Grade B`)
            
        }
    else if(mark>49){
        record.innerHTML = `${mark} = Grade C`
            alert(`${mark} = Grade C`)
            
        }
    else if(mark > 40){
        record.innerHTML = `${mark} = Grade D`
            alert(`${mark} = Grade D`)
            
        }
    else {
        record.innerHTML = `${mark} = Grade E`
        alert(`${mark} = Grade E`)
        
        }
