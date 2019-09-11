const img = document.querySelector('img');

fetch('misterioimg.jpg')
    .then(resp => resp.blob())
    .then(image => {
        var imgPath = URL.createObjectURL(image);
        console.log('imgPath', imgPath);
        img.src = imgPath;
    });