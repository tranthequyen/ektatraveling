const tour_time = document.getElementById('tour-time')
flatpickr(tour_time, {
    dateFormat: "d.m.Y",
    minDate: 'today',
    mode: "range"
})

const tourTypes = [
    {
        title: 'start',
        cost: '13.87',
        selected: true,
    },
    {
        title: 'gold',
        cost: '24.53',
        selected: false,
    },
    {
        title: 'max+',
        cost: '83.53',
        selected: false,
    }
]

let touristList = [];
const restTypes = ['Quiet rest', 'Extreme / sport'];
const travelCountrys = ['All World', 'All Europe', 'Vietnamese', 'America', 'Japan', 'China', 'Canada'];

const eTourTypeList = document.querySelector('.tour-type');
const eRestTypeList = document.querySelector('.select-rest-type-list');
const eTravelCountryList = document.querySelector('.select-country-list');
const eContentTourRegister = document.querySelector('.tour-register-content');

const eShowCostTour = document.querySelector('.tour-cost-old');
const eShowRestType = document.querySelector('#rest-tour');
const eShowTravelCountry = document.querySelector('#tour-country');
const eShowStep_1 = document.querySelector('#step1');
const eShowStep_2 = document.querySelector('#step2');
const eShowStep_3 = document.querySelector('#step3');
const eShowStepCurrent = document.querySelector('.tour-step-current');

const eInputsStep2 = document.querySelectorAll('.tour-infor-show.step2');

const eCheckAcceptTerms = document.querySelector('.accept_terms-input');
const btnAddTourist = document.querySelector('#btn-add-tourist');
const btnNextStepRegister = document.querySelector('.btn-next-step');
const btnPrevStepRegister = document.querySelector('.btn-prev-step');
const btnBuyTour = document.querySelector('.btn-tour-register-buy');
const formRegisterTour = document.querySelector('#form-register-tour');

const tablistStepBtn = document.querySelectorAll('.tablist-step_item_btn');

let stepCurrentRegisterTour = 1;
let checkFirstName = false;
let checkLastName = false;
let checkPhoneNumber = false;
let checkEmail = false;
let checkPassport = false;
let checkBirthday = false;

function handleValidateEmpty(element, error) {
    if (!element.value) {
        element.classList.add('error');
        error.innerText = 'The value is required';
        return false;
    }
    return true;
}

function handleValidatePhone(element, error) {
    let value = element.value;
    const regx_phone = /^\d{10}$/;
    if (!regx_phone.test(value)) {
        element.classList.add('error');
        error.innerText = 'Phone is not valid';
        return false;
    }
    return true;
}

function handleValidateEmail(element, error) {
    let value = element.value;
    const regxEmail = /^[\w\.-]+@[\w\.-]+\.\w+$/;
    if (!regxEmail.test(value)) {
        element.classList.add('error');
        error.innerText = 'Email is not valid';
        return false;
    }
    return true;
}

function handleValidateBirthday(element, error) {
    let value = element.value;
    const regxBirthday = /^\d{2}.\d{2}.\d{4}$/;
    if (!regxBirthday.test(value)) {
        element.classList.add('error');
        error.innerText = 'Birthday is not valid, please enter a valid dd.mm.yyyy';
        return false;
    }
    return true;
}

eInputsStep2.forEach((item) => {
    let eParent = item.parentElement;
    while (!eParent.classList.contains('tour-infor-group')) {
        eParent = eParent.parentElement;
    }
    const eError = eParent.querySelector('.message-error');

    item.addEventListener('blur', () => {
        let type = item.getAttribute('name');
        switch (type) {
            case 'phone_number': {
                checkPhoneNumber = handleValidateEmpty(item, eError);
                if (checkPhoneNumber)
                    checkPhoneNumber = handleValidatePhone(item, eError);
                break;
            }
            case 'email': {
                checkEmail = handleValidateEmpty(item, eError);
                if (checkEmail) {
                    checkEmail = handleValidateEmail(item, eError);
                }
                break;
            }
            case 'birthday': {
                checkBirthday = handleValidateEmpty(item, eError);
                if (checkBirthday)
                    checkBirthday = handleValidateBirthday(item, eError);
                break;
            }
            default: {
                checkPhoneNumber = handleValidateEmpty(item, eError);
            }
        }
    })

    item.addEventListener('focus', (e) => {
        e.target.classList.remove('error');
        eError.innerText = ' ';
    })
})


