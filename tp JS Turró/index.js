const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const legajoEmp = document.querySelector('#legajoEmp');
const btnAlta = document.querySelector('.btnAlta');
const btnBaja = document.querySelector('.btnBaja');
const btnModi = document.querySelector('.btnModi');
const legajoConsu1 = document.querySelector('#legajoConsu1');
const btnLegajoConsu1 = document.querySelector('#btnLegajoConsu1');
const resultadoConsulta1 = document.querySelector('#resultadoConsulta1');
const legajoVent = document.querySelector('#legajoVent');
const fecha = document.querySelector('#fecha');
const importe = document.querySelector('#importe');
const btnAltaVentas = document.querySelector('.btnAltaVentas');
const legajoConsu2 = document.querySelector('#legajoConsu2');
const btnLegajoConsu2 = document.querySelector('#btnLegajoConsu2');
const resultadoConsulta2 = document.querySelector('#resultadoConsulta2');
const btnLegajoConsu3 = document.querySelector('#btnLegajoConsu3');
const resultadoConsulta3 = document.querySelector('#resultadoConsulta3');
const tablaEmpleados = document.querySelector('.tablaEmpleados');
const tablaVentas = document.querySelector('.tablaVentas');

let arrayEmpleados = [];
let arrayVentas = [];

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

      crearTablaEmpleados();

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

    crearTablaEmpleados();

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

    crearTablaEmpleados();

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

      crearTablaVentas();

      alert('Venta agregada');
    } else {
      alert('ERROR: No existe un empleado con el legajo ingresado');
    }
  } else {
    alert(
      'ERROR: Complete todos los campos de forma correcta para dar de alta una venta'
    );
  }
});

btnLegajoConsu1.addEventListener('click', () => {
  const legajoRepetido = arrayEmpleados.find(
    (empleado) => empleado.legajo === legajoConsu1.value
  );
  if (legajoConsu1.value !== '' && legajoRepetido !== undefined) {
    legajoConsu1.value = '';
    resultadoConsulta1.innerHTML = `Nombres del empleado con legajo ingresado: ${legajoRepetido.apellido}, ${legajoRepetido.nombre}`;
  } else {
    alert(
      'ERROR: Ingrese un numero de legajo valido para realizar una consulta'
    );
  }
});

btnLegajoConsu2.addEventListener('click', () => {
  const legajoRepetido = arrayEmpleados.find(
    (empleado) => empleado.legajo === legajoConsu2.value
  );
  if (legajoConsu2.value !== '' && legajoRepetido !== undefined) {
    const ventasEmpleado = arrayVentas.filter(
      (venta) => venta.legajo === legajoConsu2.value
    );

    let txt = '';
    let total = 0;
    let i = 1;
    ventasEmpleado.forEach((venta) => {
      txt += `Venta ${i} con importe $${venta.importe} en el ${venta.fecha}. `;
      i++;
      total += parseInt(venta.importe);
    });

    legajoConsu2.value = '';
    resultadoConsulta2.innerHTML = txt + `Importe total: $${total}`;
  } else {
    alert(
      'ERROR: Ingrese un numero de legajo valido para realizar una consulta'
    );
  }
});

btnLegajoConsu3.addEventListener('click', () => {
  //quiere ver cada vendedor, el subtotal (suma de sus ventas) y el total de todos los vendedores
  let total = 0;
  arrayEmpleados.forEach((empleado) => {
    const ventasEmpleado = arrayVentas.filter(
      (venta) => venta.legajo === empleado.legajo
    );
    let txt = `Ventas del vendedor ${empleado.legajo}: `;
    let subTotal = 0;
    let i = 1;
    ventasEmpleado.forEach((venta) => {
      txt += `Venta ${i} con importe $${venta.importe} en el ${venta.fecha}. `;
      i++;
      subTotal += parseInt(venta.importe);
    });
    txt += `Subtotal del vendedor: $${subTotal}`;
    total += subTotal;
    const lineBreak = document.createElement('br');
    resultadoConsulta3.innerHTML += txt;
    resultadoConsulta3.appendChild(lineBreak);
  });
  resultadoConsulta3.innerHTML += `Total vendido de todos los empleados: $${total}`;
});

let headersEmp = [
  'Nombre del empleado',
  'Apellido del empleado',
  'Legajo del empleado',
];
function crearTablaEmpleados() {
  tablaEmpleados.innerHTML = '';
  let table = document.createElement('table');
  let headerRow = document.createElement('tr');
  headersEmp.forEach((headerText) => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);
  arrayEmpleados.forEach((emp) => {
    let row = document.createElement('tr');
    Object.values(emp).forEach((text) => {
      let cell = document.createElement('td');
      let textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    });
    table.appendChild(row);
  });
  tablaEmpleados.appendChild(table);
}

let headersVen = [
  'Fecha de la venta',
  'Importe de la venta',
  'Legajo del empleado responsable',
];
function crearTablaVentas() {
  tablaVentas.innerHTML = '';
  let table = document.createElement('table');
  let headerRow = document.createElement('tr');
  headersVen.forEach((headerText) => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);
  arrayVentas.forEach((emp) => {
    let row = document.createElement('tr');
    Object.values(emp).forEach((text) => {
      let cell = document.createElement('td');
      let textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    });
    table.appendChild(row);
  });
  tablaVentas.appendChild(table);
}
