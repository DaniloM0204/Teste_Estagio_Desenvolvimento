
// Descubra a lógica e complete o próximo elemento

//A
console.log("A");
for (let i = -1; i < 10;) {
        i = i + 2;
        console.log("(" + i + "):" + (i) + "\t");
   // O Resultado é 9
}

//B
console.log("B");
for (let n = 0; n < 8; n++) {
        let i = 0;
        i = 2**n
        console.log("(" + i + "):" + (i) + "\t");
    // O Resultado é 128
}

//C
console.log("C");
function numero(n){
        let termo;
        termo = n*n;
        console.log("(" + termo + "):" + (termo) + "\t");
        console.log(`O ultimo número da sequencia 0,1,4,9,16,25,36 é ${termo}`);
   // O Resultado é 49
}
numero(7);

//D
// for (let i = 4; i < 100; i++) {
//         console.log("(" + i + "):" + (i) + "\t");
// O resultado da sequência seria 100, pois cada número é referente as potências, 2,4,6,8,10 elevadas ao quadrado
// }

// E
console.log("E");
function Fibo(n) {
        if (n < 2){
        return n;
        }else{
        return Fibo(n - 1) + Fibo(n - 2);
        }
};
for (let i = 1; i < 8; i++) {
        console.log("(" + i + "):" + Fibo(i) + "\t");
        // O Resultado é 13
};   

// F
console.log("F");
console.log("Todos os números começam com a letra D logo o próximo numero da sequencia é 200 \n");







