import { IPA } from './letters'
import { Ha } from '../hangul/letters'
import { canBeFinal, composeSyllable } from '../hangul/syllable'
import { DirectConverter } from '../../DirectConverter'
import { Abjad } from '../../types'

/*
 * Unlike the other converters in this package, Korean cannot be produced letter by letter:
 * Hangul packs letters into syllable blocks, so the sounds have to be grouped into
 * syllables first. The rules applied here follow Korean loanword transcription:
 *
 * - a syllable is (consonant) + vowel + (final consonant)
 * - a syllable that starts with a vowel takes the silent ㅇ as its initial, so /u/ -> 우
 * - Korean has no consonant clusters, so a consonant with no vowel of its own gets the
 *   filler vowel ㅡ, which is why /st/ becomes 스트
 * - a consonant between two vowels starts the next syllable rather than closing the
 *   current one, so /koɾia/ becomes 코리아 and not 콜아
 * - only consonants Korean allows as a coda become a final; the rest take ㅡ, which is why
 *   /ɡɹæf/ becomes 그래프
 */
type Token =
	| { kind: 'space' }
	| { kind: 'vowel', jamo: string }
	| { kind: 'glide', glide: 'j' | 'w' }
	| { kind: 'consonant', jamo: string, final: string }

export class IpaToHangulConverter extends DirectConverter {
	public readonly from = Abjad.IPA
	public readonly to = Abjad.Hangul

