// Open the modal when an image is clicked
const images = document.querySelectorAll('.gallery-grid img');
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

// Modal image and close button
const modalImg = document.createElement('img');
modal.appendChild(modalImg);
const closeButton = document.createElement('span');
closeButton.classList.add('close');
closeButton.innerText = '×';
modal.appendChild(closeButton);

// When an image is clicked, show it in the modal
images.forEach(image => {
    image.addEventListener('click', (e) => {
        modal.style.display = 'flex';
        modalImg.src = e.target.src;
    });
});

// Close the modal when the close button is clicked
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});
