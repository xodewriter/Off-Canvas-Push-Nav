// Elements
const btn = document.querySelector('.btn');
const burger = document.querySelector('.burger');
const body = document.querySelector('BODY');
const mask = document.createElement('DIV');
const topnav = document.querySelector('#topnav');
const mq = window.matchMedia( "(min-width: 768px)" );

// Menu open state
let open = false;

let pushMenu = btn.addEventListener( 'click', ( e ) => {
  if( !open ) {
    open = true;
    btn.classList.add('open'); 
    burger.classList.add('open');
    body.appendChild(mask);
    mask.classList.add('mask');
    body.classList.add('open');
    // locks body, screen when menu opens
    body.style.overflow = 'hidden';  
    topnav.classList.add('closed');
  } else {
    open = false;
    btn.classList.remove('open'); 
    burger.classList.remove('open');
    // burger.style.opacity = '0';
    body.removeChild(mask);
    body.classList.remove('open');
    body.style.overflow = 'scroll'; // unlocks screen
    topnav.classList.remove('closed');
  }
});

export { pushMenu }