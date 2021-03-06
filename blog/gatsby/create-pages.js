'use strict';

const path = require('path');
const _ = require('lodash');
const createCategoriesPages = require('./pagination/create-categories-pages.js');
const createTagsPages = require('./pagination/create-tags-pages.js');
const createPostsPages = require('./pagination/create-posts-pages.js');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.js'),
  });

  // Tags list
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags-list-template.js'),
  });

  // Categories list
  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/categories-list-template.js'),
  });

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { template: { eq: "page" }, draft: { ne: true } }
        }
      ) {
        edges {
          node {
            frontmatter {
              template
              slug
            }
          }
        }
      }
      allMicrocmsArticles {
        edges {
          node {
            articlesId
            date
          }
        }
      }
    }
  `);

  const { edges } = result.data.allMarkdownRemark;
  edges.push(result.data.allMicrocmsArticles.edges);

  _.each(edges, edge => {
    if (_.get(edge, 'node.frontmatter.template') === 'page') {
      const slug = edge.node.frontmatter.slug;
      createPage({
        path: slug,
        component: path.resolve('./src/templates/page-template.js'),
        context: { slug },
      });
    } else {
      _.each(edge, ed => {
        const slug = ed.node.articlesId;
        createPage({
          path: slug,
          component: path.resolve('./src/templates/post-template.js'),
          context: { slug },
        });
      });
    }
  });

  // Feeds
  await createTagsPages(graphql, actions);
  await createCategoriesPages(graphql, actions);
  await createPostsPages(graphql, actions);
};

module.exports = createPages;
