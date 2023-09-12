// function sumador_pares (array) {
//     let suma = 0;
//     let contadorPares = 0;
//     for (let i = 0; i<array.length;i++) {
//         if (array[i]%2==0) {
//             suma+=array[i];
//             contadorPares+=1;
//         }
//     }
//     return [suma,contadorPares];
// }

// const numeros = [2,4,6,8,1,5,3];
// const resultado = sumador_pares(numeros);
// console.log(`Hay ${resultado[1]} números pares y la suma es de: ${resultado[0]}`);

function mayor_menor (array) {
    let mayor = array[1];
    let menor = array[1];
    for (let i = 0; i<array.length;i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
        if (array[i] < menor) {
            menor = array[i];
        }
    }
    let resultado = [mayor,menor];
    return resultado;
}

const numeros = [5,20,15,45,60,2,3,100,1];
const resultado_final = mayor_menor(numeros);
console.log(`De tu Array [${numeros}] el número mayor es ${resultado_final[0]} y el número menor es ${resultado_final[1]}`);
