import { gql } from "@apollo/client";

const GET_SNACKS = gql`
    query getSnacks ($selectedCategory: String!) {
        snacks (where: { category: { name : $selectedCategory } }, first: 60, orderBy: isNew_DESC) {
            id
            name
            isNew
            isActive
            description
            price
            imageSrc {
                url
            }
            category {
                name
            }
            itemList {
                id
                name
                imageSrc {
                    url
                }
            }
            snackRef {
                id
                name
                isNew
                isActive
                description
                price
                imageSrc {
                    url
                }
                itemList {
                    id
                    name
                    imageSrc {
                        url
                    }
                }
                
            }          
            
        }
    }
`;

export default GET_SNACKS;