import { gql } from "@apollo/client";

const GET_SNACKS = gql`
    query getSnacks ($params: String!) {
        snacks (where: { category: { name : $params } }) {
            id
            name
            isNew
            description
            price
            logoSrc {
                url
            }
            secondaryLogoSrc {
                url
            }
            imageSrc {
                url
            }
            category {
                name
            }
        }
    }
`;

export default GET_SNACKS;