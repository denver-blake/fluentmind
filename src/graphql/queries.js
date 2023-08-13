/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWord = /* GraphQL */ `
  query GetWord($text: String!, $translation: String!) {
    getWord(text: $text, translation: $translation) {
      text
      translation
      language
      sentences {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listWords = /* GraphQL */ `
  query ListWords(
    $text: String
    $translation: ModelStringKeyConditionInput
    $filter: ModelWordFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWords(
      text: $text
      translation: $translation
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        text
        translation
        language
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSentence = /* GraphQL */ `
  query GetSentence($text: String!, $translation: String!) {
    getSentence(text: $text, translation: $translation) {
      text
      translation
      language
      words {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSentences = /* GraphQL */ `
  query ListSentences(
    $text: String
    $translation: ModelStringKeyConditionInput
    $filter: ModelSentenceFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSentences(
      text: $text
      translation: $translation
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        text
        translation
        language
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserWord = /* GraphQL */ `
  query GetUserWord($id: String!) {
    getUserWord(id: $id) {
      id
      word {
        text
        translation
        language
        createdAt
        updatedAt
        __typename
      }
      wordText
      wordTranslation
      randId
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserWords = /* GraphQL */ `
  query ListUserWords(
    $id: String
    $filter: ModelUserWordFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserWords(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        wordText
        wordTranslation
        randId
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserSentence = /* GraphQL */ `
  query GetUserSentence($id: String!) {
    getUserSentence(id: $id) {
      id
      sentence {
        text
        translation
        language
        createdAt
        updatedAt
        __typename
      }
      sentenceText
      sentenceTranslation
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserSentences = /* GraphQL */ `
  query ListUserSentences(
    $id: String
    $filter: ModelUserSentenceFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserSentences(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        sentenceText
        sentenceTranslation
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSentenceWords = /* GraphQL */ `
  query GetSentenceWords($id: ID!) {
    getSentenceWords(id: $id) {
      id
      wordText
      wordtranslation
      sentenceText
      sentencetranslation
      word {
        text
        translation
        language
        createdAt
        updatedAt
        __typename
      }
      sentence {
        text
        translation
        language
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSentenceWords = /* GraphQL */ `
  query ListSentenceWords(
    $filter: ModelSentenceWordsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSentenceWords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        wordText
        wordtranslation
        sentenceText
        sentencetranslation
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const sentenceWordsByWordTextAndWordtranslation = /* GraphQL */ `
  query SentenceWordsByWordTextAndWordtranslation(
    $wordText: String!
    $wordtranslation: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSentenceWordsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sentenceWordsByWordTextAndWordtranslation(
      wordText: $wordText
      wordtranslation: $wordtranslation
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        wordText
        wordtranslation
        sentenceText
        sentencetranslation
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const sentenceWordsBySentenceTextAndSentencetranslation = /* GraphQL */ `
  query SentenceWordsBySentenceTextAndSentencetranslation(
    $sentenceText: String!
    $sentencetranslation: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSentenceWordsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sentenceWordsBySentenceTextAndSentencetranslation(
      sentenceText: $sentenceText
      sentencetranslation: $sentencetranslation
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        wordText
        wordtranslation
        sentenceText
        sentencetranslation
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
