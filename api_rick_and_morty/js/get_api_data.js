// Obtenemos la API de por medio de promesas
/**
 * fetch() este método es nuevo
 * Permite controlar errores mas fácilmente
 * trabaja por medio de http o https y se basa en promesas
 * sistema de peticiones y respuestas
 */

// URL de la API

const API = "https://rickandmortyapi.com/api/character"

// Obtener el retorno de la API

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      // console.log('json ->', json)
      llenarDatos(json),
      pagination(json.info)
    })
    .catch((error) => {
      console.log('Error ->', error)
    })
};

// Llenar datos de nuestra pagina

const llenarDatos = (personajes_json) => {
    let html = ''
    personajes_json.results.forEach((personaje) => {
        html += '<div class="col">'
        html += '<div class="card" style="width: 10rem;">'
        html += `<img src="${personaje.image}" class="card-img-top" alt="...">`
        html += '<div class="card-body">'
        html += `<h5 class="card-title">${personaje.name}</h5>`
        html += `<p class="card-text">Estatus: ${personaje.status}</p>`
        html += `<p class="card-text">Especie: ${personaje.species}</p>`
        html += `<p class="card-text">Genero: ${personaje.gender}</p>`
        html += '</div>'
        html += '</div>'
        html += '</div>'
    });
    // Imprimir datos en el html
    document.getElementById('datosPersonajes').innerHTML = html
}

const pagination = (json_page) => {
      let prevPage = ''
      let nextPage = ''
      json_page.prev == null ? prevPage = 'disabled' : ''
      json_page.next == null ? nextPage = 'disabled' : ''
      html = ''
      html += `<li class="page-item ${prevPage}"><a class="page-link" onclick="getData('${json_page.prev}')">Previous</a></li>`
      html += `<li class="page-item ${nextPage}"><a class="page-link" onclick="getData('${json_page.next}')">Next</a></li>`
      document.getElementById('pagina').innerHTML = html
}

//Invoco la función donde enviamos la url de la api
getData(API)

/**
 * function getData(api) {
 * }
 */
