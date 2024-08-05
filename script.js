const textArea = document.querySelector("#entrada");
const mensaje = document.querySelector("#salida");

function encriptar (stringEncriptada)
{
    let matrizcodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    let nopermitido = ['á','é','í','ó','ú'];
    for (let i = 0; i< matrizcodigo.length; i++)
    {
        if(stringEncriptada.includes(nopermitido[i]))
        {
            alert("No se permiten acentos.");
            stringEncriptada="";
            break;
        }
        else
        {
            if(stringEncriptada.includes(matrizcodigo[i][0]))
                {
                    stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])
                }
        }
    }
    return stringEncriptada
}

function btnEncriptar()
{
    const txtEncriptado = encriptar (textArea.value)
    mensaje.value = txtEncriptado;
    textArea.value = "";
    if(txtEncriptado=="")
        {
            //muestra mensajes cuando no hay texto a encriptar
           const ingrese = document.getElementById('Ingresetxt'); 
           const noencontrado = document.getElementById('noencontrado');
           noencontrado.hidden = false;
           ingrese.hidden = false;
        }
     else
    {
        mensaje.style.backgroundImage = "none"
        //declaramos una variable para jalar el boton copiar que se encuentra oculto
        const botonCopiar = document.getElementById('copiar');
        //cancela el atributo hidden del elemento boton copiar de HTML
        botonCopiar.hidden = false;
    }
}
function desencriptar (stringDesencriptada)
{
    let matrizcodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    let nopermitido = ['á','é','í','ó','ú'];
    for (let i = 0; i< matrizcodigo.length; i++)
    {
        if(stringEncriptada.includes(nopermitido[i]))
        {
                alert("No se permiten acentos.");
                stringEncriptada="";
                break;
        }
        else
        {
            if(stringDesencriptada.includes(matrizcodigo[i][1]))
            {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
            }
        }
    }
return stringDesencriptada
}

function btnDesencriptar()
{
    const txtEncriptado = desencriptar (textArea.value)
    mensaje.value = txtEncriptado;
    textArea.value = "";
    if(txtEncriptado=="")
    {
        //Muestra mensaje cuando no hay texto que desencriptar
        const ingrese = document.getElementById('Ingresetxt'); 
        const noencontrado = document.getElementById('noencontrado');
        noencontrado.hidden = false;
        ingrese.hidden = false;
    }
    else
    {
        mensaje.style.backgroundImage = "none";
        //declaramos una variable para obtener el boton copiar que se encuentra oculto
        const botonCopiar = document.getElementById('copiar');
        //cancela el atributo hidden del elemento boton copiar de HTML
        botonCopiar.hidden = false;
    }
}
function btnCopiar()
{
    //obtener el valor del area de resultado
    const texto = document.getElementById('salida');
    //Seleccionar el texto a copiar
    texto.select();
    texto.setSelectionRange(0,99999);
    //Copia el texto dentro del area de resultado
    navigator.clipboard.writeText(texto.value);
    //alerta de copiar
    alert("Texto copiado: " + texto.value);
}