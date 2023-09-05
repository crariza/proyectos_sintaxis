function palindromo (frase) {

    const fraseMinuscula = frase.toLowerCase();
    const fraseNormalizada = fraseMinuscula.normalize("NFD").replace(/[\u0300-\u036f]|[.,\s\?\¿]|/g, "");
    console.log(`La frase normalizada es: ${fraseNormalizada}`);

    let contador=0;
    for (i=0; i<fraseNormalizada.length; i++) {
        if (fraseNormalizada[i] === fraseNormalizada[(fraseNormalizada.length-1)-i]) {
            contador++;
        } 
    }

    if (contador == fraseNormalizada.length) {
        console.log("'"+frase+"' SÍ es palindroma");
    } else { 
        console.log("'"+frase+"' NO es palindroma");
    }
}

// const frase = prompt("Ingrese la palabra o frase a analizar");
const frase = "Adán no cede con Eva y Yavé no cede con nada";
palindromo(frase);









