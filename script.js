let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    
    // Убираем класс active у текущего слайда
    slides[currentSlide].classList.remove('active');
    
    // Вычисляем индекс следующего слайда
    currentSlide = (currentSlide + direction + slides.length) % slides.length;

    // Добавляем класс active к новому слайду
    slides[currentSlide].classList.add('active');
}

// Добавление поддержки свайпов
let startX;

const banner = document.getElementById('banner');

banner.addEventListener('touchstart', function(event) {
   startX = event.touches[0].clientX; // Запоминаем начальную позицию касания
});

banner.addEventListener('touchmove', function(event) {
   const moveX = event.touches[0].clientX; // Текущая позиция касания

   if (startX - moveX > 50) { // Свайп влево
       changeSlide(1);
   } else if (moveX - startX > 50) { // Свайп вправо
       changeSlide(-1);
   }
});