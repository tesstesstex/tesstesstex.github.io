// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useCategoriesList = () => {
  const { allMicrocmsArticles } = useStaticQuery(
    graphql`
      query CategoriesListQuery {
        allMicrocmsArticles{
          group(field: category) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allMicrocmsArticles.group;
};

export default useCategoriesList;
