import { gql } from 'graphql-request';

export const getAllSlugs = gql`
  query ($locale: I18NLocaleCode) {
    categories(locale: $locale, pagination: { limit: 1000 }) {
      data {
        attributes {
          slug
          products {
            data {
              attributes {
                slug
              }
            }
          }
        }
      }
    }
  }
`;
