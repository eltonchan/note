
const { info } = console;
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const range = document.querySelector('#range');

canvas.width = 600;
canvas.height = 600;
canvas.style.backgroundColor = '#ccc';

// ctx.strokeStyle = "dark";
// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.quadraticCurveTo(0, 100, 99, 4);
// ctx.stroke();

const imageArr = [1, 2, 3].map(file => utils.loadImg(`../assets/${file}.webp`));

// Promise
//     .all(imageArr)
//     .then(images => {
//         let posX = 0;
//         images.forEach(image => {
//             const { width, height } = image;
//             const sWidth = Math.floor( width / 4);
//             const sHeight = Math.floor(height / 4);
//             ctx.drawImage(image, posX, 0, sWidth, sHeight);   
//             posX += (sWidth + 20);             
//         });
// });
