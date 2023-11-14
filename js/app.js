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


const next_step = document.getElementById("next_btn");
const step1 = document.querySelector(".top");
const step2 = document.querySelector(".top2");
const step3 = document.querySelector(".top3");
step1.classList.remove("hide");
step2.classList.add("hide");
step3.classList.add("hide");
const dateRangeInput = document.getElementById("dateRange");
const fromDateElement = document.querySelector(".from_date");
const dropdownSearch2 = document.getElementById("dropdownSearch2");
const tariffElement = document.querySelector(".tariff");
const countryElement = document.querySelector(".country");
const dropdownSearch = document.getElementById("dropdownSearch")
const firstName = document.getElementById("first_name")
const lastName = document.getElementById("last_name")
const birthday = document.getElementById("input_birthday")
const passport = document.getElementById("input_passport")
const email = document.getElementById("input_email")
const phone = document.getElementById("input_phone")
const fullnameElement = document.getElementById("fullname")
const birthdayElement = document.getElementById("birthday")
const passportElement = document.getElementById("passport")
const emailElement = document.getElementById("email")
const phoneElement = document.getElementById("phone")
const acceptCheckbox = document.getElementById("accept-checkbox");
const errorMessage = document.getElementById("error-message");
const step_1 = document.getElementById("step-1")
const step_2 = document.getElementById("step-2")
const step_3 = document.getElementById("step-3")
const current_step = document.getElementById("current_step")
const errorMessage1 = document.getElementById("error-message");
const back = document.querySelector(".back")

next_step.addEventListener("click", function () {

      // Kiểm tra nếu checkbox không được chọn
      if (!acceptCheckbox.checked) {
            // Hiển thị thông báo lỗi và ngăn chuyển sang bước tiếp theo
            errorMessage.style.display = "block";
            return; // Dừng hàm và không thực hiện tiếp
      } else {
            // Nếu checkbox được chọn, ẩn thông báo lỗi nếu đang hiển thị
            errorMessage.style.display = "none";
      }

      // Tiếp tục xử lý khi checkbox được chọn
      fromDateElement.textContent = dateRangeInput.value;
      tariffElement.textContent = dropdownSearch2.options[dropdownSearch2.selectedIndex].text;
      countryElement.textContent = dropdownSearch.options[dropdownSearch.selectedIndex].text;
      fullnameElement.textContent = firstName.value + " " + lastName.value;
      birthdayElement.textContent = birthday.value;
      passportElement.textContent = passport.value;
      emailElement.textContent = email.value;
      phoneElement.textContent = phone.value;

      if (!step1.classList.contains("hide")) {
            step1.classList.add("hide");
            step2.classList.remove("hide");
            step3.classList.add("hide");
            step_1.classList.remove("active")
            step_1.classList.add("disabled")
            step_2.classList.remove("disabled")
            step_2.classList.add("active")
            back.style.display = "block";
            current_step.textContent = "Step 2 / 3"
      } else if (!step2.classList.contains("hide")) {
            if (firstName.value === "") {
                  alert("Vui lòng nhập First Name");
                  return;
            }
            if (lastName.value === "") {
                  alert("Vui lòng nhập Last Name");
                  return;
            }
            if (birthday.value === "") {
                  alert("Vui lòng nhập birthday");
                  return;
            }
            if (email.value === "") {
                  alert("Vui lòng nhập email");
                  return;
            }
            if (phone.value === "") {
                  alert("Vui lòng nhập phone");
                  return;
            }


            else {
                  step1.classList.add("hide");
                  step2.classList.add("hide");
                  step3.classList.remove("hide");
                  step_2.classList.remove("active")
                  step_2.classList.add("disabled")
                  step_3.classList.remove("disabled")
                  step_3.classList.add("active")
                  next_step.textContent = "Buy"
            }
      }
});
back.addEventListener("click", function () {
      if (!step1.classList.contains("hide")) {
            // If currently on step 1, there is no step before it, so do nothing or handle as needed.
            return;
      } else if (!step2.classList.contains("hide")) {
            // If currently on step 2, go back to step 1
            step1.classList.remove("hide");
            step2.classList.add("hide");
            step3.classList.add("hide");
            step_1.classList.remove("disabled");
            step_1.classList.add("active");
            step_2.classList.remove("active");
            step_2.classList.add("disabled");
            back.style.display = "none"; // Hide the back button on step 1
            current_step.textContent = "Step 1 / 3";
      } else if (!step3.classList.contains("hide")) {
            // If currently on step 3, go back to step 2
            step1.classList.add("hide");
            step2.classList.remove("hide");
            step3.classList.add("hide");
            step_2.classList.remove("disabled");
            step_2.classList.add("active");
            step_3.classList.remove("active");
            step_3.classList.add("disabled");
            next_step.textContent = "Next";
            current_step.textContent = "Step 2 / 3";
      }
});
document.getElementById('alo').addEventListener('click', function () {
      var newElement = document.createElement('div');
      newElement.className = 'input_step2';
      newElement.innerHTML = `
      <div class="input_step2">
      <div class="input_left">

            <div class="item-input">
                  <p class="title_input">First name</p>
                  <input class="input_code" id="first_name"
                        placeholder="Enter Your Name">
                  <p class="error-message"
                        id="error-message1">The
                        value
                        is required !!</p>
            </div>
            <div class="item-input">
                  <p class="title_input">Phone number</p>
                  <input class="input_code" id="input_phone"
                        placeholder="Enter Your Name">
                  <p class="error-message"
                        id="error-message">The value
                        is required !!</p>
            </div>
            <div class="item-input">
                  <p class="title_input">Passport:</p>
                  <input class="input_code"
                        id="input_passport"
                        placeholder="Enter Your Passport">
                  <p class="error-message"
                        id="error-message">The value
                        is required !!</p>
            </div>


      </div>
      <div class="input_right">

            <div class="item-input">
                  <p class="title_input">Last
                        name</p>
                  <input id="last_name" class="input_code"
                        placeholder="Enter Your Name">
                  <p class="error-message"
                        id="error-message">The value
                        is required !!</p>
            </div>
            <div class="item-input">
                  <p class="title_input">Email</p>
                  <input class="input_code" id="input_email"
                        placeholder="Enter Your Name">
                  <p class="error-message"
                        id="error-message">The value
                        is required !!</p>
            </div>
            <div class="item-input">
                  <p class="title_input">Birthday:</p>
                  <input type="date" id="input_birthday"
                        class="input_code"
                        placeholder="Enter Your Name">
                  <br>
                  <p class="error-message"
                        id="error-message">The value
                        is required !!</p>
            </div>
      </div>
</div>
      `;
      document.querySelector('.top2').appendChild(newElement);
});
