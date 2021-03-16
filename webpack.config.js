const path = require('path');
const mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        alias: {
            ziggy: path.resolve('vendor/tightenco/ziggy/dist/js/route.js')
        },
    },
});

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
};
