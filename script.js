// Función que se ejecuta al presionar el botón "Calcular"
function calculateCrc() {
    const data = document.getElementById("data").value;
    const generator = document.getElementById("generator").value;
    
    // Agrega ceros al final del mensaje para el tamaño del generador
    let message = data + "0".repeat(generator.length - 1);

    // Convierte el mensaje y el generador a arrays de bits
    message = Array.from(message, Number);
    const divisor = Array.from(generator, Number);

    // Divide el mensaje por el generador usando XOR
    let i = 0;
    while (i <= message.length - generator.length) {
        if (message[i] === 0) {
            i += 1;
            continue;
        }

        // Realiza XOR del generador y el mensaje
        let j = 0;
        while (j < generator.length) {
            message[i+j] ^= divisor[j];
            j += 1;
        }
        i += 1;
    }

    // Retorna el residuo
    const crcResult = message.slice(-generator.length + 1).join("");
    const crcResultElement = document.getElementById("crc-result");
    crcResultElement.innerHTML = `El código de redundancia cíclica (CRC) es: ${crcResult}`;
}

// Agrega evento al botón "Calcular"
document.getElementById("calculate").addEventListener("click", calculateCrc);