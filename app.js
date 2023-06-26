/*
👉 Que se rendericen ciertas partes de la página (carrito, productos, etc.) desde Js.

👉 Que se utilicen buenas prácticas a la hora de estructurar y organizar el código 
(buena organización del código en general, por ejemplo, buenos nombres de variables, 
    funciones y parámetros).

👉 Deberá tener al menos una funcionalidad en la que capture datos de una parte de 
la página y cree un componente HTML en base a eso (Por ejemplo, una funcionalidad de 
agregar un producto al carrito, que tome los datos de dicho producto para renderizarlo
en el mismo).

👉 Deberá utilizar localStorage, para persistir datos en el sitio.

👉 En caso de que lo deseen, podrán usar algún framework de CSS para el estilado de 
la página.

👉 El Sitio deberá ser una landing page totalmente responsive, en la que deberá haber 
una sección de productos y una página  de login ( como referencia para organizarse, 
pueden tomar la estructura del Nucba NFT y agregar la página de login y registro).

👉 El sitio debe ser responsivo y tener menú hamburguesa (funcional, realizado con js) 
en las resoluciones (mobile, tablet, etc.) que corresponda.

👉 Deberá tener la funcionalidad de filtrar por categorías. (productos o noticias).

👉 OPCIONAL: Si conocen alguna API de Productos/Noticias que quieran utilizar en lugar 
de traer los datos  desde un archivo de JS, pueden hacerlo.

👉 Deberán entregar el repositorio de Github, con el Vercel de la página vinculado.
*/

const curiosidades = document.querySelector(".curiosidades");
const seccionMarcas = document.querySelector(".section__marcas");
const categoria = document.querySelectorAll(".marca__categoria");
const perfumes = document.querySelector(".perfumes");
const loading = document.querySelector(".container__loading");
const carrito = document.getElementById("carrito");
const iconoCarrito = document.querySelector(".fa-cart-shopping");
const listaCarrito = document.querySelector(".lista__carrito");
const modal = document.querySelector(".modal");
const vaciar = document.getElementById("vaciar");
const comprar = document.getElementById("comprar");
const totalCompra = document.getElementById("total");
const menos = document.querySelector(".menos");
const mas = document.querySelector(".mas");
const iconoBasura = document.querySelector(".borrar");

let carroArray = JSON.parse(localStorage.getItem("carro")) || [];

const saveLocalStorage = (cartlist) => {
  localStorage.setItem("carro", JSON.stringify(cartlist));
};

const mostrarCuriosidades = () => {
  let i = 0;
  curiosidades.innerHTML = curiosidad[0].texto;
  setInterval(() => {
    if (i >= 11) {
      i = 0;
    } else {
      curiosidades.innerHTML = curiosidad[i].texto;
      i++;
    }
  }, 15000);
}

const mostrarCategoria = (categoria) => {
  const { id, flanker, imagen, precio, marca } = categoria;
  return `<div class="card">
            <img class="imagen__perfume" src="${imagen}" alt="${flanker}">
            <span class="marca__perfume"><strong>${marca}</strong></span>
            <span class="flanker__perfume">${flanker}</span>
            <span class="precio__perfume">$${precio}</span>
            <button class="boton__perfume btn__agregar" data-id='${id}' data-imagen='${imagen}' data-marca='${marca}' data-flanker='${flanker}' data-precio='${precio}'>AGREGAR AL CARRITO</button>
          </div>`;
};

const categoriaFraccionada = (Array) => {
  const arrayFraccionado = [...Array];
  console.log(arrayFraccionado);
}

