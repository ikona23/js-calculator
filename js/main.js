function sendButton(val){
document.getElementById('num').value = val;
}
//The querySelector() method only returns the first element that matches the specified selectors. To return all the matches, use the querySelectorAll() method instead.
var input = document.querySelector("#mainInput")
var buttons = document.querySelectorAll("button.noBtn")

for (i = 0; i < buttons.length; i++) {
buttons[i].addEventListener("click", function(event) {
  input.value = input.value + event.currentTarget.value
})
}
// }

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
