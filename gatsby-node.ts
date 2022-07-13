const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise<void>((resolve) => {
    graphql(`
      {
        allFeaturedPortfolioJson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allFeaturedPortfolioJson.edges.forEach(({ node }) => {
        createPage({
          path: `work/${node.slug}`,
          component: path.resolve('./src/templates/portfolioDetail.tsx'),
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });
};
