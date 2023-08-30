export const getAllUserWords = `query getAllUserWords($language: String) {
	listUserWords(filter: {wordText: {beginsWith: $language}, or: [{_deleted: {attributeExists: false}}, { _deleted: {eq: false}}]}) {
	  items {
		id
		wordText
		_version
	  }
	}
  }`;
