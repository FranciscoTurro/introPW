const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const legajoEmp = document.querySelector('#legajoEmp');
const btnAlta = document.querySelector('.btnAlta');
const btnBaja = document.querySelector('.btnBaja');
const btnModi = document.querySelector('.btnModi');
const tablaEmpleados = document.querySelector('#tablaEmpleados');
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

let arrayEmpleados = [
  {
    nombre: 'a',
    apellido: 'a',
    legajo: 'a',
  },
  {
    nombre: 'b',
    apellido: 'b',
    legajo: 'b',
  },
];
let arrayVentas = [
  {
    fecha: '22-11-22',
    importe: '2',
    legajo: 'a',
  },
  {
    fecha: '21-11-22',
    importe: '14',
    legajo: 'a',
  },
];

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
  const legajoRepetido = arrayEmpleados.find(
    (empleado) => empleado.legajo === legajoConsu3.value
  );
  if (legajoConsu3.value !== '' && legajoRepetido !== undefined) {
  } else {
    alert(
      'ERROR: Ingrese un numero de legajo valido para realizar una consulta'
    );
  }
});
