// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Lấy ngày hôm nay
    const today = new Date();
    // Tạo ngày kết thúc 14 ngày sau
    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 14);

    flatpickr("#dateRange", {
        mode: "range",
        dateFormat: "d-m-Y", // Sửa định dạng ngày thành "d-m-Y"
        defaultDate: [today, endDate],
    });
});
$(document).ready(function () {
    $('#dropdownSearch').select2();
});
$(document).ready(function () {
    $('#dropdownSearch2').select2();
});



values = [
    "All World",
    "All Europe",
    "Afghanistan (‫افغانستان‬‎)",
    "Albania (Shqipëri)",
    "Algeria (‫الجزائر‬‎)",
    "Antigua and Barbuda",
    "Armenia (Հայաստան)",
    "Australia",
    "Austria (Österreich)",
    "Azerbaijan (Azərbaycan)",
    "Bahrain (‫البحرين‬‎)",
    "Bangladesh (বাংলাদেশ)",
    "Belarus (Беларусь)",
    "Belgium (België)",
    "Bosnia and Herzegovina (Босна и Херцеговина)",
    "Brazil (Brasil)",
    "British Indian Ocean Territory",
    "Brunei",
    "Bulgaria (България)",
    "Cambodia",
    "Cameroon (Cameroun)",
    "Canada",
    "China (中国)",
    "Congo (Republic) (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia (Hrvatska)",
    "Cyprus (Κύπρος)",
    "Czech Republic (Česká republika)",
    "Denmark (Danmark)",
    "Dominican Republic (República Dominicana)",
    "Egypt (‫مصر‬‎)",
    "Estonia (Eesti)",
    "Fiji",
    "Finland (Suomi)",
    "France",
    "Georgia (საქართველო)",
    "Germany (Deutschland)",
    "Ghana (Gaana)",
    "Greece (Ελλάδα)",
    "Guinea (Guinée)",
    "Hong Kong (香港)",
    "Hungary (Magyarország)",
    "Iceland (Ísland)",
    "India (भारत)",
    "Indonesia",
    "Iran (‫ایران‬‎)",
    "Iraq (‫العراق‬‎)",
    "Ireland",
    "Israel (‫ישראל‬‎)",
    "Italy (Italia)",
    "Japan (日本)",
    "Jordan (‫الأردن‬‎)",
    "Kazakhstan (Казахстан)",
    "Kuwait (‫الكويت‬‎)",
    "Kyrgyzstan (Кыргызстан)",
    "Latvia (Latvija)",
    "Lebanon (‫لبنان‬‎)",
    "Libya (‫ليبيا‬‎)",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Malaysia",
    "Maldives",
    "Mauritius (Moris)",
    "Mexico (México)",
    "Moldova (Republica Moldova)",
    "Mongolia (Монгол)",
    "Montenegro",
    "Morocco (‫المغرب‬‎)",
    "Mozambique (Moçambique)",
    "Myanmar (Burma) (မြန်မာ)",
    "Nepal",
    "Netherlands (Nederland)",
    "New Caledonia (Nouvelle-Calédonie)",
    "Norway (Norge)",
    "Oman (‫عُمان‬‎)",
    "Pakistan (‫پاکستان‬‎)",
    "Palestine (‫فلسطين‬‎)",
    "Peru (Perú)",
    "Philippines",
    "Poland (Polska)",
    "Portugal",
    "Qatar (‫قطر‬‎)",
    "Romania (România)",
    "Russia (Россия)",
    "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
    "Senegal (Sénégal)",
    "Serbia (Србија)",
    "Seychelles",
    "Singapore",
    "Slovakia (Slovensko)",
    "Slovenia (Slovenija)",
    "Somalia (Soomaaliya)",
    "South Korea (대한민국)",
    "Spain (España)",
    "Sri Lanka (ශ්‍රී ලංකාව)",
    "Sudan (‫السودان‬‎)",
    "Sweden (Sverige)",
    "Switzerland (Schweiz)",
    "Syria (‫سوريا‬‎)",
    "Taiwan (台灣)",
    "Thailand (ไทย)",
    "Tunisia (‫تونس‬‎)",
    "Turkey (Türkiye)",
    "Turkmenistan",
    "Ukraine (Україна)",
    "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
    "United Kingdom",
    "United States",
    "Uzbekistan (Oʻzbekiston)",
    "Vietnam",
    "Yemen (‫اليمن‬‎)"
]
var select = $("#dropdownSearch");

// Lặp qua mảng giá trị và thêm từng option vào select
values.forEach(function (value) {
    select.append($("<option>", {
        value: value,
        text: value
    }));
});
$(document).ready(function () {
    // Lắng nghe sự kiện thay đổi trạng thái checked của radio buttons
    $('input[name="vbtn-radio"]').on('change', function () {
        if ($('#vbtn-radio1').is(':checked')) {
            $('#price').text('13.87 USD');
        } else if ($('#vbtn-radio2').is(':checked')) {
            $('#price').text('24.53  USD');
        } else if ($('#vbtn-radio3').is(':checked')) {
            $('#price').text('83.53  USD');
        }

    });
});


const scrollTo = document.querySelectorAll(".card_scroll")



scrollTo.forEach(function (button) {
    button.addEventListener('click', function () {
        // Lấy đối tượng footer
        const form = document.querySelector(".form-register-tour")
        var formY = form.offsetTop;
        window.scrollTo({
            top: formY,
            behavior: 'smooth' // Sử dụng 'smooth' để có hiệu ứng mượt mà
        });
    });
});


const scrollToPrice = document.querySelector(".price1")
const scrollToFor = document.querySelector(".for1")
const scrollToFeed = document.querySelector(".feedback1")
const scrollToContact = document.querySelector(".contact1")





scrollToContact.addEventListener('click', function () {
    // Lấy đối tượng footer
    var footer = document.querySelector('footer');
    var footerY = footer.offsetTop;

    // Di chuyển đến vị trí của footer
    window.scrollTo({
        top: footerY,
        behavior: 'smooth' // Sử dụng 'smooth' để có hiệu ứng mượt mà
    });
});
scrollToFeed.addEventListener('click', function () {
    // Lấy đối tượng footer
    var feed1 = document.querySelector('.feedback_container');
    var feed1Y = feed1.offsetTop;

    // Di chuyển đến vị trí của footer
    window.scrollTo({
        top: feed1Y,
        behavior: 'smooth' // Sử dụng 'smooth' để có hiệu ứng mượt mà
    });
});
scrollToFor.addEventListener('click', function () {
    // Lấy đối tượng footer
    var for1 = document.querySelector('.who');
    var for1Y = for1.offsetTop;

    // Di chuyển đến vị trí của footer
    window.scrollTo({
        top: for1Y,
        behavior: 'smooth' // Sử dụng 'smooth' để có hiệu ứng mượt mà
    });
});
scrollToPrice.addEventListener('click', function () {
    // Lấy đối tượng footer
    var card = document.querySelector('.card');
    var cardY = card.offsetTop;

    window.scrollTo({
        top: cardY,
        behavior: 'smooth' // Sử dụng 'smooth' để có hiệu ứng mượt mà
    });
})