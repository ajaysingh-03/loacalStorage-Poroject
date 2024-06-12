let textArea = document.getElementById("text-area");

function saveTextArea(){
    localStorage.setItem("savedText",textArea.value);
}
if(localStorage.getItem("savedtext")){
    textArea.value = localStorage.getItem("savedtext");
}

textArea.addEventListener("input", saveTextArea);