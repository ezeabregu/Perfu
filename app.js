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

const mostrarCuriosidades = () => {
    let i=0;
    curiosidades.innerHTML = curiosidad[0].texto;
    setInterval(() => {
      if (i >= 11) {
        i=0;
      } else {
        curiosidades.innerHTML = curiosidad[i].texto;
        i++;
      }
    }, 15000);
}

const mostrarCategoria = (categoria) => {
  const {id,flanker,imagen,precio,marca} = categoria;
  return `<div class="card">
            <img class="imagen__perfume" src="${imagen}" alt="${flanker}">
            <span class="marca__perfume"><strong>${marca}</strong></span>
            <span class="flanker__perfume">${flanker}</span>
            <span class="precio__perfume">$${precio}</span>
            <button class="boton__perfume">AGREGAR AL CARRITO</button>
          </div>`;
};

const mostrarCategoriaSeleccionada = (categoria) => {
  if (categoria === 'carolinaHerrera') {
    perfumes.innerHTML = chArray.map(mostrarCategoria).join("");
  } else if(categoria === 'dior'){
    perfumes.innerHTML = diorArray.map(mostrarCategoria).join("");
  }
  else if(categoria === 'givenchy'){
    perfumes.innerHTML = givenchyArray.map(mostrarCategoria).join("");
  }
  else if(categoria === 'mugler'){
    perfumes.innerHTML = muglerArray.map(mostrarCategoria).join("");
  }
  else if(categoria === 'pacoRabanne'){
    perfumes.innerHTML = pacoArray.map(mostrarCategoria).join("");
  }
};

const mostrarResultadoCategoria = (e) => {
 const categoriaSeleccionada = e.target.dataset.perfume;
};

const mostrarCategorias = (e) => {
     if(!e.target.classList.contains('marca__categoria'))return;
     mostrarResultadoCategoria(e);
     if (!e.target.dataset.perfume) {
        section__perfumes.innerHTML="";
     } 
     else {
      mostrarCategoriaSeleccionada(e.target.dataset.perfume);
     }
};

const init = () => {
    document.addEventListener('DOMContentLoaded', mostrarCuriosidades);
    seccionMarcas.addEventListener('click', mostrarCategorias);
};

init();