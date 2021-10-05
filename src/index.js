// import 'fslightbox';

// fsLightboxInstances['first-lightbox'].open(0);
// fsLightboxInstances['second-lightbox'].props.onOpen = () => console.log('Lightbox open!');


// import _ from 'lodash';

// function component() {
//     const element = document.createElement('div');
  
// // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }
  
//   document.body.appendChild(component());

import Swal from 'sweetalert2'
import { suma, saludo } from "./operaciones";

document.write(`<h1>${suma(1,7)}</h1>`)

console.log(suma(1,3));
console.log(saludo);

// Swal.fire({
//     title: 'Hola, Manuel',
//     text: 'At quaeque adversarium ius, sed at integre persius verterem. Sit summo tibique at, eam et fugit complectitur, vis te natum vivendum mandamus. Iudico quodsi cum ad, dicit everti sensibus in sea, ea eius paulo deterruisset pri.',
//     imageUrl: 'https://peru21.pe/resizer/akpGxAWAgdHYUs7wfhL_Sc4U5jk=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/W7VQFP45BFEX7B5RN22ICXT4NU.jpg',
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: 'Custom image',
//   })

Swal.fire({
    title: 'La Rosalia',
    width: 1200,
    padding: '3em',
    background: '#fff url(https://media0.giphy.com/media/23iumDlUpBaA053yKb/giphy.gif)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  })