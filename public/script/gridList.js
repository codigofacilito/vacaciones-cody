const grid = document.getElementById('grid');
const list = document.getElementById('list');

grid.addEventListener('click', () => {
  const photos = document.querySelector('.photos');
  
  photos.classList.remove('list');
  photos.classList.add('grid');
  if(!grid.classList.contains('active')) {
    list.classList.remove('active');
    grid.classList.add('active');
  }
});

list.addEventListener('click', () => {
  const photos = document.querySelector('.photos');
  
  photos.classList.remove('grid');
  photos.classList.add('list');

  if(!list.classList.contains('active')) {
    grid.classList.remove('active');
    list.classList.add('active');
  }
});

window.addEventListener('load', () => {
  document.body.style.transition = '';
})