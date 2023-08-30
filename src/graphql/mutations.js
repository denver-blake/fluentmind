export const generateSentence = `mutation generateSentence {
    generateSentence(language: KOREAN) {
        text
        translation
        phrases
        meanings
        words {
          items {
            wordText
          }
        }
      }
    }
`;

export const deleteUserWord = `mutation deleteUserWord($id: String!,$_version: Int) {
  deleteUserWord(input: {id: $id, _version: $_version}) {
    id
  }
}`;

export const createUserWord = `mutation createUserWord($wordText: String!) {
  createUserWord(input: {wordText: $wordText}) {
    id
    wordText
    _version
  }
}`;
