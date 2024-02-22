import { gql } from "@apollo/client";

const GET_SNACKS = gql`
    query getSnacks ($selectedCategory: String!) {
        snacks (where: { category: { name : $selectedCategory } }) {
            id
            name
            isNew
            description
            price
            imageSrc {
                url
            }
            category {
                name
            }
            imageWidthCustomSize
            imageHeightCustomSize
            bagImageWidthCustomSize
            bagImageHeightCustomSize
            
            
        }
    }
`;

export default GET_SNACKS;