let lock = JSON.parse(localStorage.getItem('lock'));

const html = document.getElementsByTagName("html")[0];

if (!lock) {
  html.innerHTML = "";
}