const mostrarCategoriaSeleccionada = (categoria) => {
  if (categoria === 'carolinaHerrera') {
    perfumes.innerHTML = chArray.map(mostrarCategoria).join("");
    categoriaFraccionada(chArray);
  } else if (categoria === 'dior') {
    perfumes.innerHTML = diorArray.map(mostrarCategoria).join("");
  }
  else if (categoria === 'givenchy') {
    perfumes.innerHTML = givenchyArray.map(mostrarCategoria).join("");
  }
  else if (categoria === 'mugler') {
    perfumes.innerHTML = muglerArray.map(mostrarCategoria).join("");
  }
  else if (categoria === 'pacoRabanne') {
    perfumes.innerHTML = pacoArray.map(mostrarCategoria).join("");
  }
};

const mostrarResultadoCategoria = (e) => {
  const categoriaSeleccionada = e.target.dataset.perfume;
};

const mostrarCategorias = (e) => {
  if (!e.target.classList.contains('marca__categoria')) return;
  mostrarResultadoCategoria(e);
  if (!e.target.dataset.perfume) {
    section__perfumes.innerHTML = "";
  }
  else {
    mostrarCategoriaSeleccionada(e.target.dataset.perfume);
  }
};

const loadingPerfumes = (categoria) => {
  loading.classList.add('show');
  setTimeout(() => {
    loading.classList.remove('show');
    mostrarCategoria(categoria);
  }, 1000);
};

const mostrarCarrito = (e) => {
  if (carrito.classList.contains('activar__carrito')) {
    carrito.classList.remove('activar__carrito');
  } else {
    carrito.classList.add('activar__carrito');
  }
};

const cerrarCarritoScroll = () => {
  if (!carrito.classList.contains('activar__carrito')) {
    return;
  }
  carrito.classList.remove('activar__carrito');
};

/***carrito de compras***/
const mostrarCarritoElemento = (producto) => {
  const { id, marca, flanker, precio, imagen, cantidad } = producto;
  return `<div class="producto__carrito">
            <img src="${imagen}" alt="${flanker}">
            <div class="info__carrito">
              <span class="marca__perfume"><strong>${marca}</strong></span>
              <span class="flanker__perfume">${flanker}</span>
              <div class="botonesDelCarrito">
                <div class="botones__producto__carrito">
                  <button class="menos" data-flanker='${flanker}'>-</button>
                  <label id="cantidad">${cantidad}</label>
                  <button class="mas" data-flanker='${flanker}'>+</button>
                </div>
                <button class="borrar" data-flanker='${flanker}'>
                  <i class="fa-regular fa-trash-can borrar" data-flanker='${flanker}'></i>
                </button>  
              </div>
              <span class="precio__perfume">$${precio}</span>
            </div>
          </div>`;
};

const mostrarCarritoLista = () => {
  if (!carroArray.length) {
    listaCarrito.innerHTML = `<h3 class="mostrar">Aún no hay productos</h3>`;
    return;
  }
  listaCarrito.innerHTML = carroArray.map(mostrarCarritoElemento).join("");
};

const crearDatosDeProducto = (id, marca, flanker, precio, imagen) => {
  return { id, marca, flanker, precio, imagen };
};

const crearProductoEnCarrito = (producto) => {
  carroArray = [...carroArray, { ...producto, cantidad: 1 }];
};

const existeProductoEnCarrito = (producto) => {
  return carroArray.find((item) => item.flanker === producto.flanker);
};

const sumarUnidadAlProducto = (producto) => {
  carroArray = carroArray.map((carritoProducto) => {
    return carritoProducto.flanker === producto.flanker ?
      { ...carritoProducto, cantidad: carritoProducto.cantidad + 1 }
      : carritoProducto;
  });
};

const calcularTotal = () => {
  return carroArray.reduce((acc, cur) => acc + Number(cur.precio) * cur.cantidad, 0);
};

const mostrarTotal = () => {
  totalCompra.innerHTML = `$${calcularTotal()}`;
};

const mostrarModal = (msg) => {
  modal.classList.add("modal-activo");
  modal.textContent = msg;
  setTimeout(() => {
    modal.classList.remove("modal-activo");
  }, 1500);
};

