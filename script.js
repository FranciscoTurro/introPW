const noticiaSsd = document.querySelector('.noticiaSsd');
if (noticiaSsd) {
  noticiaSsd.addEventListener('click', () => {
    document.location.href = './paginas/noticiaSsd.html';
  });
}

const noticiaEth = document.querySelector('.noticiaEth');
if (noticiaEth) {
  noticiaEth.addEventListener('click', () => {
    document.location.href = './paginas/noticiaEth.html';
  });
}

const noticiaSec = document.querySelector('.noticiaSecurity');
if (noticiaSec) {
  noticiaSec.addEventListener('click', () => {
    document.location.href = './paginas/noticiaSecurity.html';
  });
}

const imgChat = document.querySelector('.imgChat');
if (imgChat) {
  imgChat.addEventListener('click', () => {
    alert('Chat en vivo');
  });
}
