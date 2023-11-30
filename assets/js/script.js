/**
 * Vendors
 */
import $ from 'jquery';
window.$ = $;

// Пример подключения плагина
// import pluginName from 'plugin-name';

/**
 * Modules
 */
// Пример подключения модуля
// import myModule from './modules/my-module-function';
import tabs from './modules/tabs';
import textCropp from './modules/text-cropp';
import menu from './modules/menu';
import mask from './modules/mask';
import swiper from './modules/swiper';
import showMore from './modules/show-more';
import tooltip from './modules/tooltip';

const app = {
    ready() {
        // Пример вызова импортированнывх функций
        // pluginName();
        tabs();
        textCropp();
        menu();
        mask();
        swiper();
        showMore();
        tooltip();
        // myModule();
    },

    load() {

    },

    resize() {

    },

    scroll() {

    },
};



$(() => {
    app.ready();

    $(window)
        .on('load', app.load)
        .on('resize', app.resize)
        .on('scroll', app.scroll);
});
