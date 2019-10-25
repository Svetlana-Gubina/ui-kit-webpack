import './scripts/my-helper-module.js';
// import Icon from './img/insert_emoticon.png';
// import './pug/blocks/room-card-1/room-1.jpg';
// import './pug/blocks/room-card-2/room-2.jpg';
// import './pug/blocks/logo/toxin.png';
// import './pug/blocks/btn/arrow_forward.png';
import './scss/main.scss';

console.log(`Welcome from app! Let's learn Webpack`);

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML ='Test picture!';
    element.classList.add('hello');

   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Icon;

   element.appendChild(myIcon);
    return element;
  }

  document.body.appendChild(component());
