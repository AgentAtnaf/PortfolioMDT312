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
