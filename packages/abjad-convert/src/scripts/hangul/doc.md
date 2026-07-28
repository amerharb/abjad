source: https://en.wikipedia.org/wiki/Hangul
source: https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_in_Unicode
source: Korean loanword transcription rules (외래어 표기법): https://kornorms.korean.go.kr

# Hangul (한글)

Hangul is a featural alphabet, not an abjad: vowels are written, and letters are grouped
into square syllable blocks rather than run together in a line.

## Syllable structure

A block is `initial + medial (+ final)`:

- initial consonant, choseong (초성) — 19 possible letters
- medial vowel, jungseong (중성) — 21 possible letters
- final consonant, jongseong (종성) — optional, 27 possible letters

Every block needs a vowel, and every block needs an initial. A syllable that begins with a
vowel takes `ㅇ` (ieung), which is silent in that position, so /u/ is written 우.
As a final, the same `ㅇ` is sounded /ŋ/, which is why 강 ends in it.

## Unicode

Three blocks are involved:

| block | range | use |
| --- | --- | --- |
| Hangul Jamo | U+1100..U+11FF | conjoining letters, combine into blocks |
| Hangul Compatibility Jamo | U+3130..U+318F | standalone letters, used by `letters.ts` |
| Hangul Syllables | U+AC00..U+D7A3 | the 11,172 precomposed blocks, produced by `syllable.ts` |

Because the syllables block is ordered, a block is computed arithmetically:

```
block = 0xAC00 + (choseong * 21 + jungseong) * 28 + jongseong
```

e.g. 한 = ㅎ(18) + ㅏ(0) + ㄴ(4) -> 0xAC00 + (18*21 + 0)*28 + 4 = U+D55C

## Letters

### Consonants (자음)

| letter | name | sound |
| --- | --- | --- |
| ㄱ | kiyeok | /k/ plain |
| ㄲ | ssangkiyeok | /k͈/ tense |
| ㄴ | nieun | /n/ |
| ㄷ | tikeut | /t/ plain |
| ㄸ | ssangtikeut | /t͈/ tense |
| ㄹ | rieul | /l/, /ɾ/ |
| ㅁ | mieum | /m/ |
| ㅂ | pieup | /p/ plain |
| ㅃ | ssangpieup | /p͈/ tense |
| ㅅ | sios | /s/ |
| ㅆ | ssangsios | /s͈/ tense |
| ㅇ | ieung | silent as initial, /ŋ/ as final |
| ㅈ | cieuc | /tɕ/ plain |
| ㅉ | ssangcieuc | /tɕ͈/ tense |
| ㅊ | chieuch | /tɕʰ/ aspirated |
| ㅋ | khieukh | /kʰ/ aspirated |
| ㅌ | thieuth | /tʰ/ aspirated |
| ㅍ | phieuph | /pʰ/ aspirated |
| ㅎ | hieuh | /h/ |

### Vowels (모음)

| letter | name | sound |
| --- | --- | --- |
| ㅏ | a | /a/ |
| ㅐ | ae | /ɛ/ |
| ㅑ | ya | /ja/ |
| ㅒ | yae | /jɛ/ |
| ㅓ | eo | /ʌ/ |
| ㅔ | e | /e/ |
| ㅕ | yeo | /jʌ/ |
| ㅖ | ye | /je/ |
| ㅗ | o | /o/ |
| ㅘ | wa | /wa/ |
| ㅙ | wae | /wɛ/ |
| ㅚ | oe | /we/ |
| ㅛ | yo | /jo/ |
| ㅜ | u | /u/ |
| ㅝ | weo | /wʌ/ |
| ㅞ | we | /we/ |
| ㅟ | wi | /wi/ |
| ㅠ | yu | /ju/ |
| ㅡ | eu | /ɯ/ |
| ㅢ | yi | /ɰi/ |
| ㅣ | i | /i/ |

## Notes on converting from IPA

Korean contrasts plain, aspirated and tense stops, while IPA contrasts voiced and
voiceless. The loanword convention is used: voiceless /p t k/ become the aspirated
ㅍ ㅌ ㅋ, and voiced /b d ɡ/ become the plain ㅂ ㄷ ㄱ. Native Korean words are therefore
reached with the voiced symbols, e.g. /hanɡuɡ/ -> 한국.

Korean has no consonant clusters, so a consonant with no vowel of its own takes the filler
vowel ㅡ; /stɹaik/ -> 스트라익. Only consonants Korean allows as a coda become a final; the
rest also take ㅡ, so /ɡɹæf/ -> 그래프.

Sounds Korean lacks are mapped to the nearest available letter: /f/ -> ㅍ, /v/ -> ㅂ,
/θ/ -> ㅅ, /ð/ -> ㄷ, /z/ -> ㅈ, and both /l/ and /r/ -> ㄹ.
