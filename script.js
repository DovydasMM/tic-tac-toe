let array1 = ['-','-','-'];
let array2 = ['-','-','-'];
let array3 = ['-','-','-'];
let array4 = ['-','-','-'];
let array5 = ['-','-','-'];
let array6 = ['-','-','-'];
let array7 = ['-','-','-'];
let array8 = ['-','-','-'];

let firstRow = array1;
let secondRow = array2;
let thirdRow = array3; 
function showGameboard(){
    console.log(firstRow);
    console.log(secondRow);
    console.log(thirdRow);
}



function input1cell(input){
    array1[0] = input
    array4[0] = input
    array7[0] = input
    showGameboard()

}

function input2cell(input){
    array1[1] = input
    array5[0] = input
    showGameboard()

}

function input3cell(input){
    array1[2] = input
    array6[0] = input
    array8[0] = input
    showGameboard()

}

function input4cell(input){
    array2[0] = input
    array4[1] = input
    showGameboard()

}

function input5cell(input){
    array2[1] = input
    array5[1] = input
    array7[1] = input
    array8[1] = input
    showGameboard()

}

function input6cell(input){
    array2[2] = input
    array6[1] = input
    showGameboard()

}

function input7cell(input){
    array3[0] = input
    array4[2] = input
    array8[2] = input
    showGameboard()

}


function input8cell(input){
    array3[1] = input
    array5[2] = input
    showGameboard()

}

function input9cell(input){
    array3[2] = input
    array6[2] = input
    array7[2] = input
    showGameboard()

}

