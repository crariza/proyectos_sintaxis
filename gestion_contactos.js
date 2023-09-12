var contactos = [];

function agregarContacto (nombre,telefono,correo) {
    contactos.push({Nombre:nombre, Telefono:telefono, Correo: correo});
}

function mostrarContactos (array) {
    for (let i =0;i<array.length;i++) {
        console.log(`Contacto ${i+1}: ${JSON.stringify(array[i])}`);
    }
}

function buscarContacto(nombre) {
    for (let i =0;i<contactos.length;i++) {
        if (contactos[i]["Nombre"].toLowerCase() === nombre.toLowerCase()) {
            console.log(contactos[i]);
        }
    }
}

function eliminarContacto(nombre) {
    for (let i =0;i<contactos.length;i++){
        if (contactos[i]["Nombre"].toLowerCase() === nombre.toLowerCase()) {
            contactos.splice(i, 1);
        }
    }
    console.log(contactos);
}

let listaContactos = [];
listaContactos = agregarContacto("Carlos", "123", "carlos@correo");
listaContactos = agregarContacto("Andres", "456", "andres@correo");
listaContactos = agregarContacto("Daniel", "789", "daniel@correo");
listaContactos = agregarContacto("Einer", "222", "Einer@correo");
mostrarContactos(contactos);
console.log("\n");

buscarContacto("Carlos");
console.log("\n");
eliminarContacto("Einer");
