
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

const funDownload = (content, filename) => {
    // 创建隐藏的可下载链接
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    var blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
};


window.utils = {
    loadImg,
    funDownload,
};