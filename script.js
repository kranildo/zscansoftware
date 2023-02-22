const items = document.querySelectorAll('#nav li');

items.forEach(item => {
  item.addEventListener('click', () => {
    alert(`${item.textContent} foi clicado!`);
  });
});
