import { gql } from "@apollo/client";

const GET_CAROUSELNEWS = gql`
    query CarouselNews {
        newss(orderBy: updatedAt_DESC, where: {isCarouselItem: true}) {
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

export default GET_CAROUSELNEWS;



