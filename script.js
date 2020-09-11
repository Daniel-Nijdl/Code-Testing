let decimal = prompt(`Enter a decimal number between 0 and 255.`);
let decimalforbinary = decimal;

//binary

let binary128 = 0;
let binary64 = 0;
let binary32 = 0;
let binary16 = 0;
let binary8 = 0;
let binary4 = 0;
let binary2 = 0;
let binary1 = 0;
if(decimal >= 128)
{
    decimal -= 128;
    binary128=1;    
}
if(decimal >= 64)
{
    decimal -= 64;
    binary64 = 1;
}
if(decimal >= 32)
{
    decimal -= 32;
    binary32 = 1;
}
if(decimal >= 16)
{
    decimal -= 16;
    binary16 = 1;
}
if(decimal >= 8)
{
    decimal -= 8;
    binary8 = 1;
}
if(decimal >= 4)
{
    decimal -= 4;
    binary4 = 1;
}
if(decimal >= 2)
{
    decimal -= 2;
    binary2 = 1
}
if(decimal >= 1)
{
    decimal -= 1;
    binary1 = 1;
}

//hexidecimal

remainder1 = decimalforbinary % 16
decimal1  = decimalforbinary / 16
remainder2 = Math.floor(decimal1) % 16

if(remainder1 == 10){
    remainder1 = "A"
}
if(remainder1 == 11){
    remainder1 = "B"
}
if(remainder1 == 12){
    remainder1 = "C"
}
if(remainder1 == 13){
    remainder1 = "D"
}
if(remainder1 == 14){
    remainder1 = "E"
}
if(remainder1 == 15){
    remainder1 = "F"
}

if(remainder2 == 10){
    remainder2 = "A"
}
if(remainder2 == 11){
    remainder2 = "B"
}
if(remainder2 == 12){
    remainder2 = "C"
}
if(remainder2 == 13){
    remainder2 = "D"
}
if(remainder2 == 14){
    remainder2 = "E"
}
if(remainder2 == 15){
    remainder2 = "F"
}
if(remainder2 == 0){
    remainder2 = ""
}

console.log(`The binary of ${decimalforbinary} is ${binary128}${binary64}${binary32}${binary16} ${binary8}${binary4}${binary2}${binary1}`);

console.log(`The hexadecimal of ${decimalforbinary} is ${remainder2} ${remainder1}`)