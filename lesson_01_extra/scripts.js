window.addEventListener('DOMContentLoaded', () => {
    let images = [
        'img/img_1.jpg',
        'img/img_2.jpg',
        'img/img_3.jpg'
    ];

    function loadImg(url) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => {
                resolve(url);
            }
            img.onerror = () => {
                reject(url);
            }
            img.src = url;
        });
    }

    function loadAndDisplayImgs(images) {
        let promiseImgs = images.map(loadImg);

        return promiseImgs.reduce((previousPromise, currentPromise) => {
            return previousPromise
                .then(() => {
                    return currentPromise;
                })
                .then((url) => {
                    let div = document.getElementById('images'),
                        image = document.createElement('img');

                    image.setAttribute("src", url);
                    image.style.width = '400px';
                    div.appendChild(image);
                    return Promise.resolve(url);
                })
                .catch((url) => {
                    console.error(`Не удалось загрузить изображение по указанному пути: ${url}`);
                    return Promise.resolve(url);
                });
        }, Promise.resolve());
    }
    loadAndDisplayImgs(images);
});
