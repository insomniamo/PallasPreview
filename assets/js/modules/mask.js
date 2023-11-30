import Inputmask from "inputmask";

const ELEMENTS_SELECTOR = {
    maskTel: '[data-tel]',
    maskEmail: '[data-email]',
};

function maskInput() {

    $(ELEMENTS_SELECTOR.maskTel).each(function (index, tel) {
        Inputmask({
            "mask": "+7(999) 999-9999",
        }).mask(tel);
    });

    $(ELEMENTS_SELECTOR.maskEmail).each(function (index, email) {
        Inputmask("email").mask(email);
    });
}

export default maskInput();