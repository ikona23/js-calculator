
var numbers = "0123456789"
var add_operator = "+"
var equal_operator = "="
var AC_operator = "AC"
var prev_numbers_clicked = ""
var is_prev_clicked_number = true
var cur_numbers_clicked = ""
var is_equal_just_clicked = false
var result = 0
function sendButton(event){
  var element_clicked = event.target;
  var value = event.target.value
  var element_result = document.getElementById('num');
  if (numbers.includes(value)) {
    if(is_equal_just_clicked) {
      element_result.value = ""
      is_equal_just_clicked = false
    }
    if (is_prev_clicked_number) {
      prev_numbers_clicked += value
    } else {
      cur_numbers_clicked += value
    }
  } else if (add_operator.includes(value)){
    is_prev_clicked_number = false
  } else if (equal_operator.includes(value)) {
    result = parseInt(prev_numbers_clicked) + parseInt(cur_numbers_clicked)
    element_result.value = result
    is_prev_clicked_number = true
    prev_numbers_clicked = ""
    cur_numbers_clicked = ""
    is_equal_just_clicked = true
  } else if (AC_operator.includes(value)) {
    element_result.value = 0
    is_prev_clicked_number = true
    prev_numbers_clicked = ""
    cur_numbers_clicked = ""
  }

  if(!equal_operator.includes(value) && !AC_operator.includes(value)) {
    element_result.value += element_clicked.value;
  }

}







// function combine() {
//   var comb = eval(document.form.result.value)

//   document.form.result.value = comb;
// }

// function goEquals() {
//     document.form.result.value += "=";
// }

// function goMinus() {
//   document.form.output.value += "-";
// }

// function goDivide() {

// }

// function goMulti() {

// }

// function no1() {
//   document.form.result.value += "1";
// }
// function no2() {
//   document.form.result.value += "2";
// }
// function no3() {
//   document.form.result.value += "3";
// }
// function no4() {
//   document.form.result.value += "4";
// }
// function zero() {
//   document.form.result.value += "0";
// }
// function plus() {
//   document.form.result.value += "+";
// }
