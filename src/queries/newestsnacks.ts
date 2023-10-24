import { gql } from "@apollo/client";

const GET_NEWESTSNACKS = gql`
    query SnacksByNewest {
    snacks(where: {isNew: true}, orderBy: updatedAt_DESC) {
      id
      name
      description
      isNew
      logoSrc {
        url
      }
      secondaryLogoSrc {
        url
      }
      isNew
      
      imageSrc {
        url
      }
      price
    }
  }
`;

export default GET_NEWESTSNACKS;



