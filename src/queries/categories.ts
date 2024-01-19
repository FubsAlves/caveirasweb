import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
    query getCategories {
        categories {
            id
            name
            snackImage {
                url
            }
        }
    }
`;

export default GET_CATEGORIES;