import { gql } from "@apollo/client";

const GET_SNACKS = gql`
    query getSnacks ($selectedCategory: String!) {
        snacks (where: { category: { name : $selectedCategory } }) {
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