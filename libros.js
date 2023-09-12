var arrayLibros=[];

function agregarLibro (titulo, autor, genero, publicacion) {
    arrayLibros.push({titulo,autor,genero,publicacion});
}


function imprimirLibros (array) {
    for(let i =0;i<array.length;i++) {
        console.log(array[i]);
    }
}

function buscarTitulo(titulo) {
    for (let i =0;i<arrayLibros.length;i++) {
        if (arrayLibros[i]["titulo"].toLowerCase() === titulo.toLowerCase()) {
            console.log(arrayLibros[i]);
        }
    }
}

function librosPorGenero (generoLibro) {
    let contadorGenero = 0;
    for(let i =0;i<arrayLibros.length;i++) {
        if (arrayLibros[i]["genero"]===generoLibro) {
            contadorGenero++;
        }
    }
    console.log(`Hay ${contadorGenero} libros con el género ${generoLibro}`)
}

let libros = agregarLibro("Hola", "Carlos", "Drama", 2010);
libros = agregarLibro("Adios", "Einer", "Horror", 2020);
libros = agregarLibro("Bienvenido", "German", "Misterio", 2015);
libros = agregarLibro("Despedida", "Einer", "Drama", 2018);
imprimirLibros(arrayLibros);
buscarTitulo("Hola");
librosPorGenero("Drama");







