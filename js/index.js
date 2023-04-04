window.addEventListener("load", (event) => {
    Listar()
});

let cuerpotrabal = document.getElementById('tabla-usuario');

let usuario = [
    {
        id: 1002035,
        nombre: "Nelson",
        apellido: "Morales",
        usuarios: "Cmrales26",
        direccion: "Calle 1",
        telefono: 30143796,
        edad: 21,
        pais: "Colombia",
        genero: "Masculino",
    },
    {
        id: 1007176,
        nombre: "Andrea",
        apellido: "Dominguez",
        usuarios: "Adomingu24",
        direccion: "Calle 3",
        telefono: 3324587,
        edad: 20,
        pais: "Colombia",
        genero: "Femenino",
    },
    {
        id: 1001998,
        nombre: "Diana",
        apellido: "Vidal",
        usuarios: "Diany1515",
        direccion: "Calle 2",
        telefono: 3004369,
        edad: 20,
        pais: "Colombia",
        genero: "Femenino",
    },
]

const Listar = () => {
    let listado = '';
    for (let i = 0; i < usuario.length; i++) {
        listado += `
       <tr>
            <td>${usuario[i].id}</td>
            <td>${usuario[i].nombre}</td>
            <td>${usuario[i].apellido}</td>
            <td>${usuario[i].usuarios}</td>
            <td>${usuario[i].direccion}</td>
            <td>${usuario[i].telefono}</td>
            <td>${usuario[i].edad}</td>
            <td>${usuario[i].pais}</td>
            <td>${usuario[i].genero}</td>
        </tr>
       `
    }
    cuerpotrabal.innerHTML = listado
}

// ! AGREGAR

let id = document.getElementById("Id");
let nombre = document.getElementById("Nombre");
let apellido = document.getElementById("Apellido");
let user = document.getElementById("User");
let direccion = document.getElementById("Direccion");
let telefono = document.getElementById("Telefono");
let edad = document.getElementById("Edad");
let pais = document.getElementById("Pais");
let selector_genero = document.getElementById("Selector-genero"); let genero = selector_genero.elements["Genero"];

const Agregar = () => {
    if (id.value == "" || nombre.value == "" || apellido.value == "" || user.value == "" || direccion.value == "" || telefono.value == "" || edad.value == "" || pais.value == "Seleccione un país" || pais.value == "" || genero.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'DEBE RELLENAR TODOS LOS VALORES',
            confirmButtonColor: "#6C4784"
        }
        )
        select_faltantes();
    } else if (validarExistencia() == false) {
        let nuevo = {
            id: id.value,
            nombre: nombre.value,
            apellido: apellido.value,
            usuarios: user.value,
            direccion: direccion.value,
            telefono: telefono.value,
            edad: edad.value,
            pais: pais.value,
            genero: genero.value
        }
        usuario.push(nuevo);
        Swal.fire({
            icon:'success',
            title: "👍",
            text: "Se ha Agregado correctamente",
            timer: 1500,
            showConfirmButton: false
          });
        Listar();
        limpiar();
        remove_select()
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `El numero de identificacion ${id.value} ya se encuentra registrado`,
            confirmButtonColor: "#6C4784"
        });
        id.value = "";
    }
}

const validarExistencia = () => {
    for (let i = 0; i < usuario.length; i++) {
        if (id.value == usuario[i].id) {
            id.classList.add("form-alert");
            return true;
        }
    }
    return false;
}

const limpiar = () => {
    id.value = "";
    nombre.value = "";
    apellido.value = "";
    user.value = "";
    direccion.value = "";
    telefono.value = "";
    edad.value = "";
    pais.value = "Seleccione un país";
}

const select_faltantes = () => {
    if (id.value == "") {
        id.classList.add("form-alert")
    }
    if (nombre.value == "") {
        nombre.classList.add("form-alert")
    }
    if (apellido.value == "") {
        apellido.classList.add("form-alert")
    }
    if (user.value == "") {
        user.classList.add("form-alert")
    }
    if (direccion.value == "") {
        direccion.classList.add("form-alert")
    }
    if (telefono.value == "") {
        telefono.classList.add("form-alert")
    }
    if (edad.value == "") {
        edad.classList.add("form-alert")
    }
    if (pais.value == "Seleccione un país") {
        pais.classList.add("form-alert")
    }
}

let form = document.querySelector(".lables");

form.addEventListener('click', (event) => {
    remove_select()
})

const remove_select = () => {
    id.classList.remove("form-alert")
    nombre.classList.remove("form-alert")
    apellido.classList.remove("form-alert")
    user.classList.remove("form-alert")
    direccion.classList.remove("form-alert")
    telefono.classList.remove("form-alert")
    edad.classList.remove("form-alert")
    pais.classList.remove("form-alert")
}