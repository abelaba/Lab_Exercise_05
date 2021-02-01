
const add_button = document.querySelector("#add")
const subtract_button = document.querySelector("#sub")
const multiply_button = document.querySelector("#multiply")
const divide_button = document.querySelector("#divide")
const display = document.querySelector(".display")

function check() {
  while(display.hasChildNodes()){
    display.removeChild(display.children[0]);
  }

}



function add_fun() {
  check()

  const add_input = document.createElement("input");
  display.appendChild(add_input);


  const add_input_button = document.createElement("button");
  add_input_button.className = "btn btn-secondary";
  add_input_button.innerText = "Add";
  var myarray = [];



  display.appendChild(add_input_button)
  add_input_button.addEventListener('click',function(){
    myarray.push(add_input.value);
    add_input.value = "";



  })

  const submit_input_button = document.createElement("button");
  submit_input_button.innerText = "Submit";
  submit_input_button.className = "btn btn-success";
  display.appendChild(submit_input_button)
  const answer = document.createElement("p");
  display.appendChild(answer);
  submit_input_button.addEventListener('click',function(){

    answer.innerText = sum(myarray);

  })


}

function multi_fun() {
  check()
  const add_input = document.createElement("input");
  display.appendChild(add_input);


  const add_input_button = document.createElement("button");
  add_input_button.className = "btn btn-secondary";
  add_input_button.innerText = "Add";
  var myarray = [];



  display.appendChild(add_input_button)
  add_input_button.addEventListener('click',function(){
    myarray.push(add_input.value);
    add_input.value = "";



  })

  const submit_input_button = document.createElement("button");
  submit_input_button.innerText = "Submit";
  submit_input_button.className = "btn btn-success";
  display.appendChild(submit_input_button);
  const answer = document.createElement("p");
  display.appendChild(answer);
  submit_input_button.addEventListener('click',function(){

    answer.innerText = product(myarray);

  })


}

function subtract_function() {
  check()
  const add_input1 = document.createElement("input");
  display.appendChild(add_input1);
  const add_input2 = document.createElement("input");
  display.appendChild(add_input2);
  const submit_input_button = document.createElement("button");
  submit_input_button.className = "btn btn-success";
  submit_input_button.innerText = "Submit";
  const answer = document.createElement("p");
  display.appendChild(answer);
  submit_input_button.addEventListener('click',function(){

    answer.innerText = sub(add_input1.value,add_input2.value);


  })
  display.appendChild(submit_input_button)


}

function divide_function() {
  check()
  const add_input1 = document.createElement("input");
  display.appendChild(add_input1);
  const add_input2 = document.createElement("input");
  display.appendChild(add_input2);
  const submit_input_button = document.createElement("button");
  submit_input_button.className = "btn btn-success";
  submit_input_button.innerText = "Submit";
  const answer = document.createElement("p");
  display.appendChild(answer);
  submit_input_button.addEventListener('click',function(){

    answer.innerText = div(add_input1.value,add_input2.value);


  })
  display.appendChild(submit_input_button)


}



add_button.addEventListener('click',add_fun)
multiply_button.addEventListener('click',multi_fun)
subtract_button.addEventListener('click',subtract_function)
divide_button.addEventListener('click',divide_function)




function sum(array){

  var a = 0;
  array.forEach(function(member) {
     a = parseInt(member) + a;
  });

  return  "Answer is : " +  a;

}

function product(array){

  var a = 1;
  array.forEach(function(member) {
     a = parseInt(member) * a;
  });

  return "Answer is : " +  a;

}

function sub(x,y){
    return  "Answer is : " + x - y;
}

function div(x,y){
    if (y>0){
        return  "Answer is : " +  x / y;
    }
    else{
        return "Division by zero";
    }
}