	/** IPA consonant -> initial consonant (초성) */
	private consonantMap = new Map<string, string>(
		[
			[IPA.p, Ha.Phieuph],	// p -> ㅍ (loanwords use the aspirated stop)
			[IPA.b, Ha.Pieup],		// b -> ㅂ
			[IPA.t, Ha.Thieuth],	// t -> ㅌ
			[IPA.d, Ha.Tikeut],		// d -> ㄷ
			[IPA.k, Ha.Khieukh],	// k -> ㅋ
			[IPA.ɡ, Ha.Kiyeok],		// ɡ -> ㄱ
			[IPA.g, Ha.Kiyeok],		// g -> ㄱ
			[IPA.q, Ha.Khieukh],	// q -> ㅋ (closest approximation)
			[IPA.ʈ, Ha.Thieuth],	// ʈ -> ㅌ (closest approximation)
			[IPA.ɖ, Ha.Tikeut],		// ɖ -> ㄷ (closest approximation)
			[IPA.c, Ha.Khieukh],	// c -> ㅋ (closest approximation)
			[IPA.ɟ, Ha.Cieuc],		// ɟ -> ㅈ (closest approximation)
			[IPA.ɓ, Ha.Pieup],		// ɓ -> ㅂ (closest approximation)
			[IPA.ɗ, Ha.Tikeut],		// ɗ -> ㄷ (closest approximation)
			[IPA.ɠ, Ha.Kiyeok],		// ɠ -> ㄱ (closest approximation)
			[IPA.ʛ, Ha.Kiyeok],		// ʛ -> ㄱ (closest approximation)
			[IPA.ʙ, Ha.Pieup],		// ʙ -> ㅂ (closest approximation)
			[IPA.ʔ, Ha.Ieung],		// ʔ -> ㅇ (the glottal stop is not written in Korean)

			[IPA.f, Ha.Phieuph],	// f -> ㅍ (Korean has no /f/)
			[IPA.v, Ha.Pieup],		// v -> ㅂ (Korean has no /v/)
			[IPA.ɸ, Ha.Phieuph],	// ɸ -> ㅍ (closest approximation)
			[IPA.β, Ha.Pieup],		// β -> ㅂ (closest approximation)
			[IPA.ʋ, Ha.Pieup],		// ʋ -> ㅂ (closest approximation)
			[IPA.θ, Ha.Sios],			// θ -> ㅅ (Korean has no /θ/)
			[IPA.ð, Ha.Tikeut],		// ð -> ㄷ (Korean has no /ð/)
			[IPA.s, Ha.Sios],			// s -> ㅅ
			[IPA.z, Ha.Cieuc],		// z -> ㅈ (Korean has no /z/)
			[IPA.ʃ, Ha.Sios],			// ʃ -> ㅅ (as in 시)
			[IPA.ʒ, Ha.Cieuc],		// ʒ -> ㅈ (closest approximation)
			[IPA.ʂ, Ha.Sios],			// ʂ -> ㅅ (closest approximation)
			[IPA.ʐ, Ha.Cieuc],		// ʐ -> ㅈ (closest approximation)
			[IPA.ɕ, Ha.Sios],			// ɕ -> ㅅ
			[IPA.ʑ, Ha.Cieuc],		// ʑ -> ㅈ
			[IPA.ç, Ha.Hieuh],		// ç -> ㅎ (closest approximation)
			[IPA.x, Ha.Hieuh],		// x -> ㅎ (closest approximation)
			[IPA.χ, Ha.Hieuh],		// χ -> ㅎ (closest approximation)
			[IPA.ħ, Ha.Hieuh],		// ħ -> ㅎ (closest approximation)
			[IPA.h, Ha.Hieuh],		// h -> ㅎ
			[IPA.ɦ, Ha.Hieuh],		// ɦ -> ㅎ (closest approximation)
			[IPA.ɣ, Ha.Kiyeok],		// ɣ -> ㄱ (closest approximation)
			[IPA.ʕ, Ha.Ieung],		// ʕ -> ㅇ (not written in Korean)

			[IPA.ʦ, Ha.Chieuch],	// ʦ -> ㅊ
			[IPA.ʣ, Ha.Cieuc],		// ʣ -> ㅈ
			[IPA.ʧ, Ha.Chieuch],	// ʧ -> ㅊ
			[IPA.ʤ, Ha.Cieuc],		// ʤ -> ㅈ
			[IPA.ʨ, Ha.Chieuch],	// ʨ -> ㅊ
			[IPA.ʥ, Ha.Cieuc],		// ʥ -> ㅈ

			[IPA.m, Ha.Mieum],		// m -> ㅁ
			[IPA.ɱ, Ha.Mieum],		// ɱ -> ㅁ (closest approximation)
			[IPA.n, Ha.Nieun],		// n -> ㄴ
			[IPA.ɳ, Ha.Nieun],		// ɳ -> ㄴ (closest approximation)
			[IPA.ɲ, Ha.Nieun],		// ɲ -> ㄴ (closest approximation)
			[IPA.ɴ, Ha.Nieun],		// ɴ -> ㄴ (closest approximation)
			[IPA.ŋ, Ha.Ieung],		// ŋ -> ㅇ (only sounded as a final in Korean)

			[IPA.l, Ha.Rieul],		// l -> ㄹ (Korean has one liquid for both /l/ and /r/)
			[IPA.ɫ, Ha.Rieul],		// ɫ -> ㄹ
			[IPA.ɭ, Ha.Rieul],		// ɭ -> ㄹ
			[IPA.ɬ, Ha.Rieul],		// ɬ -> ㄹ (closest approximation)
			[IPA.ɮ, Ha.Rieul],		// ɮ -> ㄹ (closest approximation)
			[IPA.ʟ, Ha.Rieul],		// ʟ -> ㄹ
			[IPA.λ, Ha.Rieul],		// λ -> ㄹ (closest approximation)
			[IPA.r, Ha.Rieul],		// r -> ㄹ
			[IPA.ɹ, Ha.Rieul],		// ɹ -> ㄹ
			[IPA.ɾ, Ha.Rieul],		// ɾ -> ㄹ
			[IPA.ɻ, Ha.Rieul],		// ɻ -> ㄹ
			[IPA.ɽ, Ha.Rieul],		// ɽ -> ㄹ
			[IPA.ɺ, Ha.Rieul],		// ɺ -> ㄹ
			[IPA.ʁ, Ha.Rieul],		// ʁ -> ㄹ (closest approximation)
		]
	)

