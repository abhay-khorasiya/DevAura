import { TutorialChapter } from '../../types';
import { javaBasicsChapters } from './java/basics';
import { javaOopAndCollectionsChapters } from './java/oopAndCollections';

export const javaChapters: TutorialChapter[] = [
  // 1 to 24: Java Basics & Methods (Java HOME to Java OOP Concepts)
  ...javaBasicsChapters,
  // 25 to 49: Java OOP, Collections & Advanced (Classes/Objects to Lambda Expressions)
  ...javaOopAndCollectionsChapters,
];
