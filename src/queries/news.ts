import { gql } from "@apollo/client";

const GET_NEWS = gql`
    query News {
        newss(where: { isCarouselItem: false }, orderBy: updatedAt_DESC) {
            id
            image {
                url
            }
            snackRef {
                name
                category {
                    name
                }
            }
        }
    } 
`;

export default GET_NEWS;



