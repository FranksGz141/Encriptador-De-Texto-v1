/* 
condiciones
    e == enter
    i == imes
    a == ai
    o == ober
    u == ufat
*/

function encriptar() {
    var texto = document.getElementById("textarea1").value.toLowerCase();

    //i - afecta minusculas y mayusculas
    //g - agecta toda la linea u oración
    //n - afecta multiples lineas o parrafos
    var txtCifrado = texto.replace(/e/igm,"enter")
    var txtCifrado = txtCifrado.replace(/i/igm,"imes")
    var txtCifrado = txtCifrado.replace(/a/igm,"ai")
    var txtCifrado = txtCifrado.replace(/o/igm,"ober")
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat")
    document.getElementById("munhecoTextID").style.display = "none";
    document.getElementById("textarea2").innerHTML = txtCifrado;    
    document.getElementById("textareaCopyID").style.display = "show";
    document.getElementById("textareaCopyID").style.display = "block";
}

function desencriptar() {
    var texto = document.getElementById("textarea1").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e")
    var txtCifrado = txtCifrado.replace(/imes/igm,"i")
    var txtCifrado = txtCifrado.replace(/ai/igm,"a")
    var txtCifrado = txtCifrado.replace(/ober/igm,"o")
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u")
    document.getElementById("munhecoTextID").style.display = "none";
    document.getElementById("textarea2").innerHTML = txtCifrado;    
    document.getElementById("textareaCopyID").style.display = "show";
    document.getElementById("textareaCopyID").style.display = "block";
}

function copiar() {
    var contenido = document.querySelector("#textarea2");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado!");
}

