import dotdotdot from 'dotdotdot-js'
import {checkWindowWidth} from './text-cropp';

const ELEMENTS_SELECTOR = {
    tabs: '[data-tabs]',
    tab: '[data-tab]',
    section: 'data-tab-section',
};

export default function () {
    $(document).on('click', ELEMENTS_SELECTOR.tab, function() {
        let id = $(this).data('tab');
        let container = $(this).closest(ELEMENTS_SELECTOR.tabs);

        container.find(ELEMENTS_SELECTOR.tab).removeClass('tabs__item--active');
        container.find(`[${ELEMENTS_SELECTOR.section}]`).removeClass('tabs__block--active');

        $(this).addClass('tabs__item--active');
        container.find(`[${ELEMENTS_SELECTOR.section}="${id}"]`).addClass('tabs__block--active');

        checkWindowWidth();
    });
}