function setTypeTourRegister(e) {
    e.preventDefault();
    e.stopPropagation();
    let costTour = e.target.getAttribute('data-value') + ' USD';
    let title = e.target.innerText;
    tourTypes.forEach((type) => {
        type.title.toUpperCase() === title.toUpperCase() ?
            type.selected = true :
            type.selected = false;
    })
    eShowCostTour.innerText = costTour;
    handleLoadTourTypes();
}

function handleLoadTourTypes() {
    const tourTypesHtml = tourTypes.map((type) => {
        let selected = type.selected ? 'active' : '';
        return `<button class="tour-type-item ${selected}" data-value=${type.cost}
        onclick="setTypeTourRegister(event)"
        >
            ${type.title}
        </button>`
    })
    eTourTypeList.innerHTML = tourTypesHtml.join(' ');
}

function setRestType(e) {
    e.preventDefault();
    e.stopPropagation();
    let type = e.target.innerText;
    eShowRestType.value = type;
}

function showRestTypes() {
    const restTypesHtml = restTypes.map((type) => {
        return `<li class="select-rest-type-item" onclick="setRestType(event)">${type}</li>`
    })
    eRestTypeList.innerHTML = restTypesHtml.join(' ')
}

function setTravelCountry(e) {
    e.preventDefault();
    e.stopPropagation();
    let country = e.target.innerText;
    eShowTravelCountry.value = country;
}

function ShowTravelCountry() {
    const travelCountrycHtml = travelCountrys.map((country) => {
        return `<li class="select-country-item" onclick="setTravelCountry(event)">${country}</li>`
    })
    eTravelCountryList.innerHTML = travelCountrycHtml.join(' ')
}

function showTypesTour() {
    handleLoadTourTypes();
}

function setStepCurrent() {
    tablistStepBtn.forEach((item, index) => {
        if (index == (stepCurrentRegisterTour - 1)) {
            tablistStepBtn[index].classList.add('active');
            tablistStepBtn[index].classList.remove('disabled');
        } else {
            tablistStepBtn[index].classList.remove('active');
            tablistStepBtn[index].classList.add('disabled');
        }
    })
}
function nextStepTourRegister() {
    switch (stepCurrentRegisterTour) {
        case 1:
            if (eCheckAcceptTerms.checked) {
                eShowStep_1.classList.add('prevStep');
                eShowStep_1.classList.remove('stepCurrent');
                stepCurrentRegisterTour++;
                eShowStepCurrent.innerText = stepCurrentRegisterTour;
                btnPrevStepRegister.style.display = 'block';
                eShowStep_2.classList.remove('nextStep');
                eShowStep_2.classList.add('stepCurrent');
                (touristList.length > 0) ? eContentTourRegister.style.paddingBottom = '492px' :
                    eContentTourRegister.style.paddingBottom = '290px';
                setStepCurrent();
            } else {
                let eParrent = eCheckAcceptTerms.parentElement;
                while (!eParrent.classList.contains('tour-infor-group')) {
                    eParrent = eParrent.parentElement;
                }
                let eError = eParrent.querySelector('.message-error');
                eError.innerText = 'The value is required';
            }
            break;
        case 2:
            let checkInput = false;
            eInputsStep2.forEach((item) => {
                let eParent = item.parentElement;
                while (!eParent.classList.contains('tour-infor-group')) {
                    eParent = eParent.parentElement;
                }
                const eError = eParent.querySelector('.message-error');
                checkInput = handleValidateEmpty(item, eError);
            })
            if (checkInput && checkBirthday && checkPhoneNumber) {
                btnNextStepRegister.classList.add('d-none');
                eContentTourRegister.style.paddingBottom = '290px';
                btnBuyTour.classList.remove('d-none');
                eShowStep_2.classList.add('prevStep');
                eShowStep_2.classList.remove('stepCurrent');
                eShowStep_3.classList.remove('nextStep');
                eShowStep_3.classList.add('stepCurrent');
                stepCurrentRegisterTour++;
                eShowStepCurrent.innerText = stepCurrentRegisterTour;
                setStepCurrent();
            }
            break;
        default:
            console.log('Lỗi lập trình!');
    }
}

