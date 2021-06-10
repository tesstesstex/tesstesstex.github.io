'use strict';

const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === 'MicrocmsArticles' ||
    node.internal.type === 'MarkdownRemark'
    // node.internal.type === 'SitePage'
    // typeof node.context.slug !== 'undefined'
  ) {
    if (typeof node.context.slug !== 'undefined') {
      createNodeField({
        node,
        name: 'slug',
        value: `/${node.context.slug}`,
      });
    } else {
      const value = createFilePath({ node, getNode });
      createNodeField({
        node,
        name: 'slug',
        value,
      });
    }

    if (node.tags) {
      const tagSlugs = node.tags.map(tag => `/tag/${_.kebabCase(tag)}/`);
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }

    if (node.category) {
      const categorySlug = `/category/${_.kebabCase(node.category)}/`;
      createNodeField({ node, name: 'categorySlug', value: categorySlug });
    }
  }
};

module.exports = onCreateNode;
