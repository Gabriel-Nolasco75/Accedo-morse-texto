// Función para convertir texto a Morse
function convertirAMorse() {
    var inputTexto = document.getElementById("inputTexto").value.toUpperCase();
    var morseTraduccion = textoAMorse(inputTexto);
    document.getElementById("outputText").value = morseTraduccion;
}
// Función para convertir Morse a texto
function convertirATexto() {
    var inputTexto = document.getElementById("inputTexto").value;
    var contieneEspacios = inputTexto.includes(" ");
    //Genera un if para evitar un bloqueo al usar espacios por la debida actividad
    if (contieneEspacios) {
        alert("No se pueden usar espacios en la conversión a texto.");
        return;
    }
    var textoTraduccion = morseATexto(inputTexto);
    document.getElementById("outputText").value = textoTraduccion;
}
// Función para convertir texto a Morse
function textoAMorse(texto) {
    // Tabla de traducción Morse a texto
    var morse = {
        "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.", "H": "....",
        "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---", "P": ".--.",
        "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
        "Y": "-.--", "Z": "--..", "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
        "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.", " ": "/"
    };
    var morseTexto = "";
    var palabra = texto;
    // Procesa la cadena de entrada letra por letra
    while (palabra.length !== 0) {
        if (palabra.length > 0) {
            var cuatro = palabra.slice(0, 4);
            var tres = palabra.slice(0, 3);
            var dos = palabra.slice(0, 2);
            var uno = palabra.slice(0, 1);
            // Verifica si el segmento coincide con un código Morse
            if (morse.hasOwnProperty(cuatro)) {
                var caracter4 = morse[cuatro];
                morseTexto += caracter4 + " ";
                palabra = palabra.slice(4);
            } else if (morse.hasOwnProperty(tres)) {
                var caracter3 = morse[tres];
                morseTexto += caracter3 + " ";
                palabra = palabra.slice(3);
            } else if (morse.hasOwnProperty(dos)) {
                var caracter2 = morse[dos];
                morseTexto += caracter2 + " ";
                palabra = palabra.slice(2);
            } else if (morse.hasOwnProperty(uno)) {
                var caracter1 = morse[uno];
                morseTexto += caracter1 + " ";
                palabra = palabra.slice(1);
            }
        }
    }
    return morseTexto.trim();
}
// Función para convertir Morse a texto
function morseATexto(morse) {
    // Tabla de traducción Morse a texto inversa
    var inversoCodigoMorse = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H',
        '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P',
        '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
        '-.--': 'Y', '--..': 'Z', '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4',
        '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', '/': ' '
    };
    var caracteres = morse.split(" ");
    var texto = "";
    var palabra = morse;
    // Procesa la cadena Morse de entrada
    while (palabra.length !== 0) {
        if (palabra.length > 0) {
            var cuatro = palabra.slice(0, 4);
            var tres = palabra.slice(0, 3);
            var dos = palabra.slice(0, 2);
            var uno = palabra.slice(0, 1);
            // Verifica si el segmento coincide con un carácter Morse
            if (inversoCodigoMorse.hasOwnProperty(cuatro)) {
                var caracter4 = inversoCodigoMorse[cuatro];
                texto += caracter4;
                palabra = palabra.slice(4);
            } else if (inversoCodigoMorse.hasOwnProperty(tres)) {
                var caracter3 = inversoCodigoMorse[tres];
                texto += caracter3;
                palabra = palabra.slice(3);
            } else if (inversoCodigoMorse.hasOwnProperty(dos)) {
                var caracter2 = inversoCodigoMorse[dos];
                texto += caracter2;
                palabra = palabra.slice(2);
            } else if (inversoCodigoMorse.hasOwnProperty(uno)) {
                var caracter1 = inversoCodigoMorse[uno];
                texto += caracter1;
                palabra = palabra.slice(1);
            }
        }
    }
    return texto;
}