function prevStepTourRegiter(e) {
    e.preventDefault();
    e.stopPropagation();
    stepCurrentRegisterTour--;
    if (stepCurrentRegisterTour == 1) {
        btnPrevStepRegister.style.display = 'none';
        eShowStep_1.classList.add('stepCurrent');
        eShowStep_1.classList.remove('prevStep');
        eShowStep_2.classList.add('nextStep');
        eShowStep_2.classList.remove('stepCurrent');
        eContentTourRegister.style.paddingBottom = '40px';
        eShowStepCurrent.innerText = stepCurrentRegisterTour;
        setStepCurrent();
    }
    else if (stepCurrentRegisterTour == 2) {
        btnNextStepRegister.classList.remove('d-none');
        (touristList.length > 0) ? eContentTourRegister.style.paddingBottom = '492px' :
            eContentTourRegister.style.paddingBottom = '290px';
        btnBuyTour.classList.add('d-none');
        eShowStep_2.classList.add('stepCurrent');
        eShowStep_2.classList.remove('prevStep');
        eShowStep_3.classList.add('nextStep');
        eShowStep_3.classList.remove('stepCurrent');
        eShowStepCurrent.innerText = stepCurrentRegisterTour;
        setStepCurrent();
    }
}

eCheckAcceptTerms.addEventListener('change', () => {
    let eParrent = eCheckAcceptTerms.parentElement;
    while (!eParrent.classList.contains('tour-infor-group')) {
        eParrent = eParrent.parentElement;
    }
    let eError = eParrent.querySelector('.message-error');
    eError.innerText = '';
})

const tourTouristContainer = document.querySelector('.tour-tourist-container');
const tourTouristList = document.querySelector('.tour-tourist-list');

function removeTouristItem(e) {
    e.preventDefault();
    e.stopPropagation();
    let eParrent = e.target.parentElement;;
    while (!eParrent.classList.contains('tour-tourist-item')) {
        eParrent = eParrent.parentElement;
    }
    let indexTourirt = eParrent.getAttribute('data-index');
    console.log(indexTourirt);
    touristList = touristList.filter((item, index) => (indexTourirt - 1) !== index)
    eParrent.remove();

    if (touristList.length == 0) {
        tourTouristContainer.classList.add('d-none');
        eContentTourRegister.style.paddingBottom = '290px';
    }
}
function addTourist(e) {
    e.preventDefault();
    e.stopPropagation();
    touristList.push({
        firstName: '',
        lastName: '',
        passport: '',
        birthday: ''
    });
    tourTouristContainer.classList.remove('d-none');
    eContentTourRegister.style.paddingBottom = '492px';
    const tourTouristItem = document.createElement('div');
    tourTouristItem.innerHTML = ` <div class="tour-tourist-item" data-index="${touristList.length}">
                                                <h5 class="tour-tourist-title">
                                                    Tourist № ${touristList.length}
                                                </h5>
                                                 <span class="close-tourist" onclick="removeTouristItem(event)">
                                                    <img src="./img/close.png" alt="" srcset="">
                                                </span>
                                                <div class="tour-tourist-infor">
                                                    <div class="tour-infor-group">
                                                        <label class="tour-infor-label">First name</label>
                                                        <div class="tour-infor-item">
                                                            <input class="tour-infor-show tour-tourist-input"
                                                                name="firstName_tourist" placeholder="Enter your name">
                                                        </div>
                                                        <p class="message-error"></p>
                                                    </div>
                                                    <div class="tour-infor-group">
                                                        <label class="tour-infor-label">Surname</label>
                                                        <div class="tour-infor-item">
                                                            <input class="tour-infor-show tour-tourist-input"
                                                                name="surname_tourist"
                                                                placeholder="Enter your last name">
                                                        </div>
                                                        <p class="message-error"></p>
                                                    </div>
                                                    <div class="tour-infor-group">
                                                        <label class="tour-infor-label">Passport:</label>
                                                        <div class="tour-infor-item">
                                                            <input class="tour-infor-show tour-tourist-input"
                                                                name="passport_tourist" placeholder="FA 273727">
                                                        </div>
                                                        <p class="message-error"></p>
                                                    </div>
                                                    <div class="tour-infor-group">
                                                        <label class="tour-infor-label">Birthday: </label>
                                                        <div class="tour-infor-item">
                                                            <input class="tour-infor-show tour-tourist-input"
                                                                name="birthday_tourist" placeholder="26.01.1990">
                                                        </div>
                                                        <p class="message-error"></p>
                                                    </div>
                                                </div>
                                            </div>
    `
    tourTouristList.appendChild(tourTouristItem);
}
btnNextStepRegister.addEventListener('click', nextStepTourRegister);
btnPrevStepRegister.addEventListener('click', prevStepTourRegiter);
btnAddTourist.addEventListener('click', addTourist);


const ePhoneInput = document.querySelector('#phone_number');
window.intlTelInput(ePhoneInput, {
    separateDialCode: true,
    utilsScript: "/js/utils.js",
});

formRegisterTour.addEventListener('submit', (e) => {
    e.preventDefault();
})
window.addEventListener('load', () => {
    showTypesTour();
    showRestTypes();
    ShowTravelCountry();
})


