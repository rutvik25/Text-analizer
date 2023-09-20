console.log("Hello")

function textbox() {

    let textvalue = document.getElementById("inputbox").value;

    document.getElementById("word").innerHTML = textvalue.split(" ").length;
    document.getElementById("character").innerHTML = textvalue.length;
    document.getElementById("longword").innerHTML = textvalue.split(" ").sort((a, b) => b.length - a.length)[0];
}