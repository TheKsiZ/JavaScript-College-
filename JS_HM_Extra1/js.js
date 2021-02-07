function show(){
    document.querySelector("#block").style.display = "block";
    document.querySelector("#log").setAttribute("disabled", true);
    document.querySelector("#log").style.cursor = "auto";
    document.querySelector("#text1").value = "";
    document.querySelector("#text2").value = "";
}

function hide(){
    document.querySelector("#block").style.display = "none";
    document.querySelector("#log").removeAttribute("disabled");
    document.querySelector("#log").style.cursor = "pointer";
    document.querySelector("#text1").value = "";
    document.querySelector("#text2").value = "";
}