	/**
	 * IPA consonant -> final consonant (종성). Only the sounds Korean allows to close a
	 * syllable are listed; any other consonant becomes its own ㅡ syllable instead.
	 */
	private finalMap = new Map<string, string>(
		[
			[IPA.p, Ha.Pieup],		// p -> ㅂ
			[IPA.b, Ha.Pieup],		// b -> ㅂ
			[IPA.t, Ha.Sios],			// t -> ㅅ (as in 인터넷 "internet")
			[IPA.d, Ha.Sios],			// d -> ㅅ (Korean neutralises coda stops)
			[IPA.k, Ha.Kiyeok],		// k -> ㄱ (as in 북 "book")
			[IPA.ɡ, Ha.Kiyeok],		// ɡ -> ㄱ
			[IPA.g, Ha.Kiyeok],		// g -> ㄱ
			[IPA.s, Ha.Sios],			// s -> ㅅ
			[IPA.m, Ha.Mieum],		// m -> ㅁ (as in 김 "gim")
			[IPA.ɱ, Ha.Mieum],		// ɱ -> ㅁ
			[IPA.n, Ha.Nieun],		// n -> ㄴ (as in 한 "han")
			[IPA.ɳ, Ha.Nieun],		// ɳ -> ㄴ
			[IPA.ɲ, Ha.Nieun],		// ɲ -> ㄴ
			[IPA.ɴ, Ha.Nieun],		// ɴ -> ㄴ
			[IPA.ŋ, Ha.Ieung],		// ŋ -> ㅇ (as in 강 "gang")
			[IPA.l, Ha.Rieul],		// l -> ㄹ (as in 울 in 서울 "Seoul")
			[IPA.ɫ, Ha.Rieul],		// ɫ -> ㄹ
			[IPA.ɭ, Ha.Rieul],		// ɭ -> ㄹ
			[IPA.ʟ, Ha.Rieul],		// ʟ -> ㄹ
			[IPA.r, Ha.Rieul],		// r -> ㄹ
			[IPA.ɹ, Ha.Rieul],		// ɹ -> ㄹ
			[IPA.ɾ, Ha.Rieul],		// ɾ -> ㄹ
			[IPA.ɻ, Ha.Rieul],		// ɻ -> ㄹ
			[IPA.ɽ, Ha.Rieul],		// ɽ -> ㄹ
		]
	)

	/** IPA vowel -> medial vowel (중성) */
	private vowelMap = new Map<string, string>(
		[
			[IPA.a, Ha.A],				// a -> ㅏ
			[IPA.ɑ, Ha.A],				// ɑ -> ㅏ
			[IPA.ɐ, Ha.A],				// ɐ -> ㅏ
			[IPA.ɒ, Ha.A],				// ɒ -> ㅏ
			[IPA.æ, Ha.Ae],				// æ -> ㅐ
			[IPA.ɛ, Ha.E],				// ɛ -> ㅔ
			[IPA.e, Ha.E],				// e -> ㅔ
			[IPA.ə, Ha.Eo],				// ə -> ㅓ
			[IPA.ʌ, Ha.Eo],				// ʌ -> ㅓ
			[IPA.ɜ, Ha.Eo],				// ɜ -> ㅓ
			[IPA.ɚ, Ha.Eo],				// ɚ -> ㅓ
			[IPA.ɝ, Ha.Eo],				// ɝ -> ㅓ
			[IPA.ɘ, Ha.Eo],				// ɘ -> ㅓ
			[IPA.ɞ, Ha.Eo],				// ɞ -> ㅓ
			[IPA.i, Ha.I],				// i -> ㅣ
			[IPA.ɪ, Ha.I],				// ɪ -> ㅣ
			[IPA.o, Ha.O],				// o -> ㅗ
			[IPA.ɔ, Ha.O],				// ɔ -> ㅗ
			[IPA.u, Ha.U],				// u -> ㅜ
			[IPA.ʊ, Ha.U],				// ʊ -> ㅜ
			[IPA.ʉ, Ha.U],				// ʉ -> ㅜ
			[IPA.ɯ, Ha.Eu],				// ɯ -> ㅡ
			[IPA.ɨ, Ha.Eu],				// ɨ -> ㅡ
			[IPA.ɤ, Ha.Eu],				// ɤ -> ㅡ
			[IPA.y, Ha.Wi],				// y -> ㅟ
			[IPA.ʏ, Ha.Wi],				// ʏ -> ㅟ
			[IPA.ø, Ha.Oe],				// ø -> ㅚ
			[IPA.œ, Ha.Oe],				// œ -> ㅚ
			[IPA.ɵ, Ha.Oe],				// ɵ -> ㅚ
			[IPA.ɶ, Ha.Oe],				// ɶ -> ㅚ
		]
	)

