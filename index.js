var local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

  ventas: [
    // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
    {
      id: 1,
      fecha: new Date(2019, 1, 4),
      nombreVendedora: "Grace",
      sucursal: "Centro",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"]
    },
    {
      id: 2,
      fecha: new Date(2019, 0, 1),
      nombreVendedora: "Ada",
      sucursal: "Centro",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"]
    },
    {
      id: 3,
      fecha: new Date(2019, 0, 2),
      nombreVendedora: "Grace",
      sucursal: "Caballito",
      componentes: ["Monitor ASC 543", "Motherboard MZI"]
    },
    {
      id: 4,
      fecha: new Date(2019, 0, 10),
      nombreVendedora: "Ada",
      sucursal: "Centro",
      componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"]
    },
    {
      id: 5,
      fecha: new Date(2019, 0, 12),
      nombreVendedora: "Grace",
      sucursal: "Caballito",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"]
    }
  ],

  precios: [
    { componente: "Monitor GPRS 3000", precio: 200 },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 }
  ],

  sucursales: ["Centro", "Caballito"]
};

// me devuelve la fecha que tiene el usuario
let fecha = new Date();

/*
 * aca comienza todo lo que es estilado (modal)
 */

// funcion que hace visible el modal
const abrirModalNuevaVenta = () => {
  // document.querySelector("#modal-nueva-venta").style.display = "block";
  document.querySelector("#modal-nueva-venta").classList.add("active");
};

document.querySelector(".btn-agregar-venta").onclick = abrirModalNuevaVenta;

// funcion que esconde el modal
const cerrarModal = () => {
  document.querySelector("#modal-nueva-venta").classList.remove("active");
};

document.querySelector(".btn-modal-close").onclick = cerrarModal;

// funcion que agrega la venta y cierra el modal
const agregarVenta = () => {
  alert("crear la venta!");
  cerrarModal();
};

document.querySelector(".btn-modal-agregar").onclick = agregarVenta;

/*
 * aca finaliza el estilado :v
 */

// for (let i = 0; i < local.ventas.length; i++) {
//   const venta = local.ventas[i];

//   // inner HTML
//   const ventaHTML = `
//     <li class="venta">
//       <div class="fecha">${venta.fecha.getDate()}/${venta.fecha.getMonth() +
//     1}/${venta.fecha.getFullYear()}</div>
//       <div>${venta.sucursal}</div>
//       <div>${venta.nombreVendedora}</div>
//       <div>${venta.componentes}</div>
//     </li>
//   `;

//   const ul = document.getElementById("ventas");

//   ul.innerHTML += ventaHTML;
// }

// punto 1

// const precioMaquina = componentes => {};
// const cantidadVentasComponente = componente => {};
// const vendedoraDelMes = (mes, anio) => {};
const ventasMes = (mes, anio) => {};
// const ventasVendedora = nombre => {};
// const componenteMasVendido = () => {};
// const huboVentas = (mes, anio) => {};

// punto 2

const ventasSucursal = sucursal => {};
// Las funciones ventasSucursal y ventasVendedora tienen la misma funcionalidad
const sucursalDelMes = (mes, anio) => {};

// funziona!!! :'v

// esta es otra forma de hacerlo pero utilizando la funcion map
const crearVentasHTML = venta => {
  const ventaHTML = `
    <li class="venta">
      <div class="fecha">${venta.fecha.getDate()}/${venta.fecha.getMonth() +
    1}/${venta.fecha.getFullYear()}</div>
      <div>${venta.sucursal}</div>
      <div>${venta.nombreVendedora}</div>
      <div>${venta.componentes}</div>    
    </li>
  `;

  return ventaHTML;
};

const ventasHTML = local.ventas.map(crearVentasHTML);

const ul = document.getElementById("ventas");

ul.innerHTML = ventasHTML.join("");

const obtenerPrecioDelComponente = nombreComponente => {
  return local.precios.find(p => p.componente === nombreComponente).precio;
};

const precioMaquina = componentes => {
  // let total = 0;

  // componentes.forEach(c => {
  //   total += obtenerPrecioDelComponente(c);

  //   return total;
  // });

  return componentes.reduce(
    (total, c) => total + obtenerPrecioDelComponente(c),
    0
  );
};

const cantidadVentasComponente = componente => {
  return local.ventas
    .map(v => v.componentes)
    .flat()
    .reduce((total, c) => (c === componente ? ++total : total), 0);
};

const componenteMasVendido = () => {
  let ulMaximo = "";
  let ulMontoMaximo = -1;

  for (let i = 0; i < local.precio.length; i++) {
    const precio = local.precios[i];
    precio.componente;
  }

  if (ulMontoMaximo < cantidadVentasComponente(precio.componente)) {
    ulMontoMaximo = cantidadVentasComponente(nombre.componente);
    ulMaximo = nombre.componente;
  }
};

const vendedoraDelMes = (mes, anio) => {};

const huboVentas = (mes, anio) => {
  // uso la funcion ventasMes pasando mes y anio como parametros
  // si ventas es igual a 0 entonces es false
  // si no retorno true
};

const ventasVendedora = nombre => {
  let total = 0;

  local.ventas.forEach(venta => {
    if (venta.nombreVendedora === nombre) {
      total += precioMaquina;
    }
  });
};

// const ventasDelMesYAnio = ventasMes(mes, anio);
