// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Language = {
  "ENGLISH": "ENGLISH",
  "KOREAN": "KOREAN"
};

const { Word, Sentence, UserWord, UserSentence, SentenceWords } = initSchema(schema);

export {
  Word,
  Sentence,
  UserWord,
  UserSentence,
  SentenceWords,
  Language
};