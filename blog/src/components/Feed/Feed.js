// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { format } from 'date-fns';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={ format(new Date(edge.node.frontmatter.date), 'yyyy/MM/dd') }>
          { format(new Date(edge.node.frontmatter.date), 'yyyy/MM/dd') }
          </time>
          <span className={styles['feed__item-meta-divider']} />
          <span className={styles['feed__item-meta-category']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <h2 className={styles['feed__item-title']}>
          <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        <p>
          <Link className={styles['feed__item-description']} to={edge.node.fields.slug}>{edge.node.frontmatter.description}</Link>
          <br />
          <Link to={edge.node.fields.slug}>read more</Link>
        </p>
      </div>
    ))}
  </div>
);

export default Feed;
