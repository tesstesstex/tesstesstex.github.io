// @flow strict
// import React from 'react';
// import { graphql } from 'gatsby';
// import Layout from '../components/Layout';
// import Sidebar from '../components/Sidebar';
// import Page from '../components/Page';
// import { useSiteMetadata } from '../hooks';
// import type { MicroCMSArticles } from '../types';
// // import type { MarkdownRemark } from '../types';

// type Props = {
// data: {
// microcmsArticles: MicroCMSArticles,
// },
// };

// const PageTemplate = ({ data }: Props) => {
// const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
// // const { html: pageBody } = data.microcmsArticles;
// const { contents: pageBody } = data.microcmsArticles;
// // const { title: pageTitle, description: pageDescription = '', socialImage } = data.microcmsArticles;
// const {
// title: pageTitle,
// description: pageDescription = '',
// socialImage,
// } = data.markdownRemark;
// const metaDescription = pageDescription || siteSubtitle;
// // const socialImageUrl = socialImage?.publicURL;
// // const socialImageUrl = socialImage === null || typeof socialImage === 'undefined' ? undefined : socialImage['publicURL'];

// return (
// // <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription} socialImage={socialImageUrl} >
// <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
// <Sidebar />
// <Page title={pageTitle}>
// <div dangerouslySetInnerHTML={{ __html: pageBody }} />
// </Page>
// </Layout>
// );
// };

// export const query = graphql`
// query PageBySlug($slug: String!) {
// microcmsArticles(articlesId: { eq: $slug }) {
// articlesId
// contents
// date
// description
// tags
// title
// }
// }
// `;

// export default PageTemplate;

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark,
  },
};

const PageTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const {
    title: pageTitle,
    description: pageDescription = '',
    socialImage,
  } = frontmatter;
  const metaDescription = pageDescription || siteSubtitle;
  const socialImageUrl = socialImage?.publicURL;

  return (
    <Layout
      title={`${pageTitle} - ${siteTitle}`}
      description={metaDescription}
      socialImage={socialImageUrl}
    >
      <Sidebar />
      <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        socialImage {
          publicURL
        }
      }
    }
  }
`;

export default PageTemplate;
