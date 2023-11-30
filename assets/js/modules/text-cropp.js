import dotdotdot from 'dotdotdot-js'

const ELEMENTS_SELECTOR = {
    title: '[data-card-mini-title]',
    description: '[data-card-mini-description]',
};


function checkWindowWidth() {
    if (window.matchMedia('(max-width: 767px)').matches) {
        $(ELEMENTS_SELECTOR.cardDescription).dotdotdot({
            ellipsis: "...",
            height: 105,
            truncate: "letter",
        });

        $(ELEMENTS_SELECTOR.cardTitle).dotdotdot({
            ellipsis: "...",
            height: 48,
            truncate: "letter",
        });
    } else {
        $(ELEMENTS_SELECTOR.cardDescription).dotdotdot({
            ellipsis: "...",
            height: 63,
            truncate: "letter",
        });

        $(ELEMENTS_SELECTOR.cardTitle).dotdotdot({
            ellipsis: "...",
            height: 54,
            truncate: "letter",
        });
    }

    return
};

export default function () {
    checkWindowWidth()

    $(ELEMENTS_SELECTOR.title).dotdotdot({
        ellipsis: "...",
        height: 24,
        truncate: "letter",
    });

    $(ELEMENTS_SELECTOR.description).dotdotdot({
        ellipsis: "...",
        height: 51,
        truncate: "letter",
    });

}

export {checkWindowWidth};