function conversor_temperatura (valor,unidad_desde,unidad_hacia) {
    switch (unidad_desde) {
        case "celsius":
            const factores_celsius = {
                "fahrenheit":(valor*1.8)+32,
                "kelvin": valor+273.15
            };
            if (factores_celsius.hasOwnProperty(unidad_hacia)) {
                console.log(`El valor de tu temperatura de ${valor} grados ${unidad_desde} en grados ${unidad_hacia} equivale a: `);
                return factores_celsius[unidad_hacia].toFixed(2);
            } else {
                console.log("La unidad a donde deseas convertir no está disponible: ");
                return unidad_hacia;
            }
        break;
    
        case "fahrenheit":
            const factores_fahrenheit = {
                "celsius":(valor-32)/1.8,
                "kelvin":(valor-32)*0.5555 +273.15
            };
            if (factores_fahrenheit.hasOwnProperty(unidad_hacia)) {
                console.log(`El valor de tu temperatura de ${valor} grados ${unidad_desde} en grados ${unidad_hacia} equivale a: `);
                return factores_fahrenheit[unidad_hacia].toFixed(2);
            } else {
                console.log("La unidad a donde deseas convertir no está disponible: ");
                return unidad_hacia;
            }
        break;

        case "kelvin":
            const factores_kelvin = {
                "celsius": valor-273.15,
                "fahrenheit":1.8*(valor-273.15)+32
            };
            if (factores_kelvin.hasOwnProperty(unidad_hacia)) {
                console.log(`El valor de tu temperatura de ${valor} grados ${unidad_desde} en grados ${unidad_hacia} equivale a: `);
                return factores_kelvin[unidad_hacia].toFixed(2);
            } else {
                    console.log("La unidad a donde deseas convertir no está disponible: ");
                    return unidad_hacia;
            }
        break;

        default:
            console.log("La siguiente unidad no es válida: ");
            return unidad_desde;
    }
}

const temperatura = parseInt(prompt("Ingrese la temperatura que desea convertir"));
const unidad_inicial = prompt("Ingrese la unidad inicial");
const unidad_final = prompt("Ingrese la unidad final");

// const temperatura = 40;
// const unidad_inicial = "celsius";
// const unidad_final = "kelvin";


if (unidad_inicial===unidad_final) {
    console.log(`Tu valor de ${temperatura} grados ${unidad_inicial} no será convertido porque ambas unidades son iguales`);
} else {
    const resultado = conversor_temperatura(temperatura,unidad_inicial,unidad_final);
    console.log(resultado);
}


