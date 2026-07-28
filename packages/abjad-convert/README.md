# Abjad Convert

[![Version](https://img.shields.io/badge/version-0.13.0-blue.svg)](https://github.com/amerharb/abjad/tree/abjad-convert/version/0.13.0)
[![License: GPLv3](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![Coverage](https://raw.githubusercontent.com/amerharb/abjad/abjad-convert/version/0.13.0/packages/abjad-convert/badges/coverage.svg)
![Github workflow](https://github.com/amerharb/abjad/actions/workflows/lint-test.yaml/badge.svg?branch=abjad-convert/version/0.13.0)

**abjad-convert** is a package for converting Abjad alphabets phonetically.

Current supported alphabets:
- Arabic
- Hangul (the Korean script)
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

Type Script:
```js
import { convert, Abjad } from 'abjad-convert';

const arabicWord = 'مرحبا';

const hangulWord = convert(arabicWord, Abjad.Arabic, Abjad.Hangul);
console.log(hangulWord); // 므르흐바

const hanifiRohingyaWord = convert(arabicWord, Abjad.Arabic, Abjad.HanifiRohingya);
console.log(hanifiRohingyaWord); // 𐴔𐴌𐴇𐴁𐴀

const hebrewWord = convert(arabicWord, Abjad.Arabic, Abjad.Hebrew);
console.log(hebrewWord); // מרחבא

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

### Hangul
Hangul is not written as a run of letters: its letters are packed into syllable blocks, so
the sounds are grouped into syllables before being written.

```js
import { convert, Abjad } from 'abjad-convert';

console.log(convert('hanɡuk', Abjad.IPA, Abjad.Hangul)); // 한국
console.log(convert('sʌul', Abjad.IPA, Abjad.Hangul));   // 서울
console.log(convert('u', Abjad.IPA, Abjad.Hangul));      // 우, a syllable with no initial takes ㅇ
console.log(convert('stɹaik', Abjad.IPA, Abjad.Hangul)); // 스트라익, clusters take the filler vowel ㅡ
console.log(convert('ɡɹæf', Abjad.IPA, Abjad.Hangul));   // 그래프, ㅍ cannot close a syllable

console.log(convert('한국', Abjad.Hangul, Abjad.IPA));    // hanɡuk
```

Korean contrasts plain, aspirated and tense consonants where IPA contrasts voiced and
voiceless, so the loanword convention is followed: voiceless `/p t k/` become the aspirated
`ㅍ ㅌ ㅋ` and voiced `/b d ɡ/` become the plain `ㅂ ㄷ ㄱ`. Native Korean words are therefore
reached with the voiced symbols, and text round-trips through IPA unchanged. See
[src/scripts/hangul/doc.md](src/scripts/hangul/doc.md) for the full letter tables.

## How to contribute
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct.