const agregarProduto = (e) => {
  if (!e.target.classList.contains('btn__agregar')) return;
  const { id, marca, flanker, precio, imagen } = e.target.dataset;
  const producto = crearDatosDeProducto(id, marca, flanker, precio, imagen);
  if (existeProductoEnCarrito(producto)) {
    sumarUnidadAlProducto(producto);
    mostrarModal("Se agrego una unidad del producto al carrito!");
  } else {
    crearProductoEnCarrito(producto);
    mostrarModal("El producto se ha agregado al carrito!");
  }
  estadoCarrito();
};

const borrarProductoDelCarrito = (existeProducto) => {
  carroArray = carroArray.filter((producto) => producto.flanker !== existeProducto.flanker);
  estadoCarrito();
};

const restarUnidadProducto = (existeProducto) => {
  carroArray = carroArray.map((producto) => {
    return producto.flanker === existeProducto.flanker ?
      { ...producto, cantidad: Number(producto.cantidad) - 1 }
      : producto;
  });
};

const botonDecrementarProducto = (flanker) => {
  const existeProductoEnCarrito = carroArray.find((item) => item.flanker === flanker);

  if (existeProductoEnCarrito.cantidad === 1) {
    if (window.confirm("Desea eliminar el producto del carrito")) {
      // borrar producto
      borrarProductoDelCarrito(existeProductoEnCarrito);
    }
    return;
  }
  // Restar uno al producto existente
  restarUnidadProducto(existeProductoEnCarrito);
};

const botonIncrementarProducto = (flanker) => {
  const existeProductoEnCarrito = carroArray.find((item) => item.flanker === flanker);
  sumarUnidadAlProducto(existeProductoEnCarrito);
};

const botonBorrarProducto = (flanker) => {
  const existeProductoEnCarrito = carroArray.find((item) => item.flanker === flanker);
  borrarProductoDelCarrito(existeProductoEnCarrito);
};

const cantidadEnCarrito = (e) => {
  if (e.target.classList.contains("menos")) {
    botonDecrementarProducto(e.target.dataset.flanker);
  } else if (e.target.classList.contains("mas")) {
    botonIncrementarProducto(e.target.dataset.flanker);
  }
  else if (e.target.classList.contains("borrar")) {
    botonBorrarProducto(e.target.dataset.flanker);
  }
  estadoCarrito();
};

const vaciarCarritoDeCompras = () => {
  var opcion = window.confirm("¿Está seguro que desea vaciar el carrito?");
  if (opcion === true) {
    carroArray = [];
    estadoCarrito();
    alert('Carrito vaciado.');
  } else {
    alert('Cancelado exitosamente.');
  }
  estadoCarrito();
};

const finalizarCompra = () => {
  if (!carroArray.length) return;
  var respuesta = window.confirm('¿Desea finaliza la compra y abonar?');
  if (respuesta === true) {
    alert('Gracias por su compra!');
    carroArray = [];
    estadoCarrito();
  } else {
    alert('Continue comprando...')
  }
  estadoCarrito();
}

const estadoCarrito = () => {
  saveLocalStorage(carroArray);
  mostrarCarritoLista(carroArray);
  mostrarTotal(carroArray);
};

/***fin carrito de compras***/

const init = () => {
  document.addEventListener('DOMContentLoaded', estadoCarrito);
  document.addEventListener('DOMContentLoaded', mostrarCuriosidades);
  seccionMarcas.addEventListener('click', mostrarCategorias);
  iconoCarrito.addEventListener('click', mostrarCarrito);
  window.addEventListener('scroll', cerrarCarritoScroll);
  perfumes.addEventListener('click', agregarProduto);
  vaciar.addEventListener('click', vaciarCarritoDeCompras);
  comprar.addEventListener('click', finalizarCompra);
  listaCarrito.addEventListener('click', cantidadEnCarrito);
  iconoBasura.addEventListener('click', cantidadEnCarrito);
};

init();