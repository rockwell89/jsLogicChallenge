/* 
    Write a function that converts HEX to RGB. 
    Then Make that function auto-dect the formats 
    so that if you enter HEX color format it returns RGB 
    and if you enter RGB color format it returns HEX.

    HEX = RRGGBB
    (R, G, B)

    HEX to RGB conversion
        Break it into three pairs, one each for Red, Green and Blue
        multiply first number by 16, then add the second number of the pair
        A-F are 10-15
    RGB to HEX conversion
        Devide each number by 16.
        Giving you a whole number, 0-15, for x, and a remainder, y, represented as a whole number, 0-15, over 16.
        10-15 become A-F
            R/16 = x + y/16    ---->            HEX
            G/16 = x' + y'/16  ---->      x y x' y' x" y"
            B/16 = x" + y"/16  ---->

*/

let input = document.getElementById("input");
const convertBtn = document.getElementById("convert");
let currentnum = document.getElementById("currentnum");
let convertednum = document.getElementById("convertednum");

function inputLength() {
    //get text length of user input
    return input.value.length;
}


function rgbToHex(rgb){

    //remove "rgb" and "()" part of the string
    let rgbNums = rgb.replace(/.*?(\([^)]*\)).*?/g, "$1").replace('(','').replace(')','');
    // create an array of rgb numbers
    let rgbArrayNums = rgbNums.split(',');
    // divide each number by 16 and find its remainder to create hex numbers
    let red1 = parseInt(rgbArrayNums[0] / 16);
    let red2 = rgbArrayNums[0] % 16;
    let green1 = parseInt(rgbArrayNums[1] / 16);
    let green2 = rgbArrayNums[1] % 16;
    let blue1 = parseInt(rgbArrayNums[2] / 16);
    let blue2 = rgbArrayNums[2] % 16;
    // concatinate variables into an array 
    let hex = [red1, red2, green1, green2, blue1, blue2];
    // loop through array switching any numbers 10-15 to their corresponding hex letter
    let hexArrayNums = []; 
    for( item of hex ){
        switch (item) {
            case 10:
                item = "A";
                break;
            case 11:
                item = "B";
                break;
            case 12:
                item = "C";
                break;
            case 13:
                item = "D";
                break;
            case 14:
                item = "E";
                break;
            case 15:
                item = "F";
                break;
            default:
                item = item;
            } 
              // create new array and convert to numbers
            hexArrayNums.push(item);
        }

        document.getElementById("convertednum").innerHTML = "Some other Content";

    // Change current and converted
    document.getElementById("usernum").innerHTML = "Inputted RGB";
    document.getElementById("userconverted").innerHTML = "Converted To Hex";

    // clear contents of h3
    document.getElementById("currentnum").innerHTML = "";
    document.getElementById("convertednum").innerHTML = "";

    // display hex number
    convertednum.appendChild(document.createTextNode(`#${hexArrayNums[0]}${hexArrayNums[1]}${hexArrayNums[2]}${hexArrayNums[3]}${hexArrayNums[4]}${hexArrayNums[5]}`));
    // display user input rgb
    currentnum.appendChild(document.createTextNode(input.value));
    //clear input value after button is clicked
    input.value = "";
}

function hexToRgb(hex){
    
    // turn each number in the hex into an element of an array
    let hexArray = hex.split('');
    // check to see if there is a # and if there is, remove it
    if (hexArray[0] === "#"){
        hexArray.shift();
    }
    // loop through array to change any letter to its corresponding rgb number
    let hexArrayNums = [];
    for( item of hexArray ){
        switch (item) {
            case "a":
              item = 10;
              break;
            case "b":
              item = 11;
              break;
            case "c":
                item = 12;
                break;
            case "d":
                item = 13;
                break;
            case "e":
                item = 14;
                break;
            case "f":
                item = 15;
                break;
            default:
              item = item;
          } 
          // create new array and convert to numbers
        hexArrayNums.push(Number(item));
    }
    // for each group multiply first number by 16 and add that to the second number to get RGB numbers
    let red = (16 * hexArrayNums[0]) + hexArrayNums[1];
    let green = (16 * hexArrayNums[2]) + hexArrayNums[3];
    let blue = (16 * hexArrayNums[4]) + hexArrayNums[5];

    // Change current and converted
    document.getElementById("usernum").innerHTML = "Inputted Hex";
    document.getElementById("userconverted").innerHTML = "Converted To RGB";

    
    // clear contents of h3
    document.getElementById("currentnum").innerHTML = "";
    document.getElementById("convertednum").innerHTML = "";

    // display RGB(red, green, blue)
    convertednum.appendChild(document.createTextNode(`RGB(${red}, ${green}, ${blue})`));
    // display user input Hex
    currentnum.appendChild(document.createTextNode(input.value));
    //clear input value after button is clicked
    input.value = "";
}

function convert(rgbOrHex){
    if(rgbOrHex.includes(',') ){
        rgbToHex(rgbOrHex);
    }
    else{
        hexToRgb(rgbOrHex);
    }
}


function convertOnClick () {
    //check to see if text is in input
    if(inputLength() > 5){
        //add input to list
        convert(input.value);
    }
}

function convertOnKeypress(event) {
    //check to see if text is in input AND the enter key was pressed
    if(inputLength() > 5 && event.keyCode === 13){
        //add input to list
        convert(input.value);
    }
}

    //when button is clicked, run function
convertBtn.addEventListener("click", convertOnClick);
    //when Enter key is pressed, run function
input.addEventListener("keypress", convertOnKeypress);