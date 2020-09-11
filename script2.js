let decimalnum = prompt(`Enter a decimal number between 0 and 255.`);

rem1 = decimalnum % 16;
dec1 = decimalnum / 16;
rem2 = Math.floor(dec1) % 16

//remainder1

if(rem1 == 10) {
    rem1 = "A";

}

if(rem1 == 11) {
    rem1 = "B";
    
}

if(rem1 == 12) {
    rem1 = "C";
    
}

if(rem1 == 13) {
    rem1 = "D";
    
}

if(rem1 == 14) {
    rem1 = "E";
    
}

if(rem1 == 15) {
    rem1 = "F";
    
}

//remainder 2

if(rem2 == 10) {
    rem2 = "A";
    
}

if(rem2 == 11) {
    rem2 = "B";
    
}

if(rem2 == 12) {
    rem2 = "C";
    
}

if(rem2 == 13) {
    rem2 = "D";
    
}

if(rem2 == 14) {
    rem2 = "E";
    
}

if(rem2 == 15) {
    rem2 = "F";
    
}

console.log(`The hexadecimal of ${decimalnum} is ${rem2} ${rem1}`);