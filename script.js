// Open Modal Function
window.openModal = function (imageSrc) {
    var modal = document.getElementById('image-modal');
    var modalImg = document.getElementById('modal-image');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
};

// Close Modal Function
window.closeModal = function () {
    var modal = document.getElementById('image-modal');
    modal.style.display = 'none';
};
function fadeOut(event) {
    event.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = event.currentTarget.href;
    }, 100);
}