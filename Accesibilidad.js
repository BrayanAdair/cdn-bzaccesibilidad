!function(){let e=document.getElementById("bz-accesibilidad-widget");if(!e){console.error('No se encontr\xf3 el elemento con id "bz-accesibilidad-widget"');return}e.innerHTML=`
    <a class="btn-Accesibilidad" id="Accesibilidad">
      <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_logoAcc.png" style="width: 100%; height: 100%;">
    </a>

    <div id="bz-accesibilidad" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="bz-titulo">Men\xfa Accesibilidad </h2> &nbsp; <small> (CTRL + M)</small>
          <span class="close" onclick="closeModal()">&times;</span>
        </div>
        <div class="modal-body">
          <div>
            <a href="#" class="textos-voz no-redimensionar">
              <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_9.png" alt="Leer textos con voz"><p class="texto-dinamico">Leer p\xe1gina</p>
            </a>
          </div>
          <div>
            <a href="#" class="dislexia no-redimensionar">
              <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_10.png" alt="Icono Cursor"><p></p>
              Apto para dislexia
            </a>
          </div>
          <div>
            <a href="#" class="aumentar-tamano no-redimensionar">
              <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_1.png" alt="Icono Subir Tama\xf1o"><p></p>
              Subir Tama\xf1o+
            </a>
          </div>
          <div>
            <a href="#" class="disminuir-tamano no-redimensionar">
              <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_2.png" alt="Icono Bajar Tama\xf1o"><p></p>
              Bajar Tama\xf1o-
            </a>
          </div>
          <div>
            <a href="#" class="cambiar-contraste no-redimensionar">
              <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_3.png" alt="Cambiar Contraste"><p></p>
              Modo Nocturno
            </a>
          </div>
          <div>
            <a href="#" class="guia-lectura no-redimensionar">
              <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_4.png" alt="Gu\xeda Lectura"><p></p>
              Gu\xeda de lectura
            </a>
          </div>
          <div>
            <a href="#" class="resaltar-objeto no-redimensionar">
              <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_5.png" alt="Icono Resaltar Objeto"><p></p>
              Resaltar Objeto
            </a>
          </div>
          <div>
            <a href="#" class="cambiar-cursor no-redimensionar">
              <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_6.png" alt="Icono Cursor"><p></p>
              Cursor
            </a>
          </div>
          <div>
            <a href="#" class="reiniciar-configuracion no-redimensionar">
              <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_7.png" alt="Reiniciar configuracion"><p></p>
              Reiniciar
            </a>
          </div>
          <div>
            <a href="#" class="cambiar-posicion no-redimensionar">
              <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_8.png" alt="Posicion del Men\xfa"><p></p>
              Posici\xf3n
            </a>
          </div>
        </div>
        <div class="modal-footer">
          <a href="https://accesibilidad.bzsoftwares.com/">accesibilidad.bzsoftwares.com</a>
        </div>
      </div>
    </div>

    <div class="cursor">
      <div class="hl"></div>
    </div>
  `}();const domElements="a:not(.no-redimensionar),p:not(.no-redimensionar),h1:not(.no-redimensionar),h2:not(.no-redimensionar),h3:not(.no-redimensionar),h4:not(.no-redimensionar),h5:not(.no-redimensionar),h6:not(.no-redimensionar)",stepnum=3,minFontSize=10,ajustarTamanoFuente=(e,a)=>{document.querySelectorAll(e).forEach(e=>{let i=getComputedStyle(e),t=parseFloat(i.fontSize.replace("px",""))+a;t>=10&&(e.style.fontSize=`${t}px`)})},aumentarTamano=()=>{ajustarTamanoFuente(domElements,3)},disminuirTamano=()=>{ajustarTamanoFuente(domElements,-3)},aumentarBtn=document.querySelector(".aumentar-tamano"),disminuirBtn=document.querySelector(".disminuir-tamano"),modoNocturnoBtn=document.querySelector(".cambiar-contraste"),guiaBtn=document.querySelector(".guia-lectura"),resaltarBtn=document.querySelector(".resaltar-objeto"),cursorBtn=document.querySelector(".cambiar-cursor");aumentarBtn.onclick=e=>{e.preventDefault(),aumentarTamano()},disminuirBtn.onclick=e=>{e.preventDefault(),disminuirTamano()},modoNocturnoBtn.onclick=e=>{e.preventDefault(),document.body.classList.toggle("modo-nocturno")},guiaBtn.onclick=e=>{e.preventDefault(),document.querySelector(".cursor").classList.toggle("activo")},resaltarBtn.onclick=e=>{e.preventDefault();document.querySelectorAll(domElements).forEach(e=>{e.classList.toggle("highlight")})},cursorBtn.onclick=e=>{e.preventDefault(),document.body.classList.toggle("new-cursor")};const cursorHL=document.querySelector(".hl");document.addEventListener("mousemove",e=>{cursorHL.setAttribute("style",`top: ${e.clientY}px;`)});const tamanosIniciales=new Map,guardarTamanosIniciales=e=>{document.querySelectorAll(e).forEach(e=>{let a=getComputedStyle(e),i=parseFloat(a.fontSize.replace("px",""));tamanosIniciales.set(e,i)})},restaurarTamanos=()=>{tamanosIniciales.forEach((e,a)=>{a.style.fontSize=`${e}px`})},reiniciarConfiguraciones=()=>{restaurarTamanos(),document.body.classList.remove("modo-nocturno"),document.body.classList.remove("modo-dislexia"),document.body.classList.remove("new-cursor"),stopReading(),document.querySelector(".cursor").classList.remove("activo");document.querySelectorAll(domElements).forEach(e=>{e.classList.remove("highlight")})};guardarTamanosIniciales(domElements);const reiniciarBtn=document.querySelector(".reiniciar-configuracion");reiniciarBtn.onclick=e=>{e.preventDefault(),reiniciarConfiguraciones()};const cambiarPosicionBtn=document.querySelector(".cambiar-posicion");let posicionDerecha=!0;const cambiarPosicionModal=()=>{let e=document.querySelector(".modal-content");posicionDerecha?(e.style.right="auto",e.style.left="15px"):(e.style.left="auto",e.style.right="15px"),posicionDerecha=!posicionDerecha};cambiarPosicionBtn.onclick=e=>{e.preventDefault(),cambiarPosicionModal()};const dislexiaBtn=document.querySelector(".dislexia");dislexiaBtn.onclick=e=>{e.preventDefault(),document.body.classList.toggle("modo-dislexia")};const textosVozBtn=document.querySelector(".textos-voz"),textosVozTexto=textosVozBtn.querySelector(".texto-dinamico");let isReading=!1;textosVozBtn.onclick=e=>{e.preventDefault(),isReading?stopReading():startReading()};const startReading=()=>{let e=window.getSelection().toString();if(!e){alert("Por favor, selecciona el texto que deseas escuchar.");return}let a=new SpeechSynthesisUtterance(e);a.lang="es-MX",a.rate=1,a.pitch=1,a.volume=1;let i=window.speechSynthesis.getVoices(),t=i.find(e=>"es-ES"===e.lang&&e.name.includes("Google"));t&&(a.voice=t),a.onstart=()=>{isReading=!0,textosVozTexto.textContent="Detener lectura"},a.onend=()=>{isReading=!1,textosVozTexto.textContent="Leer con voz"},window.speechSynthesis.speak(a)},stopReading=()=>{window.speechSynthesis.cancel(),isReading=!1,textosVozTexto.textContent="Leer con voz"};function closeModal(){let e=document.getElementById("bz-accesibilidad");e.style.display="none"}function toggleModal(e){"block"===e.style.display?e.style.display="none":e.style.display="block"}document.getElementById("Accesibilidad").addEventListener("click",function(){let e=document.getElementById("bz-accesibilidad");toggleModal(e)}),window.addEventListener("click",function(e){let a=document.getElementById("bz-accesibilidad");e.target===a&&closeModal()}),window.addEventListener("keydown",function(e){if(e.ctrlKey&&"m"===e.key.toLowerCase()){let a=document.getElementById("bz-accesibilidad");toggleModal(a)}});