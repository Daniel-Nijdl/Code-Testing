let number = prompt("Type in a number");

let datatype = typeof(number);
let valuesign = Math.sign(number);
let fourtimesnum = (4 * (number));

if(valuesign == 1) {
    valuesign = "+";
    
}

if(valuesign == -1) {
    valuesign = "-";
    
}

if(valuesign == 0) {
    valuesign = "+";
    
}


console.log(`The data type of ${number} is ${datatype}`);
console.log(`The sign of ${number} is ${valuesign}`);
console.log(`Four times ${number} is ${fourtimesnum}`);