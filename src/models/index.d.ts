import { ModelInit, MutableModel, __modelMeta__, CustomIdentifier, OptionallyManagedIdentifier, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum Language {
  ENGLISH = "ENGLISH",
  KOREAN = "KOREAN"
}



type EagerWord = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Word, 'text'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly text: string;
  readonly translation?: string | null;
  readonly language: Language | keyof typeof Language;
  readonly sentences?: (SentenceWords | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWord = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Word, 'text'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly text: string;
  readonly translation?: string | null;
  readonly language: Language | keyof typeof Language;
  readonly sentences: AsyncCollection<SentenceWords>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Word = LazyLoading extends LazyLoadingDisabled ? EagerWord : LazyWord

export declare const Word: (new (init: ModelInit<Word>) => Word) & {
  copyOf(source: Word, mutator: (draft: MutableModel<Word>) => MutableModel<Word> | void): Word;
}

type EagerSentence = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Sentence, 'text'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly text: string;
  readonly translation?: string | null;
  readonly language: Language | keyof typeof Language;
  readonly phrases?: (string | null)[] | null;
  readonly meanings?: (string | null)[] | null;
  readonly words?: (SentenceWords | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySentence = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Sentence, 'text'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly text: string;
  readonly translation?: string | null;
  readonly language: Language | keyof typeof Language;
  readonly phrases?: (string | null)[] | null;
  readonly meanings?: (string | null)[] | null;
  readonly words: AsyncCollection<SentenceWords>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sentence = LazyLoading extends LazyLoadingDisabled ? EagerSentence : LazySentence

export declare const Sentence: (new (init: ModelInit<Sentence>) => Sentence) & {
  copyOf(source: Sentence, mutator: (draft: MutableModel<Sentence>) => MutableModel<Sentence> | void): Sentence;
}

type EagerUserWord = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<UserWord, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly word?: Word | null;
  readonly wordText?: string | null;
  readonly randId?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserWord = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<UserWord, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly word: AsyncItem<Word | undefined>;
  readonly wordText?: string | null;
  readonly randId?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserWord = LazyLoading extends LazyLoadingDisabled ? EagerUserWord : LazyUserWord

export declare const UserWord: (new (init: ModelInit<UserWord>) => UserWord) & {
  copyOf(source: UserWord, mutator: (draft: MutableModel<UserWord>) => MutableModel<UserWord> | void): UserWord;
}

type EagerUserSentence = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<UserSentence, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sentence?: Sentence | null;
  readonly sentenceText?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserSentence = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<UserSentence, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sentence: AsyncItem<Sentence | undefined>;
  readonly sentenceText?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserSentence = LazyLoading extends LazyLoadingDisabled ? EagerUserSentence : LazyUserSentence

export declare const UserSentence: (new (init: ModelInit<UserSentence>) => UserSentence) & {
  copyOf(source: UserSentence, mutator: (draft: MutableModel<UserSentence>) => MutableModel<UserSentence> | void): UserSentence;
}

type EagerSentenceWords = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SentenceWords, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly wordText?: string | null;
  readonly sentenceText?: string | null;
  readonly word: Word;
  readonly sentence: Sentence;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySentenceWords = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SentenceWords, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly wordText?: string | null;
  readonly sentenceText?: string | null;
  readonly word: AsyncItem<Word>;
  readonly sentence: AsyncItem<Sentence>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SentenceWords = LazyLoading extends LazyLoadingDisabled ? EagerSentenceWords : LazySentenceWords

export declare const SentenceWords: (new (init: ModelInit<SentenceWords>) => SentenceWords) & {
  copyOf(source: SentenceWords, mutator: (draft: MutableModel<SentenceWords>) => MutableModel<SentenceWords> | void): SentenceWords;
}