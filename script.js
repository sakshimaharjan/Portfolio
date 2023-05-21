// put theme into local storage
let theme = localStorage.getItem('theme');

if (theme == null) {
  setTheme('light');
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == 'light') {
    document.getElementById('theme-style').href = 'default.css';
  }

  if (mode == 'blue') {
    document.getElementById('theme-style').href = 'blue.css';
  }

  if (mode == 'green') {
    document.getElementById('theme-style').href = 'green.css';
  }

  if (mode == 'purple') {
    document.getElementById('theme-style').href = 'purple.css';
  }

  localStorage.setItem('theme', mode);
}

/**
 * Name element (a tag with "Sakshi") related code
 */
const nameElement = document.getElementById('first_name');
nameElement.addEventListener('mouseenter', () => {
  nameElement.innerHTML = 'Sakshi🔊';
});
nameElement.addEventListener('mouseleave', () => {
  nameElement.innerHTML = 'साक्षी';
});
nameElement.addEventListener('click', () => {
  const audioFile = new Audio('./audio/Sakshi.mp3');
  audioFile.play();
});
