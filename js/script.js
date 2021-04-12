function init(){
//add your javascrip between these two lines of code
var input = document.getElementById("entrybutton");
  function listenerText() {
    var text = document.getElementById("entryinput");
    var displayoutputtext = document.getElementById("textoutput");
    alert("Angie Iturbide: " + text.value);
    output.innerHTML = text.value;
  }
   entry.addEventListener('click', listenerText);
}

window.addEventListener('load', init);
