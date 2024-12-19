
document.querySelectorAll('.moving-image').forEach(image => {
    image.addEventListener('mousemove', (e) => {
        const rect = image.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const movement = (mouseX / rect.width) * 20 - 10;
        image.style.transition = 'none';
        image.style.transform = `translateX(${movement}px)`;
    });

    image.addEventListener('mouseleave', () => {
        image.style.transition = 'transform 0.3s ease';
        image.style.transform = 'translateX(0)';
    });
});


const images = document.querySelectorAll('.moving-image');

images.forEach(image => {
    image.addEventListener('click', () => {
      
        const altSrc = image.getAttribute('data-alt-src');
        const currentSrc = image.getAttribute('src');

        if (currentSrc === altSrc) {
            
            image.setAttribute('src', image.dataset.originalSrc);
            image.classList.remove('hidden'); 
        } else {
           
            image.dataset.originalSrc = currentSrc;
            image.setAttribute('src', altSrc);
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
  
    const images = document.querySelectorAll(".mobile-only-image");

    images.forEach((image) => {
       
        const originalSrc = image.src;
        const altSrc = image.getAttribute("data-alt-src");

      
        image.addEventListener("click", () => {
            if (image.src === originalSrc && altSrc) {
               
                image.src = altSrc;
            } else {
              
                image.src = originalSrc;
            }
        });
    });
});

if (altSrc) {
    image.src = altSrc;
} else {
    console.error("data-alt-src 속성이 없습니다.");
}

