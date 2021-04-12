function init(){
//add your javascript between these two lines of code
function listenerText(){
var text = document.getElementById("entryinput");
var displayoutputtext = document.getElementById("textoutput");
  alert("Angie Iturbide: " + text.value);
  output.innerHTML = text.value;
}
var textbox= document.getElementById("entrybutton");
textbox.addEventListener('click', listenerText);
}
window.addEventListener('load', init);
