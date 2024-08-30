const faturamento = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    // Adicione mais dias
];

// Filtrar dias com faturamento maior que 0
const valores = faturamento.map(d => d.valor).filter(v => v > 0);

// Calcular a média mensal
const mediaMensal = valores.reduce((acc, val) => acc + val, 0) / valores.length;

// Encontrar o menor e maior valor de faturamento
const menorValor = Math.min(...valores);
const maiorValor = Math.max(...valores);

// Contar o número de dias com faturamento acima da média
const diasAcimaDaMedia = valores.filter(v => v > mediaMensal).length;

console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
