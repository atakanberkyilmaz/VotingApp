import { gql } from "@apollo/client";

export const GET_QUESTIONS_SUBSCRIPTION = gql`
subscription QuestionSubscription{
    questions{
      id
      text
    }
  }
  `;