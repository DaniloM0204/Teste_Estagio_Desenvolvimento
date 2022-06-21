function Fibo(n) {
    if (n < 2){
        return n;
    }else{
        return Fibo(n - 1) + Fibo(n - 2);
    }
}

for (let i = 0; i < 30; i++) {
    console.log("(" + i + "):" + Fibo(i) + "\t");
    
}