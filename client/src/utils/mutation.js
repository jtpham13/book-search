import { gql } from '@apollo/client';


export const ADD_USER = gql`
query me {
    me {
      _id
      bookCount
      email
      username
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }`