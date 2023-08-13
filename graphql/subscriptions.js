/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWord = /* GraphQL */ `
  subscription OnCreateWord($filter: ModelSubscriptionWordFilterInput) {
    onCreateWord(filter: $filter) {
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
export const onUpdateWord = /* GraphQL */ `
  subscription OnUpdateWord($filter: ModelSubscriptionWordFilterInput) {
    onUpdateWord(filter: $filter) {
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
export const onDeleteWord = /* GraphQL */ `
  subscription OnDeleteWord($filter: ModelSubscriptionWordFilterInput) {
    onDeleteWord(filter: $filter) {
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
export const onCreateSentence = /* GraphQL */ `
  subscription OnCreateSentence($filter: ModelSubscriptionSentenceFilterInput) {
    onCreateSentence(filter: $filter) {
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
export const onUpdateSentence = /* GraphQL */ `
  subscription OnUpdateSentence($filter: ModelSubscriptionSentenceFilterInput) {
    onUpdateSentence(filter: $filter) {
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
export const onDeleteSentence = /* GraphQL */ `
  subscription OnDeleteSentence($filter: ModelSubscriptionSentenceFilterInput) {
    onDeleteSentence(filter: $filter) {
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
export const onCreateUserWord = /* GraphQL */ `
  subscription OnCreateUserWord(
    $filter: ModelSubscriptionUserWordFilterInput
    $owner: String
  ) {
    onCreateUserWord(filter: $filter, owner: $owner) {
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
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateUserWord = /* GraphQL */ `
  subscription OnUpdateUserWord(
    $filter: ModelSubscriptionUserWordFilterInput
    $owner: String
  ) {
    onUpdateUserWord(filter: $filter, owner: $owner) {
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
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteUserWord = /* GraphQL */ `
  subscription OnDeleteUserWord(
    $filter: ModelSubscriptionUserWordFilterInput
    $owner: String
  ) {
    onDeleteUserWord(filter: $filter, owner: $owner) {
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
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateUserSentence = /* GraphQL */ `
  subscription OnCreateUserSentence(
    $filter: ModelSubscriptionUserSentenceFilterInput
    $owner: String
  ) {
    onCreateUserSentence(filter: $filter, owner: $owner) {
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
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateUserSentence = /* GraphQL */ `
  subscription OnUpdateUserSentence(
    $filter: ModelSubscriptionUserSentenceFilterInput
    $owner: String
  ) {
    onUpdateUserSentence(filter: $filter, owner: $owner) {
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
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteUserSentence = /* GraphQL */ `
  subscription OnDeleteUserSentence(
    $filter: ModelSubscriptionUserSentenceFilterInput
    $owner: String
  ) {
    onDeleteUserSentence(filter: $filter, owner: $owner) {
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
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateSentenceWords = /* GraphQL */ `
  subscription OnCreateSentenceWords(
    $filter: ModelSubscriptionSentenceWordsFilterInput
  ) {
    onCreateSentenceWords(filter: $filter) {
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
export const onUpdateSentenceWords = /* GraphQL */ `
  subscription OnUpdateSentenceWords(
    $filter: ModelSubscriptionSentenceWordsFilterInput
  ) {
    onUpdateSentenceWords(filter: $filter) {
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
export const onDeleteSentenceWords = /* GraphQL */ `
  subscription OnDeleteSentenceWords(
    $filter: ModelSubscriptionSentenceWordsFilterInput
  ) {
    onDeleteSentenceWords(filter: $filter) {
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
