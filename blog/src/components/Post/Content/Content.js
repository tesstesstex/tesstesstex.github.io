// @flow strict
import React from 'react';
import styles from './Content.module.scss';
import sanitize from 'sanitize-html';
import marked from 'marked';

type Props = {
  body: string,
  title: string,
};

const markdown = data => {
  console.log(data)
  console.log(marked(data))
  console.log(sanitize(marked(data), { allowedTags: sanitize.defaults.allowedTags.concat(['img']) }))
  return sanitize(marked(data), {
    allowedTags: sanitize.defaults.allowedTags.concat(['img']),
  });
};

const Content = ({ body, title }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div
      className={styles['content__body']}
      dangerouslySetInnerHTML={{ __html: markdown(body) }}
    />
  </div>
);

export default Content;
