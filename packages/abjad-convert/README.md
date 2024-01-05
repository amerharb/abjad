# Abjad Convert

**abjad-convert** is a package for converting Abjad alphabets phonetically.

current supported alphabets:
- Arabic
- Uguritic
- Phoenician

## How to use
npm:
```shell
npm i abjad-convert
```
yarn:
```shell
yarn add abjad-convert
```

Java Script:
```js
import { convert, Abjad } from 'abjad-convert';

const arabicWord = 'مرحبا';

const phoenicianWord = convert(arabicWord, Abjad.Arabic, Abjad.Phoenician);
console.log(phoenicianWord); // 𐤌𐤓𐤇𐤁𐤀

const ugariticWord = convert(arabicWord, Abjad.Arabic, Abjad.Ugaritic);
console.log(ugariticWord); // 𐎎𐎗𐎈𐎁𐎀
```
