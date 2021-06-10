// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';
// import type { MarkdownRemark } from '../types';
import type { MicroCMSArticles } from '../types';

type Props = {
  data: {
    microcmsArticles: MicroCMSArticles
  }
};

const PostTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { title: postTitle, description: postDescription = '' } = data.microcmsArticles;
  // const { frontmatter } = data.microCMSArticles;
  // const { title: postTitle, description: postDescription = '' } = frontmatter;
  const metaDescription = postDescription || siteSubtitle;
  // const socialImageUrl = socialImage?.publicURL;

  return (
    <Layout
      title={`${postTitle} - ${siteTitle}`}
      description={metaDescription}
      // socialImage={socialImageUrl}
    >
      <Post post={data.microcmsArticles} />
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query PostBySlug($slug: String!) {
    microcmsArticles(articlesId: { eq: $slug }) {
      id
      articlesId
      contents
      category
      date
      description
      tags
      title
    }
  }
`;
