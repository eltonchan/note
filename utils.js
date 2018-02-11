
const loadImg = url => new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = function() {
        resolve(image);        
    };
    image.onerror = function() {
        reject(new Error('image onload error'));
    }
});

window.utils = {
    loadImg,
};