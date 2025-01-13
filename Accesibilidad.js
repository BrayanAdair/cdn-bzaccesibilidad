// Version: 1.0
(function(){const widgetContainer=document.getElementById("bz-accesibilidad-widget");if(!widgetContainer){console.error('No se encontró el elemento con id "bz-accesibilidad-widget"');return}
widgetContainer.innerHTML=`
  <a class="btn-Accesibilidad" id="Accesibilidad">
    <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_logoAcc.png" style="width: 100%; height: 100%;">
  </a>

  <div id="bz-accesibilidad" class="bz-modal">
    <div class="bz-modal-content">
      <div class="bz-modal-header">
        <h2 class="bz-titulo">Menú Accesibilidad </h2> &nbsp; <b class="bz-subtitulo"> (CTRL + M)</b>
        <span class="close" onclick="closeModal()">&times;</span>
      </div>
      <div class="bz-modal-body">
        
        <div>
          <a href="#" class="textos-voz no-redimensionar">
            <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_9.png" alt="Leer textos con voz"><p></p><p class="texto-dinamico no-redimensionar">Leer página</p>
          </a>
        </div>
        <div>
          <a href="#" class="dislexia no-redimensionar">
            <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_10.png" alt="Apto para dislexia"><p></p>
            Apto para dislexia
          </a>
        </div>
        <div>
          <a href="#" class="aumentar-tamano no-redimensionar">
            <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_1.png" alt="Icono Subir Tamaño"><p></p>
            Subir Tamaño+
          </a>
        </div>
        <div>
          <a href="#" class="disminuir-tamano no-redimensionar">
            <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_2.png" alt="Icono Bajar Tamaño"><p></p>
            Bajar Tamaño-
          </a>
        </div>
        <div>
          <a href="#" class="cambiar-contraste no-redimensionar">
            <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_3.png" alt="Modo Oscuro"><p></p>
            Modo Oscuro
          </a>
        </div>
        <div>
          <a href="#" class="guia-lectura no-redimensionar">
            <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_4.png" alt="Guía Lectura"><p></p>
            Guía de lectura
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
            <img src="https://accesibilidad.bzsoftwares.com/thumbnails/tn_8.png" alt="Posicion del Menú"><p></p>
            Posición
          </a>
        </div>
     
      </div>
      <div class="bz-modal-footer">
        <a href="https://accesibilidad.bzsoftwares.com/">accesibilidad.bzsoftwares.com</a>
      </div>
    </div>
  </div>

  <div class="cursor">
    <div class="hl"></div>
  </div>
`})();const domElements="a:not(.no-redimensionar),p:not(.no-redimensionar),h1:not(.no-redimensionar),h2:not(.no-redimensionar),h3:not(.no-redimensionar),h4:not(.no-redimensionar),h5:not(.no-redimensionar),h6:not(.no-redimensionar)";const stepnum=3;const minFontSize=10;const ajustarTamanoFuente=(el,step)=>{let elements=document.querySelectorAll(el);elements.forEach((el)=>{let style=getComputedStyle(el);let fontNum=parseFloat(style.fontSize.replace("px",""));let newFontSize=fontNum+step;if(newFontSize>=minFontSize){el.style.fontSize=`${newFontSize}px`}})};const aumentarTamano=()=>{ajustarTamanoFuente(domElements,stepnum)};const disminuirTamano=()=>{ajustarTamanoFuente(domElements,-stepnum)};const aumentarBtn=document.querySelector(".aumentar-tamano");const disminuirBtn=document.querySelector(".disminuir-tamano");const modoNocturnoBtn=document.querySelector(".cambiar-contraste");const guiaBtn=document.querySelector(".guia-lectura");const resaltarBtn=document.querySelector(".resaltar-objeto");const cursorBtn=document.querySelector(".cambiar-cursor");aumentarBtn.onclick=(e)=>{e.preventDefault();aumentarTamano()};disminuirBtn.onclick=(e)=>{e.preventDefault();disminuirTamano()};modoNocturnoBtn.onclick=(e)=>{e.preventDefault();const isDarkMode=document.body.classList.toggle("modo-nocturno");const images=[{selector:'.textos-voz img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_9_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_9.png'},{selector:'.dislexia img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_10_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_10.png'},{selector:'.aumentar-tamano img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_1_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_1.png'},{selector:'.disminuir-tamano img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_2_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_2.png'},{selector:'.cambiar-contraste img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_3_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_3.png'},{selector:'.resaltar-objeto img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_5_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_5.png'},{selector:'.guia-lectura img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_4_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_4.png'},{selector:'.cambiar-cursor img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_6_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_6.png'},{selector:'.reiniciar-configuracion img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_7_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_7.png'},{selector:'.cambiar-posicion img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_8_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_8.png'}];images.forEach(image=>{const imgElement=document.querySelector(image.selector);if(imgElement){imgElement.src=isDarkMode?image.darkSrc:image.lightSrc}})};guiaBtn.onclick=(e)=>{e.preventDefault();document.querySelector(".cursor").classList.toggle("activo")};resaltarBtn.onclick=(e)=>{e.preventDefault();let elements=document.querySelectorAll(domElements);elements.forEach((el)=>{el.classList.toggle("highlight")})};cursorBtn.onclick=(e)=>{e.preventDefault();document.body.classList.toggle("new-cursor")};const cursorHL=document.querySelector(".hl");document.addEventListener("mousemove",(e)=>{cursorHL.setAttribute("style",`top: ${e.clientY}px;`)});const tamanosIniciales=new Map();const guardarTamanosIniciales=(el)=>{let elements=document.querySelectorAll(el);elements.forEach((el)=>{let style=getComputedStyle(el);let fontNum=parseFloat(style.fontSize.replace("px",""));tamanosIniciales.set(el,fontNum)})};const restaurarTamanos=()=>{tamanosIniciales.forEach((size,el)=>{el.style.fontSize=`${size}px`})};const reiniciarConfiguraciones=()=>{restaurarTamanos();document.body.classList.remove("modo-nocturno");document.body.classList.remove("modo-dislexia");document.body.classList.remove("modo-dislexia");const elementsDisle=document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span, label, input[type="text"], textarea, .btn, .button');elementsDisle.forEach(elementsDisle=>{elementsDisle.style.fontFamily="";elementsDisle.style.letterSpacing="";elementsDisle.style.lineHeight=""});document.body.classList.remove("new-cursor");stopReading();document.querySelector(".cursor").classList.remove("activo");let elements=document.querySelectorAll(domElements);elements.forEach((el)=>{el.classList.remove("highlight")});const images=[{selector:'.textos-voz img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_9_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_9.png'},{selector:'.dislexia img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_10_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_10.png'},{selector:'.aumentar-tamano img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_1_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_1.png'},{selector:'.disminuir-tamano img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_2_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_2.png'},{selector:'.cambiar-contraste img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_3_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_3.png'},{selector:'.resaltar-objeto img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_5_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_5.png'},{selector:'.guia-lectura img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_4_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_4.png'},{selector:'.cambiar-cursor img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_6_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_6.png'},{selector:'.reiniciar-configuracion img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_7_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_7.png'},{selector:'.cambiar-posicion img',darkSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_8_dark.png',lightSrc:'https://accesibilidad.bzsoftwares.com/thumbnails/tn_8.png'}];images.forEach(image=>{const imgElement=document.querySelector(image.selector);if(imgElement){imgElement.src=image.lightSrc}});document.getElementById('resetButton').addEventListener('click',reiniciarConfiguracion)};guardarTamanosIniciales(domElements);const reiniciarBtn=document.querySelector(".reiniciar-configuracion");reiniciarBtn.onclick=(e)=>{e.preventDefault();reiniciarConfiguraciones()};const cambiarPosicionBtn=document.querySelector(".cambiar-posicion");let posicionDerecha=!0;const cambiarPosicionModal=()=>{const modal=document.querySelector(".bz-modal-content");if(posicionDerecha){modal.style.right="auto";modal.style.left="15px"}else{modal.style.left="auto";modal.style.right="15px"}
posicionDerecha=!posicionDerecha};cambiarPosicionBtn.onclick=(e)=>{e.preventDefault();cambiarPosicionModal()};const dislexiaBtn=document.querySelector(".dislexia");dislexiaBtn.onclick=(e)=>{e.preventDefault();document.body.classList.toggle("modo-dislexia");const elements=document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span, label, input[type="text"], textarea, .btn, .button');elements.forEach(element=>{if(document.body.classList.contains("modo-dislexia")){element.style.fontFamily="UDDyslexia, serif";element.style.letterSpacing="0.05em";element.style.lineHeight="1.4"}else{element.style.fontFamily="";element.style.letterSpacing="";element.style.lineHeight=""}})};const textosVozBtn=document.querySelector(".textos-voz");const textosVozTexto=textosVozBtn.querySelector(".texto-dinamico");let isReading=!1;textosVozBtn.onclick=(e)=>{e.preventDefault();if(isReading){stopReading()}else{startReading()}};const startReading=()=>{const selectedText=window.getSelection().toString();if(!selectedText){alert("Por favor, selecciona el texto que deseas escuchar.");return}
const utterance=new SpeechSynthesisUtterance(selectedText);utterance.lang="es-MX";utterance.rate=1;utterance.pitch=1;utterance.volume=1;const voices=window.speechSynthesis.getVoices();const preferredVoice=voices.find((voice)=>voice.lang==="es-ES"&&voice.name.includes("Google"));if(preferredVoice){utterance.voice=preferredVoice}
utterance.onstart=()=>{isReading=!0;textosVozTexto.textContent="Detener lectura"};utterance.onend=()=>{isReading=!1;textosVozTexto.textContent="Leer con voz"};window.speechSynthesis.speak(utterance)};const stopReading=()=>{window.speechSynthesis.cancel();isReading=!1;textosVozTexto.textContent="Leer con voz"};document.getElementById("Accesibilidad").addEventListener("click",function(){const modal=document.getElementById("bz-accesibilidad");toggleModal(modal)});function closeModal(){const modal=document.getElementById("bz-accesibilidad");modal.style.display="none"}
function toggleModal(modal){if(modal.style.display==="block"){modal.style.display="none"}else{modal.style.display="block"}}
window.addEventListener("click",function(event){const modal=document.getElementById("bz-accesibilidad");if(event.target===modal){closeModal()}});window.addEventListener("keydown",function(event){if(event.ctrlKey&&event.key.toLowerCase()==="m"){const modal=document.getElementById("bz-accesibilidad");toggleModal(modal)}})