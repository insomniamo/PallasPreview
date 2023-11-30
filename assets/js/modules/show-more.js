const ELEMENTS_SELECTOR = {
    container: '[data-show]',
    button: '[data-show-toggle]',
    content: '[data-show-content]',
    toggleText: '[data-show-toggle-text]',
};

function showMore() {
    $(document).on('click', ELEMENTS_SELECTOR.button, function () {
        const $parent = $(this).closest(ELEMENTS_SELECTOR.container);
        const $content = $parent.find(ELEMENTS_SELECTOR.content);
        const $toggleText = $(this).find(ELEMENTS_SELECTOR.toggleText);

        $content.toggleClass('show-more__hidden');
        $(this).toggleClass('show-more__toggle--active');

        if ($(this).hasClass('show-more__toggle--active')) {
            $toggleText.text('Скрыть');
        } else {
            $toggleText.text('Показать еще');
        }
    });
}

export default showMore();