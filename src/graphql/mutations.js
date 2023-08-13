/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const generateSentence = /* GraphQL */ `
  mutation GenerateSentence($language: Language) {
    generateSentence(language: $language) {
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
export const deleteUserWord = /* GraphQL */ `
  mutation DeleteUserWord(
    $input: DeleteUserWordInput!
    $condition: ModelUserWordConditionInput
  ) {
    deleteUserWord(input: $input, condition: $condition) {
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
export const deleteUserSentence = /* GraphQL */ `
  mutation DeleteUserSentence(
    $input: DeleteUserSentenceInput!
    $condition: ModelUserSentenceConditionInput
  ) {
    deleteUserSentence(input: $input, condition: $condition) {
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
export const createWord = /* GraphQL */ `
  mutation CreateWord(
    $input: CreateWordInput!
    $condition: ModelWordConditionInput
  ) {
    createWord(input: $input, condition: $condition) {
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
export const updateWord = /* GraphQL */ `
  mutation UpdateWord(
    $input: UpdateWordInput!
    $condition: ModelWordConditionInput
  ) {
    updateWord(input: $input, condition: $condition) {
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
export const deleteWord = /* GraphQL */ `
  mutation DeleteWord(
    $input: DeleteWordInput!
    $condition: ModelWordConditionInput
  ) {
    deleteWord(input: $input, condition: $condition) {
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
export const createSentence = /* GraphQL */ `
  mutation CreateSentence(
    $input: CreateSentenceInput!
    $condition: ModelSentenceConditionInput
  ) {
    createSentence(input: $input, condition: $condition) {
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
export const updateSentence = /* GraphQL */ `
  mutation UpdateSentence(
    $input: UpdateSentenceInput!
    $condition: ModelSentenceConditionInput
  ) {
    updateSentence(input: $input, condition: $condition) {
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
export const deleteSentence = /* GraphQL */ `
  mutation DeleteSentence(
    $input: DeleteSentenceInput!
    $condition: ModelSentenceConditionInput
  ) {
    deleteSentence(input: $input, condition: $condition) {
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
export const createUserWord = /* GraphQL */ `
  mutation CreateUserWord(
    $input: CreateUserWordInput!
    $condition: ModelUserWordConditionInput
  ) {
    createUserWord(input: $input, condition: $condition) {
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
export const updateUserWord = /* GraphQL */ `
  mutation UpdateUserWord(
    $input: UpdateUserWordInput!
    $condition: ModelUserWordConditionInput
  ) {
    updateUserWord(input: $input, condition: $condition) {
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
export const createUserSentence = /* GraphQL */ `
  mutation CreateUserSentence(
    $input: CreateUserSentenceInput!
    $condition: ModelUserSentenceConditionInput
  ) {
    createUserSentence(input: $input, condition: $condition) {
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
export const updateUserSentence = /* GraphQL */ `
  mutation UpdateUserSentence(
    $input: UpdateUserSentenceInput!
    $condition: ModelUserSentenceConditionInput
  ) {
    updateUserSentence(input: $input, condition: $condition) {
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
export const createSentenceWords = /* GraphQL */ `
  mutation CreateSentenceWords(
    $input: CreateSentenceWordsInput!
    $condition: ModelSentenceWordsConditionInput
  ) {
    createSentenceWords(input: $input, condition: $condition) {
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
export const updateSentenceWords = /* GraphQL */ `
  mutation UpdateSentenceWords(
    $input: UpdateSentenceWordsInput!
    $condition: ModelSentenceWordsConditionInput
  ) {
    updateSentenceWords(input: $input, condition: $condition) {
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
export const deleteSentenceWords = /* GraphQL */ `
  mutation DeleteSentenceWords(
    $input: DeleteSentenceWordsInput!
    $condition: ModelSentenceWordsConditionInput
  ) {
    deleteSentenceWords(input: $input, condition: $condition) {
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
