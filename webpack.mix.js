const mix = require('laravel-mix');

module.exports = {
    rules: [
        {
            test: /\.s(c|a)ss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                    options: {
                        implementation: require('sass'),
                        sassOptions: {
                            fiber: require('fibers'),
                            indentedSyntax: true // optional
                        },
                    },
                },
            ],
        },
    ],
}

mix.js('resources/js/app.js', 'public/js').vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .webpackConfig(require('./webpack.config'));

if (mix.inProduction()) {
    mix.version();
}

mix.browserSync({
    proxy: process.env.APP_URL,
    ghostMode: false
});