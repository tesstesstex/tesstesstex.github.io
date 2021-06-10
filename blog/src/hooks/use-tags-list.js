// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useTagsList = () => {
  const { allMicrocmsArticles } = useStaticQuery(
    graphql`
      query TagsListQuery {
        allMicrocmsArticles{
          group(field: tags) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allMicrocmsArticles.group;
};

export default useTagsList;
