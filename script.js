const encriptacion = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };
  
  const desencriptacion = {
    'ufat': 'u',
    'ober': 'o',
    'ai': 'a',
    'imes': 'i',
    'enter': 'e',
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    const textareaIngresar = document.getElementById('ingresar');
    const textareaResultado = document.getElementById('resultado');
    const botonEncriptar = document.querySelector('.botonencriptar');
    const botonDesencriptar = document.querySelector('.botondesencriptar');
    const botonCopiar = document.querySelector('.botoncopiar');
  
    botonEncriptar.addEventListener('click', function() {
      const textoIngresado = textareaIngresar.value;
      if (textoIngresado.match(/[A-Z]/)) {
        alert('El texto a encriptar no puede contener letras mayúsculas.');
        return;
      }
      const textoEncriptado = encriptarTexto(textoIngresado);
      textareaResultado.value = textoEncriptado;
      textareaIngresar.value = ''; // Limpiar el textarea
    });
  
    botonDesencriptar.addEventListener('click', function() {
      const textoEncriptado = textareaIngresar.value;
      const textoDesencriptado = desencriptarTexto(textoEncriptado);
      textareaResultado.value = textoDesencriptado;
      textareaIngresar.value = '';
    });
  
    botonCopiar.addEventListener('click', function() {
      textareaResultado.select();
      document.execCommand('copy');
      alert('Texto copiado al portapapeles');
    });
  
    function encriptarTexto(texto) {
      return texto.split('').map(letra => encriptacion[letra] || letra).join('');
    }
  
    function desencriptarTexto(textoEncriptado) {
      let textoDesencriptado = textoEncriptado;
      for (let palabra in desencriptacion) {
        const regex = new RegExp(palabra, 'g');
        textoDesencriptado = textoDesencriptado.replace(regex, desencriptacion[palabra]);
      }
      return textoDesencriptado;
    }
  });
  