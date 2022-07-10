import path from 'path';

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: path.resolve('./src/components/layout.js'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
  ],
};
