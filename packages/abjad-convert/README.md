# Abjad Convert

[![Version](https://img.shields.io/badge/version-0.12.0-blue.svg)](https://github.com/amerharb/abjad/tree/abjad-convert/version/0.12.0)
[![License: GPLv3](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![Coverage](https://raw.githubusercontent.com/amerharb/abjad/abjad-convert/version/0.12.0/packages/abjad-convert/badges/coverage.svg)
![Github workflow](https://github.com/amerharb/abjad/actions/workflows/lint-test.yaml/badge.svg?branch=abjad-convert/version/0.12.0)

**abjad-convert** is a package for converting Abjad alphabets phonetically.

Current supported alphabets:
- Arabic
- Hanifi Rohingya
- Hebrew
- Imperial Aramaic
- IPA (International Phonetic Alphabet)
- Nabataean
- Old South Arabian
- Phoenician
- Runic
- Syriac
- Tifinagh
- Uguritic

## How to use
npm:
```shell
npm i abjad-convert
```

yarn:
```shell
yarn add abjad-convert
```

Type Script:
```js
import { convert, Abjad } from 'abjad-convert';

const arabicWord = 'مرحبا';

const hanifiRohingyaWord = convert(arabicWord, Abjad.Arabic, Abjad.HanifiRohingya);
console.log(hanifiRohingyaWord); // 𐴔𐴌𐴇𐴁𐴀

const imperialAramaicWord = convert(arabicWord, Abjad.Arabic, Abjad.ImperialAramaic);
console.log(imperialAramaicWord); // 𐡌𐡓𐡇𐡁𐡀

const ipaWord = convert(arabicWord, Abjad.Arabic, Abjad.IPA);
console.log(ipaWord); // mrħbaː

const nabataeanWord = convert(arabicWord, Abjad.Arabic, Abjad.Nabataean);
console.log(nabataeanWord); // 𐢓𐢛𐢊𐢃𐢁

const oldSouthArabianWord = convert(arabicWord, Abjad.Arabic, Abjad.OldSouthArabian);
console.log(oldSouthArabianWord); // 𐩣𐩧𐩢𐩨𐩡

const phoenicianWord = convert(arabicWord, Abjad.Arabic, Abjad.Phoenician);
console.log(phoenicianWord); // 𐤌𐤓𐤇𐤁𐤀

const runicWord = convert(arabicWord, Abjad.Arabic, Abjad.Runic);
console.log(runicWord); // ᛗᚱᚻᛒᚫᚮ

const syriacWord = convert(arabicWord, Abjad.Arabic, Abjad.Syriac);
console.log(syriacWord); // ܡܪܚܒܐ

const tifinaghWord = convert(arabicWord, Abjad.Arabic, Abjad.Tifinagh);
console.log(tifinaghWord); // ⵎⵔⵃⴱⴰ

const ugariticWord = convert(arabicWord, Abjad.Arabic, Abjad.Ugaritic);
console.log(ugariticWord); // 𐎎𐎗𐎈𐎁𐎀
```
## How to contribute
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct.
