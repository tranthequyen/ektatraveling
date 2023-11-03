document.addEventListener('DOMContentLoaded', function () {
      // Set the initial time (1 hour 30 minutes)
      let totalSeconds = 1 * 3600 + 30 * 60; // 1 hour 30 minutes
      let display = document.getElementById('display');

      function updateDisplay() {
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            display.textContent = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);

            if (totalSeconds > 0) {
                  totalSeconds--;
            } else {
                  clearInterval(timer);
            }
      }

      function pad(value) {
            return value < 10 ? '0' + value : value;
      }

      // Initial call to set the display
      updateDisplay();

      // Update the display every second
      let timer = setInterval(updateDisplay, 1000);
});

let currentIndex = 0;
const itemsToShow = 4;

function nextSlide() {
      const carouselInner = document.querySelector('.carousel-inner');
      const slideWidth = document.querySelector('.feedback_slide').offsetWidth;
      currentIndex = Math.min(currentIndex + 1, carouselInner.children.length - itemsToShow);
      const newTransformValue = `translateX(-${currentIndex * slideWidth}px)`;
      carouselInner.style.transform = newTransformValue;
}

function prevSlide() {
      const carouselInner = document.querySelector('.carousel-inner');
      const slideWidth = document.querySelector('.feedback_slide').offsetWidth;
      currentIndex = Math.max(currentIndex - 1, 0);
      const newTransformValue = `translateX(-${currentIndex * slideWidth}px)`;
      carouselInner.style.transform = newTransformValue;
}
$(document).ready(function () {
      $('.slider').slick({
            infinite: false,
            slidesToShow: 3.5,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                  {
                        breakpoint: 576, // Kích thước màn hình dưới đây sẽ áp dụng cấu hình này
                        settings: {
                              slidesToShow: 1.5, // Chỉ hiển thị 1 slide
                              slidesToScroll: 1
                        }
                  }
            ]
      });

      $('.next').click(function () {
            $('.slider').slick('slickNext');
      });

      $('.prev').click(function () {
            $('.slider').slick('slickPrev');
      });
});
