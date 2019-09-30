/*
 Use when you need to find unique values in an array of strings or numbers

 1. at the top of your file: import findUnique from './utils/unique'
 2. to use it: findUnique(arr) where `arr` is your array of strings
*/

export default function findUnique(arr) {
  return [...new Set(arr)];
}
