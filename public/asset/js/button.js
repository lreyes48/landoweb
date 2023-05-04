// Button stuff
const buttonHeight = 50;
const buttonWidth = 150;

const maxButtonX = window.innerWidth - buttonWidth;
const maxButtonY = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('button');
  
  button.addEventListener('click', () => alert('click'));

  button.addEventListener('mouseover', () => {
    button.style.left = Math.floor(Math.random() * (maxButtonX + 1)) + 'px';
    button.style.top = Math.floor(Math.random() * (maxButtonY + 1)) + 'px';
  });
});

