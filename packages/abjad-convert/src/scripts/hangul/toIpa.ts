import { IPA } from '../ipa/letters'
import { Ha } from './letters'
import { decomposeSyllable } from './syllable'
import { DirectConverter } from '../../DirectConverter'
import { Abjad } from '../../types'

/*
 * Korean is read out of syllable blocks, so each block is split back into its parts and
 * every part is written as the sound it stands for.
 *
 * Two properties of Korean shape the output:
 *
 * - ㅇ is silent when it opens a syllable, so 우 gives just /u/
 * - Korean neutralises the consonants that close a syllable to one of /k t p m n ŋ l/,
 *   so 곧 and 곳 are both read /kot/
 *
 * Plain stops are written as the voiced IPA symbols and aspirated ones as the voiceless
 * symbols, matching toHangul.ts, which lets text round-trip: 한국 -> /hanɡuk/ -> 한국.
 */

/** initial consonants (초성) by Unicode index */
const CHOSEONG_IPA = [
	IPA.ɡ,		// ㄱ -> ɡ (plain)
	IPA.ɡ,		// ㄲ -> ɡ (tense, no IPA equivalent without a diacritic)
	IPA.n,		// ㄴ -> n
	IPA.d,		// ㄷ -> d (plain)
	IPA.d,		// ㄸ -> d (tense)
	IPA.l,		// ㄹ -> l
	IPA.m,		// ㅁ -> m
	IPA.b,		// ㅂ -> b (plain)
	IPA.b,		// ㅃ -> b (tense)
	IPA.s,		// ㅅ -> s
	IPA.s,		// ㅆ -> s (tense)
	'',				// ㅇ -> silent when it opens a syllable
	IPA.ʤ,		// ㅈ -> ʤ (plain)
	IPA.ʤ,		// ㅉ -> ʤ (tense)
	IPA.ʧ,		// ㅊ -> ʧ (aspirated)
	IPA.k,		// ㅋ -> k (aspirated)
	IPA.t,		// ㅌ -> t (aspirated)
	IPA.p,		// ㅍ -> p (aspirated)
	IPA.h,		// ㅎ -> h
]

/** medial vowels (중성) by Unicode index */
const JUNGSEONG_IPA = [
	IPA.a,										// ㅏ -> a
	IPA.ɛ,										// ㅐ -> ɛ
	IPA.j + IPA.a,						// ㅑ -> ja
	IPA.j + IPA.ɛ,						// ㅒ -> jɛ
	IPA.ʌ,										// ㅓ -> ʌ
	IPA.e,										// ㅔ -> e
	IPA.j + IPA.ʌ,						// ㅕ -> jʌ
	IPA.j + IPA.e,						// ㅖ -> je
	IPA.o,										// ㅗ -> o
	IPA.w + IPA.a,						// ㅘ -> wa
	IPA.w + IPA.ɛ,						// ㅙ -> wɛ
	IPA.w + IPA.e,						// ㅚ -> we
	IPA.j + IPA.o,						// ㅛ -> jo
	IPA.u,										// ㅜ -> u
	IPA.w + IPA.ʌ,						// ㅝ -> wʌ
	IPA.w + IPA.e,						// ㅞ -> we
	IPA.w + IPA.i,						// ㅟ -> wi
	IPA.j + IPA.u,						// ㅠ -> ju
	IPA.ɯ,										// ㅡ -> ɯ
	IPA.ɯ + IPA.i,						// ㅢ -> ɯi
	IPA.i,										// ㅣ -> i
]

/*
 * final consonants (종성) by Unicode index, including the eleven two-letter clusters.
 * Korean allows only /k t p m n ŋ l/ to close a syllable, so every final maps onto one of
 * them; index 0 is "no final".
 */
const JONGSEONG_IPA = [
	'',				// (none)
	IPA.k,		// ㄱ -> k
	IPA.k,		// ㄲ -> k
	IPA.k,		// ㄳ -> k
	IPA.n,		// ㄴ -> n
	IPA.n,		// ㄵ -> n
	IPA.n,		// ㄶ -> n
	IPA.t,		// ㄷ -> t
	IPA.l,		// ㄹ -> l
	IPA.k,		// ㄺ -> k
	IPA.m,		// ㄻ -> m
	IPA.l,		// ㄼ -> l
	IPA.l,		// ㄽ -> l
	IPA.l,		// ㄾ -> l
	IPA.p,		// ㄿ -> p
	IPA.l,		// ㅀ -> l
	IPA.m,		// ㅁ -> m
	IPA.p,		// ㅂ -> p
	IPA.p,		// ㅄ -> p
	IPA.t,		// ㅅ -> t
	IPA.t,		// ㅆ -> t
	IPA.ŋ,		// ㅇ -> ŋ
	IPA.t,		// ㅈ -> t
	IPA.t,		// ㅊ -> t
	IPA.k,		// ㅋ -> k
	IPA.t,		// ㅌ -> t
	IPA.p,		// ㅍ -> p
	IPA.t,		// ㅎ -> t
]

