function init(){
//add your javascript between these two lines of code
  function listenerandtext(){
    var text = document.getElementById("entryinput");
    var displayoutputtext = document.getElementById("textoutput");
    alert("Angie Iturbide: " + text.value);
    displayoutputtext.innerHTML = text.value;
}

var textbox = document.getElementById("entrybutton");

textbox.addEventListener('click', myFunction);

}

window.addEventListener('load', init);
