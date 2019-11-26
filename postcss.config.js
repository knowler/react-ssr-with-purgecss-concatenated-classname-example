require('@babel/register');

const ReactDOMServer = require('react-dom/server');
const App = require('./src/App').default;

module.exports = {
  plugins: {
    'postcss-import': true,
    'postcss-preset-env': {stage: 0},
    cssnano: true,
    '@fullhuman/postcss-purgecss': {
      content: [
        './src/**/*.html',
        './src/**/*.js',
        {
          raw: ReactDOMServer.renderToStaticMarkup(App()),
          extension: 'html',
        },
      ],
    },
  },
};
