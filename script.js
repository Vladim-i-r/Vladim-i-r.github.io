/*a - ai 
e - enter 
i - imes 
o - ober
u - ufat*/
function checkType(words) {
    words = String(words).trim();
    const regxs = {
      "lower": /^[a-z0-9 ]+$/, /*Al ponerle el [^] busca solamente al inicio de la cadena */
      "upper": /^[A-Z0-9 ]+$/,
      "upperLower": /^[A-Za-z0-9 ]+$/,
      "acento": /[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+$/ /*Al quitarle el [^] busca en todos los caracteres */
    }
   
    if (regxs.lower.test(words)) return '0';
    if (regxs.upper.test(words)) return '1';
    if (regxs.upperLower.test(words)) return '2';
    if (regxs.acento.test(words)) return '3';
    return -1;
}

function encriptar(){
    
    var texto = document.getElementById("textinput").value;

    if (texto == "") {
        alert("Por favor, introduzca un texto que desea encriptar")
        document.getElementById("textinput").focus();

    } else if (checkType(texto) == '2'){    
        alert("Por favor, escriba un texto que contenga únicamente minúsculas");
        document.getElementById("textinput").focus();

    } else if (checkType(texto) == '3'){    
        alert("Por favor, escriba un texto que no contenga acentos");
        document.getElementById("textinput").focus();

    } else {

    /* /i afecta mayusculas y minusculas
       /g afecta toda la oracion o linea
       /m afecta a multiples lineas o parrafo*/
    var txtcifrar = texto.replace(/e/igm,"enter");
    var txtcifrar = txtcifrar.replace(/o/igm,"ober");
    var txtcifrar = txtcifrar.replace(/i/igm,"imes");
    var txtcifrar = txtcifrar.replace(/a/igm,"ai");
    var txtcifrar = txtcifrar.replace(/u/igm,"ufat");

    document.getElementById("logoresult").style.display = "none";
    document.getElementById("defaulttext").style.display = "none";
    document.getElementById("instruction").innerHTML = txtcifrar;
    document.getElementById("instruction").style.height = "60%";
    document.getElementById("button-copy").style.display = "show";
    document.getElementById("button-copy").style.display = "inherit";
    }
}

function desencriptar(){

    var texto = document.getElementById("textinput").value; /* Se puede agregar value.toLowerCase para reemplazar y no tener que validar */

    if (texto == "") {
        alert("Por favor, introduzca un texto que desea desencriptar")
        document.getElementById("textinput").focus();

    } else if (checkType(texto) == '2'){    
        alert("Por favor, escriba un texto que contenga únicamente minúsculas");
        document.getElementById("textinput").focus();

    } else if (checkType(texto) == '3'){    
        alert("Por favor, escriba un texto que no contenga acentos");
        document.getElementById("textinput").focus();

    } else {


    /* /i afecta mayusculas y minusculas
       /g afecta toda la oracion o linea
       /m afecta a multiples lineas o parrafo*/
    var txtcifrar = texto.replace(/enter/igm,"e");
    var txtcifrar = txtcifrar.replace(/ober/igm,"o");
    var txtcifrar = txtcifrar.replace(/imes/igm,"i");
    var txtcifrar = txtcifrar.replace(/ai/igm,"a");
    var txtcifrarf = txtcifrar.replace(/ufat/igm,"u");

    document.getElementById("logoresult").style.display = "none";
    document.getElementById("defaulttext").style.display = "none";
    document.getElementById("instruction").innerHTML = txtcifrarf;
    document.getElementById("instruction").style.height = "60%";
    document.getElementById("button-copy").style.display = "show";
    document.getElementById("button-copy").style.display = "inherit";
    }
}

function copiar(){
    var contenido = document.querySelector("#instruction");
    contenido.select();
    document.execCommand("copy");
    document.getElementById("instruction").textContent = "";
    alert("Se ha copiado")
    document.getElementById("textinput").focus();
}