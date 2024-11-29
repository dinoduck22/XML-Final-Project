document.addEventListener("mousemove", function(event) {
    let mouseX = event.pageX + 20;
    let mouseY = event.pageY + 20;
    let cursor = document.querySelector('.cursor');
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';

    // dicu-face movement
    let face = document.querySelector('.face');
    let head = document.querySelector('.dicu-head');
    const mouseCoords = head.getBoundingClientRect();
    face.style.left = (mouseX - mouseCoords.x - mouseCoords.width / 2) / mouseCoords.width * 40 + 'px';
    face.style.top = (mouseY - mouseCoords.y - mouseCoords.height / 2) / mouseCoords.height * 40 + 'px';
})