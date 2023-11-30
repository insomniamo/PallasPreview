import tippy from 'tippy.js';

const ELEMENTS_SELECTOR = {
    tooltipFavorites: '[data-tippy-content]',
};

 function tooltip() {

    $(ELEMENTS_SELECTOR.tooltipFavorites).each(function (index, tooltip) {

        tippy(tooltip, {
            placement: 'top',
            arrow: false,
            animation: 'shift-forward',
            duration: 1000,
            theme: 'light',
            
        });
    });
}

export default tooltip();