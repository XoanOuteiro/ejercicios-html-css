const colores = ["red", "blue", "green", "yellow", "orange"];
    let indice = 0;

setInterval(() => {
    document.getElementById("contenido").style.backgroundColor = colores[indice];
    indice = (indice + 1) % colores.length;
}, 1000); 