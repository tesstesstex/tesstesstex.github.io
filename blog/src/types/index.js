// @flow strict
import type { Node as ReactNode } from 'react';

export type RenderCallback = {
  // $FlowFixMe
  render: (data: any) => ReactNode,
};

export type Entry = {
  getIn: (string[]) => string,
};

export type WidgetFor = string => string;

export type PageContext = {
  tag: string,
  category: string,
  currentPage: number,
  prevPagePath: string,
  nextPagePath: string,
  hasPrevPage: boolean,
  hasNextPage: boolean,
};

export type MDNode = {
  fields: {
    slug: string,
    categorySlug?: string,
    tagSlugs?: string[],
  },
  frontmatter: {
    date: string,
    slug: string,
    description?: string,
    category?: string,
    tags?: string[],
    title: string,
    socialImage?: {
      publicURL: string,
    },
  },
  html: string,
  id: string,
};

export type Node = {
  articlesId: string,
  category?: string,
  contents: string,
  date: string,
  description?: string,
  title: string,
  tags?: string[],
  id: string,
};

export type Edge = {
  node: Node,
};

export type MDEdge = {
  node: MDNode,
};

export type Edges = Array<Edge>;

export type MDEdges = Array<MDEdge>;

export type AllMarkdownRemark = {
  allMarkdownRemark: {
    edges: MDEdges,
  },
  group: {
    fieldValue: string,
    totalCount: number,
  }[],
};

export type AllMicroCMSArticles = {
  allMicrocmsArticles: {
    edges: Edges,
  },
  group: {
    fieldValue: string,
    totalCount: number,
  }[],
};

export type MarkdownRemark = MDNode;
export type MicroCMSArticles = Node;
