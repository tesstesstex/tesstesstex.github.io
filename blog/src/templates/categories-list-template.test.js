// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import CategoriesListTemplate from './categories-list-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import allMicrocmsArticles from '../../jest/__fixtures__/all-markdown-remark';
import type { RenderCallback } from '../types';

describe('CategoriesListTemplate', () => {
  const props = {
    ...siteMetadata,
    ...allMicrocmsArticles
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(props)
      ),
      useStaticQuery.mockReturnValue(props)
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<CategoriesListTemplate />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