	/** /j/ + vowel is written with a single y-vowel letter, e.g. /ja/ -> 야 */
	private yGlideMap = new Map<string, string>(
		[
			[Ha.A, Ha.Ya],		// ㅏ -> ㅑ
			[Ha.Ae, Ha.Yae],	// ㅐ -> ㅒ
			[Ha.Eo, Ha.Yeo],	// ㅓ -> ㅕ
			[Ha.E, Ha.Ye],		// ㅔ -> ㅖ
			[Ha.O, Ha.Yo],		// ㅗ -> ㅛ
			[Ha.U, Ha.Yu],		// ㅜ -> ㅠ
		]
	)

	/** /w/ + vowel is written with a single w-vowel letter, e.g. /wa/ -> 와 */
	private wGlideMap = new Map<string, string>(
		[
			[Ha.A, Ha.Wa],		// ㅏ -> ㅘ
			[Ha.Ae, Ha.Wae],	// ㅐ -> ㅙ
			[Ha.Eo, Ha.Weo],	// ㅓ -> ㅝ
			[Ha.E, Ha.We],		// ㅔ -> ㅞ
			[Ha.O, Ha.Oe],		// ㅗ -> ㅚ
			[Ha.I, Ha.Wi],		// ㅣ -> ㅟ
		]
	)

	public convert(text: string): string {
		const tokens = this.tokenize(text)
		let result = ''
		let i = 0
		while (i < tokens.length) {
			if (tokens[i].kind === 'space') {
				result += ' '
				i++
				continue
			}

			// initial consonant (초성); a syllable that starts with a vowel takes silent ㅇ
			let initial = Ha.Ieung
			const first = tokens[i]
			if (first.kind === 'consonant') {
				initial = first.jamo
				i++
			}

			// medial vowel (중성); a consonant with no vowel of its own takes the filler ㅡ
			let medial = Ha.Eu
			let hasVowel = false
			const second = tokens[i]
			if (second?.kind === 'glide') {
				const afterGlide = tokens[i + 1]
				if (afterGlide?.kind === 'vowel') {
					medial = this.applyGlide(second.glide, afterGlide.jamo)
					i += 2
				} else {
					// a glide with no vowel after it falls back to its own vowel
					medial = second.glide === 'j' ? Ha.I : Ha.U
					i++
				}
				hasVowel = true
			} else if (second?.kind === 'vowel') {
				medial = second.jamo
				i++
				hasVowel = true
			}

			// final consonant (종성); only when a vowel was used and no vowel follows,
			// otherwise the consonant belongs to the next syllable
			let final = ''

			// ㅇ is silent as an initial, so /ŋ/ with no vowel of its own would lose its
			// sound; write it as the coda of the filler vowel instead, giving 응 not 으
			if (!hasVowel && first.kind === 'consonant' && first.jamo === Ha.Ieung && first.final === Ha.Ieung) {
				result += composeSyllable(Ha.Ieung, medial, Ha.Ieung)
				continue
			}

			const third = tokens[i]
			if (hasVowel && third?.kind === 'consonant' && third.final !== '' && canBeFinal(third.final)) {
				const afterFinal = tokens[i + 1]
				if (afterFinal === undefined || afterFinal.kind === 'space' || afterFinal.kind === 'consonant') {
					final = third.final
					i++
				}
			}

			result += composeSyllable(initial, medial, final)
		}
		return result
	}

	/** Split the IPA text into the sounds Korean can write, dropping the rest. */
	private tokenize(text: string): Token[] {
		const tokens: Token[] = []
		for (const letter of text) {
			if (letter === ' ') {
				tokens.push({ kind: 'space' })
				continue
			}
			if (letter === IPA.j) {
				tokens.push({ kind: 'glide', glide: 'j' })
				continue
			}
			if (letter === IPA.w || letter === IPA.ʍ) {
				tokens.push({ kind: 'glide', glide: 'w' })
				continue
			}
			const vowel = this.vowelMap.get(letter)
			if (vowel !== undefined) {
				tokens.push({ kind: 'vowel', jamo: vowel })
				continue
			}
			const consonant = this.consonantMap.get(letter)
			if (consonant !== undefined) {
				tokens.push({ kind: 'consonant', jamo: consonant, final: this.finalMap.get(letter) ?? '' })
				continue
			}
			// everything else (length marks, stress marks, diacritics) is dropped
		}
		return tokens
	}

	private applyGlide(glide: 'j' | 'w', vowel: string): string {
		const map = glide === 'j' ? this.yGlideMap : this.wGlideMap
		return map.get(vowel) ?? vowel
	}
}
