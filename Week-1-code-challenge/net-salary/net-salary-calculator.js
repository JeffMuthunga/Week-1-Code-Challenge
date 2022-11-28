
// calculates nssf contributions, there is a limit for above 18000
// In general nssf rate is 6% upto 18000
function nssf(salary){
    if (salary< 18000){
        return salary * 0.06
    }
    else {
        return 1080
    }
}

// Calculates nhif contributions, its consists of fixed rates
// from a kenyan financial website 
function nhif(x){
    if (x>0 && x<6000){
        return 150
    } else if(x<8000){
        return 300
    } else if(x<12000){
        return 400
    } else if(x<15000){
        return 500
    } else if(x<20000){
        return 600
    } else if(x<25000){
        return 750
    } else if(x<30000){
        return 850
    } else if(x<35000){
        return 900
    } else if(x<40000){
        return 950
    } else if(x<45000){
        return 1000
    } else if(x<50000){
        return 1100
    } else if(x<60000){
        return 1200
    } else if(x<70000){
        return 1300
    } else if(x<80000){
        return 1400
    } else if(x<90000){
        return 1500
    } else if(x<100000){
        return 1600
    }else {
        return 1700
    }
}
// calculates paye contributions.
//between salary 0 and 24000 paye = 0 due to a personal relief of 2400 
function paye(x) {
    if(x>0 && x<= 24000){
        return 0
    //for the next 8233 rate is 25%
    } else if(x<= 32333){
        return (x-24000) * 0.25
    }else {
        //everything after 32333 rate is 30%
        return ((x-32333) * 0.3)+ 2083
    }
    
}
// calculates net salary
function netSalary(salary, benefits){
    // calling the functions
    const nssfDed = nssf(salary)
    const nhifDed = nhif(salary)
    const payee = paye(salary)
// to get accurate payee it has to be deducted from 
// insurance relief of 15% from the users total nhif 
//deductions
//However payee below 24000 is 0 hence should not undergo
// this as it will lead to payee being a negative no.
    let payeDed
    if(payee>0) {
        payeDed = payee - (nhifDed *0.15)
    } else {
        payeDed = 0 
    }
    //netpay is salary+benefits  - the deductions we did
    let netPay = (salary + benefits) - 
    (nssfDed+ nhifDed+ payeDed)
   

//returns an array of individual calculations
    return [nssfDed, nhifDed, payeDed, netPay ]
}
// is to check whether the logic is working
console.log(netSalary(20000,15000))
debugger
//prompts for input and storing them in a variable 

let num1 = prompt("Enter your SALARY")
let num2 = prompt("Enter your benefits")
// assigning our h1 html element a variable to display output 
let element = document.getElementById('hh1')

// calling the function using our variables
const output = netSalary(num1, num2)

//adding the return values to h1 element using innerHTML

element.innerHTML = `NSSF deductions = ${output[0]} 
<br> NHIF deductions = ${output[1]}<br> PAYE = ${output[2]} <br> NETPAY = ${output[3]} `
