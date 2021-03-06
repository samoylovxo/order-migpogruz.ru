'use strict';

const modalClose = document.getElementById('modal-close');
const formModal = document.getElementById('form-modal');
const buttonOpenForm = document.getElementById('open-form-btn');
const headerTop = document.getElementById('header-top');

function openModals() {
    const closeModalForm = (e) => {
        let target = e.target;
        console.log(target);

        formModal.classList.toggle('form-active');
        headerTop.classList.toggle('header-top-hidden');
    };

    modalClose.addEventListener('click', closeModalForm);
    buttonOpenForm.addEventListener('click', closeModalForm);
}

openModals();

$('.modal-close span').click(function () {
    $('.popup-send-form').removeClass('popup-active');
    // headerTop.classList.remove('form-active');
});
$('.popup-send-form').on('click', function (e) {
    if (e.target == this) {
        $('.popup-send-form').fadeOut('fast');
        $('.popup-send-form').removeClass('popup-active');
        // headerTop.classList.remove('form-active');
    }
});

function infoViewScroll() {
    const reveal = document.getElementsByClassName('main');

    function viewInfo() {
        [...reveal].forEach((elem) => {
            if (elem.getBoundingClientRect().top < window.innerHeight) {
                elem.classList.add('show-content');
            } else if (
                elem.getBoundingClientRect().bottom > window.innerHeight
            ) {
                elem.classList.remove('show-content');
            }
        });
    }

    document.addEventListener('scroll', viewInfo);
}

infoViewScroll();
