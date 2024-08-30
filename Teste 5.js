function inverterString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];  // Acessando diretamente o índice da string
    }
    return invertida;
}

const original = "exemplo";
const invertida = inverterString(original);

console.log(`Original: ${original}`);
console.log(`Invertida: ${invertida}`);
