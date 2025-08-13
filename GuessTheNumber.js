let inpt = document.getElementById("input");            //1st input field

let btn = document.getElementById("btn");              //add event listener to button

let givennum = 37;                                     //Take one number as a secret number

btn.addEventListener('click',()=>{                     //after click, ()=> a value assign
let num = inpt.value;                                   //assign the value of input field to num
compare(num);                                           //call the compare function
})

function compare(num){                                              //function to compare the number
if(num>givennum){                                                    //if num is greater than given number, alert
    alert("your number is greater than the given number");             
}else if(num<givennum){                                               //if num is less than given number, alert
    alert("your number is less than the given number");
}else{                                                                  //if num is equal to given number, alert
    alert("congratulations, you guessed the number");
}
}