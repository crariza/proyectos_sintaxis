let numeroPlatos = parseInt(prompt("Cuántos platos consumiste?"));
let cuentaTotal = 0;
let validacionPropina = prompt("Desea agregar propina?");

for (let i = 1; i <= numeroPlatos; i++) {
    let valorPlato = parseInt(prompt(`Ingrese el valor en COP del plato No. ${i}`));
    console.log(`El plato No. ${i} vale $${valorPlato}`);
    cuentaTotal +=valorPlato;
}

if (validacionPropina === "no") {
    console.log(`El valor total de tu cuenta sin propina es $${cuentaTotal}`);
} else {
    let porcentajePropina = parseInt(prompt("Ingrese el valor de la propina en %"));
    let valorPropina = (cuentaTotal*porcentajePropina)/100;
    let cuentaFinal = cuentaTotal + valorPropina;
    console.log(`El valor final de tu cuenta es de: cuenta-> $${cuentaTotal} + propina -> $${valorPropina} = $${cuentaFinal}`);
}
