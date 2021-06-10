// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Tags.module.scss';
import _ from 'lodash';

type Props = {
  tags: string[],
};

const Tags = ({ tags }: Props) => (
  <div className={styles['tags']}>
    <ul className={styles['tags__list']}>
      {tags && tags.map((tag, i) => (
        <li className={styles['tags__list-item']} key={tags[i]}>
          <Link to={`/tag/${_.kebabCase(tag)}`} className={styles['tags__list-item-link']}>
            {tags[i]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;
