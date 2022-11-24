const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const legajoEmp = document.querySelector('#legajoEmp');
const btnAlta = document.querySelector('.btnAlta');
const btnBaja = document.querySelector('.btnBaja');
const btnModi = document.querySelector('.btnModi');
const tablaEmpleados = document.querySelector('#tablaEmpleados');
const legajoConsu = document.querySelector('#legajoConsu');
const btnLegajoConsu = document.querySelector('#btnLegajoConsu');
const resultadoConsulta = document.querySelector('#resultadoConsulta');
const legajoVent = document.querySelector('#legajoVent');
const fecha = document.querySelector('#fecha');
const importe = document.querySelector('#importe');
const btnAltaVentas = document.querySelector('.btnAltaVentas');

let arrayEmpleados = [];
let arrayVentas = [];

//googlear como hacer una html table con la info de un array.
//las ventas son un array aparte

btnAlta.addEventListener('click', () => {
  const legajoRepetido = arrayEmpleados.find(
    (empleado) => empleado.legajo === legajoEmp.value
  ); //busca en el array un empleado con el mismo legajo ingresado
  if (nombre.value !== '' && apellido.value !== '' && legajoEmp.value !== '') {
    if (
      legajoRepetido === undefined //se asegura que no haya un empleado con el legajo ingresado
    ) {
      arrayEmpleados.push({
        nombre: nombre.value,
        apellido: apellido.value,
        legajo: legajoEmp.value,
      }); //creo un objeto con los atributos introducidos y lo pusheo al array

      nombre.value = '';
      apellido.value = '';
      legajoEmp.value = '';

      alert('Empleado agregado');
    } else {
      alert('ERROR: Legajo ya existente');
    }
  } else {
    alert('ERROR: Complete todos los campos para dar de alta un empleado');
  }
});

btnBaja.addEventListener('click', () => {
  const legajoRepetido = arrayEmpleados.find(
    (empleado) => empleado.legajo === legajoEmp.value
  );
  if (legajoEmp.value !== '' && legajoRepetido !== undefined) {
    const itemIndex = arrayEmpleados.indexOf(legajoRepetido);
    arrayEmpleados.splice(itemIndex, 1);

    nombre.value = '';
    apellido.value = '';
    legajoEmp.value = '';

    alert('Empleado eliminado');
  } else {
    alert(
      'ERROR: Ingrese un numero de legajo valido para dar de baja un empleado'
    );
  }
});

btnModi.addEventListener('click', () => {
  const legajoRepetido = arrayEmpleados.find(
    (empleado) => empleado.legajo === legajoEmp.value
  );
  if (legajoEmp.value !== '' && legajoRepetido !== undefined) {
    const itemIndex = arrayEmpleados.indexOf(legajoRepetido);
    if (nombre.value !== '') arrayEmpleados[itemIndex].nombre = nombre.value;
    if (apellido.value !== '')
      arrayEmpleados[itemIndex].apellido = apellido.value;

    nombre.value = '';
    apellido.value = '';
    legajoEmp.value = '';

    alert('Modificacion realizada');
  } else {
    alert(
      'ERROR: Ingrese un numero de legajo valido para modificar un empleado'
    );
  }
});

btnAltaVentas.addEventListener('click', () => {
  const legajoEncontrado = arrayEmpleados.find(
    (empleado) => empleado.legajo === legajoVent.value
  ); //busca en el array un empleado con el mismo legajo ingresado
  if (fecha.value !== '' && importe.value !== '' && legajoVent.value !== '') {
    if (legajoEncontrado) {
      //si existe un empleado con el legajo ingresado
      arrayVentas.push({
        fecha: fecha.value,
        importe: importe.value,
        legajo: legajoVent.value,
      }); //creo un objeto con los atributos introducidos y lo pusheo al array

      fecha.value = '';
      importe.value = '';
      legajoVent.value = '';

      alert('Venta agregada');
    } else {
      alert('ERROR: No existe un empleado con el legajo ingresado');
    }
  } else {
    alert('ERROR: Complete todos los campos para dar de alta una venta');
  }
});

btnLegajoConsu.addEventListener('click', () => {
  const legajoRepetido = arrayEmpleados.find(
    (empleado) => empleado.legajo === legajoConsu.value
  );
  if (legajoConsu.value !== '' && legajoRepetido !== undefined) {
    legajoConsu.value = '';
    resultadoConsulta.innerHTML = `Nombres del empleado con legajo ingresado: ${legajoRepetido.apellido}, ${legajoRepetido.nombre}`;
  } else {
    alert(
      'ERROR: Ingrese un numero de legajo valido para realizar una consulta'
    );
  }
});
