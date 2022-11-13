const noticiaSsd = document.querySelector('.noticiaSsd');
if (noticiaSsd) {
  noticiaSsd.addEventListener('click', () => {
    document.location.href = './paginas/noticiaSsd.html';
  });
}

const imgChat = document.querySelector('.imgChat');
if (imgChat) {
  imgChat.addEventListener('click', () => {
    alert('Chat en vivo');
  });
}
