// NOTA: Los alerts solo funcionan en navegador

document.addEventListener('DOMContentLoaded', () => {
    const divImages = document.getElementById('images');
    const addButton = document.getElementById('addButton');
    const deleteButton = document.getElementById('deleteButton');
    const inputNumber = document.getElementById('inputNumber');

    let imageCount = 0;

    addButton.addEventListener('click', () => {

        if (imageCount < 5) {

            const imageUrl = `https://via.placeholder.com/150?text=Image${imageCount + 1}`; // esta url xera placeholders
            const img = document.createElement('img');
            img.src = imageUrl;
            divImages.appendChild(img);
            imageCount++;

        } else {

            alert('Solo se permiten hasta 5 imágenes.');

        }
    });

    deleteButton.addEventListener('click', () => {

        const position = parseInt(inputNumber.value);

        if (position >= 1 && position <= imageCount) {

            const imgToDelete = divImages.querySelector(`img:nth-child(${position})`);

            if (imgToDelete) {

                divImages.removeChild(imgToDelete);
                imageCount--;

            }

        } else {

            alert(`Introduce un número entre 1 y ${imageCount}.`);

        }
    });
});