export class HangulToIpaConverter extends DirectConverter {
	public readonly from = Abjad.Hangul
	public readonly to = Abjad.IPA

	/** standalone letters, for text written with single letters instead of blocks */
	private letterMap = new Map<string, string>(
		[
			[Ha.Kiyeok, IPA.ɡ],			// ㄱ -> ɡ
			[Ha.SsangKiyeok, IPA.ɡ],// ㄲ -> ɡ
			[Ha.Nieun, IPA.n],			// ㄴ -> n
			[Ha.Tikeut, IPA.d],			// ㄷ -> d
			[Ha.SsangTikeut, IPA.d],// ㄸ -> d
			[Ha.Rieul, IPA.l],			// ㄹ -> l
			[Ha.Mieum, IPA.m],			// ㅁ -> m
			[Ha.Pieup, IPA.b],			// ㅂ -> b
			[Ha.SsangPieup, IPA.b],	// ㅃ -> b
			[Ha.Sios, IPA.s],				// ㅅ -> s
			[Ha.SsangSios, IPA.s],	// ㅆ -> s
			[Ha.Ieung, IPA.ŋ],			// ㅇ -> ŋ (its sounded value)
			[Ha.Cieuc, IPA.ʤ],			// ㅈ -> ʤ
			[Ha.SsangCieuc, IPA.ʤ],	// ㅉ -> ʤ
			[Ha.Chieuch, IPA.ʧ],		// ㅊ -> ʧ
			[Ha.Khieukh, IPA.k],		// ㅋ -> k
			[Ha.Thieuth, IPA.t],		// ㅌ -> t
			[Ha.Phieuph, IPA.p],		// ㅍ -> p
			[Ha.Hieuh, IPA.h],			// ㅎ -> h

			[Ha.A, JUNGSEONG_IPA[0]],		// ㅏ -> a
			[Ha.Ae, JUNGSEONG_IPA[1]],	// ㅐ -> ɛ
			[Ha.Ya, JUNGSEONG_IPA[2]],	// ㅑ -> ja
			[Ha.Yae, JUNGSEONG_IPA[3]],	// ㅒ -> jɛ
			[Ha.Eo, JUNGSEONG_IPA[4]],	// ㅓ -> ʌ
			[Ha.E, JUNGSEONG_IPA[5]],		// ㅔ -> e
			[Ha.Yeo, JUNGSEONG_IPA[6]],	// ㅕ -> jʌ
			[Ha.Ye, JUNGSEONG_IPA[7]],	// ㅖ -> je
			[Ha.O, JUNGSEONG_IPA[8]],		// ㅗ -> o
			[Ha.Wa, JUNGSEONG_IPA[9]],	// ㅘ -> wa
			[Ha.Wae, JUNGSEONG_IPA[10]],// ㅙ -> wɛ
			[Ha.Oe, JUNGSEONG_IPA[11]],	// ㅚ -> we
			[Ha.Yo, JUNGSEONG_IPA[12]],	// ㅛ -> jo
			[Ha.U, JUNGSEONG_IPA[13]],	// ㅜ -> u
			[Ha.Weo, JUNGSEONG_IPA[14]],// ㅝ -> wʌ
			[Ha.We, JUNGSEONG_IPA[15]],	// ㅞ -> we
			[Ha.Wi, JUNGSEONG_IPA[16]],	// ㅟ -> wi
			[Ha.Yu, JUNGSEONG_IPA[17]],	// ㅠ -> ju
			[Ha.Eu, JUNGSEONG_IPA[18]],	// ㅡ -> ɯ
			[Ha.Yi, JUNGSEONG_IPA[19]],	// ㅢ -> ɯi
			[Ha.I, JUNGSEONG_IPA[20]],	// ㅣ -> i
		]
	)

	public convert(text: string): string {
		let result = ''
		for (const letter of text) {
			if (letter === ' ') {
				result += ' '
				continue
			}
			const parts = decomposeSyllable(letter)
			if (parts !== undefined) {
				result += CHOSEONG_IPA[parts.choseong]
					+ JUNGSEONG_IPA[parts.jungseong]
					+ JONGSEONG_IPA[parts.jongseong]
				continue
			}
			result += this.letterMap.get(letter) ?? ''
		}
		return result
	}
}
