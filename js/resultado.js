// Buscamos los datos del partido en el localStorage
(function () {
    if (localStorage.getItem("Partido 1")) {
        let { primerEquipo, segundoEquipo, golesEquipo1, golesEquipo2, Division, Cancha } = JSON.parse(localStorage.getItem("Partido 1"));
        document.querySelector("#resultados").innerHTML = `
            <div id="contenedorPartido"><h2> ${primerEquipo} ${golesEquipo1} - ${golesEquipo2} ${segundoEquipo} </h2>
            <h6> División ${Division} - ${Cancha} </h3> </div>
        `;
        }
    else {
        document.querySelector("#resultados").innerHTML = `
            <p>No se encontraron partidos nuevos.</p>
        `
    }
})();

// Buscamos los datos de nuestro archivo local
let url = "https://tioblitz.github.io/controladorpartidos/js/partidos.json"
fetch(url)
    .then((res) => (res.json()))
    .then((data) => {
        data.forEach((partido) => {
            let { primerEquipo, segundoEquipo, golesEquipo1, golesEquipo2, Division, Cancha } = partido;
            let historialPartidos = document.querySelector("#historialPartidos");
            historialPartidos.innerHTML += `
            <div id="contenedorPartido"><h2> ${primerEquipo} ${golesEquipo1} - ${golesEquipo2} ${segundoEquipo} </h2>
            <h6> División ${Division} - ${Cancha} </h3> </div>
        `;
        });
    })