// CALCULATOR PROGRAM

const display = document.getElementById('display');

function appendToDisplay(input) {
  display.value += input;

}

function clearDisplay() {
  display.value = '';

}

function calculate(){
    // display.value = eval(display.value);
    // eval calculates the value 
    // However, eval is not a good practice to use.
    // Meaning it doesn't handle errors well like input being "3+ then '=' should give an error but it won't".
    // So we will use a try catch block to handle errors.

    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }

}