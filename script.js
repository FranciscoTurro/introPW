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

const noticiaAcceso = document.querySelector('.noticiaAcceso');
if (noticiaAcceso) {
  noticiaAcceso.addEventListener('click', () => {
    document.location.href = './paginas/noticiaAcceso.html';
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

const sub = document.querySelector('.sub');
if (sub) {
  sub.addEventListener('click', () => {
    const user = document.querySelector('#userName');
    const email = document.querySelector('#email');
    if (user.value && email.value) {
      localStorage.setItem('userValue', user.value);
      localStorage.setItem('emailValue', email.value);
      document.location.reload();
    } else {
      alert('Es necesario completar ambos campos!');
      return;
    }
  });
}

const changeLogin = () => {
  const userValue = localStorage.getItem('userValue');
  const emailValue = localStorage.getItem('emailValue');
  if (userValue && emailValue) {
    const login = document.querySelector('.login');
    login.innerHTML = `Hola, ${userValue}. Ya estas suscrito a nuestro boletín, podes esperarlo en ${emailValue}`;
    let btn = document.createElement('button');
    btn.innerHTML = 'Olvidar usuario';
    login.appendChild(btn);

    btn.addEventListener('click', () => {
      localStorage.removeItem('userValue');
      localStorage.removeItem('emailValue');
      document.location.reload();
    });
  }
};

addEventListener('load', () => {
  changeLogin();
});
