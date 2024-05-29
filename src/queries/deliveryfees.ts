import { gql } from "@apollo/client";

const GET_DELIVERYFEES = gql`
    query deliveryFees {
        fees(first: 50) {
            bairro
            feeValue
        }
    }
`;

export default GET_DELIVERYFEES;