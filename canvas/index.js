
const { info } = console;
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;
canvas.style.backgroundColor = '#ccc';

const imageArr = [1, 2, 3].map(file => utils.loadImg(`../assets/${file}.webp`));

Promise
    .all(imageArr)
    .then(images => {
        let posX = 0;
        images.forEach(image => {
            const { width, height } = image;
            const sWidth = Math.floor( width / 4);
            const sHeight = Math.floor(height / 4);
            ctx.drawImage(image, posX, 0, sWidth, sHeight);   
            posX += (sWidth + 20);             
        });
});