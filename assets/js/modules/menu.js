const ELEMENTS_SELECTOR = {
    open: '[data-open]',
    close: '[data-close]',
    nav: '[data-nav]',
    container: '[data-nav-container]',
};

export default function () {
    $(document).on('click', ELEMENTS_SELECTOR.open, function() {
        $(ELEMENTS_SELECTOR.nav).addClass('page__nav--active');
        $(ELEMENTS_SELECTOR.container).addClass('nav__container--active');
        $('body').css('overflow', 'hidden');
    });
    $(document).on('click', ELEMENTS_SELECTOR.close, function() {
        $(ELEMENTS_SELECTOR.nav).removeClass('page__nav--active');
        $(ELEMENTS_SELECTOR.container).removeClass('nav__container--active');
        $('body').css('overflow', 'auto');
    });
}