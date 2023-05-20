const curiosidades = document.querySelector(".curiosidades");

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

const init = () => {
    document.addEventListener('DOMContentLoaded', mostrarCuriosidades);
};

init();