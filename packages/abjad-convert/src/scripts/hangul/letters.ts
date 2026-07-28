import { Script } from '../Script'
import { Abjad } from '../../types'

/*
 * Hangul (한글), the Korean alphabet.
 *
 * The letters below are the Hangul Compatibility Jamo (U+3130 block): the standalone
 * forms used to present the alphabet. In running text Hangul letters are combined into
 * syllable blocks from the Hangul Syllables block (U+AC00..U+D7A3) — see syllable.ts.
 */
const letters = [
	// consonants (자음)
	String.fromCodePoint(0x3131), /** #0  ㄱ U+3131 HANGUL LETTER KIYEOK */
	String.fromCodePoint(0x3132), /** #1  ㄲ U+3132 HANGUL LETTER SSANGKIYEOK */
	String.fromCodePoint(0x3134), /** #2  ㄴ U+3134 HANGUL LETTER NIEUN */
	String.fromCodePoint(0x3137), /** #3  ㄷ U+3137 HANGUL LETTER TIKEUT */
	String.fromCodePoint(0x3138), /** #4  ㄸ U+3138 HANGUL LETTER SSANGTIKEUT */
	String.fromCodePoint(0x3139), /** #5  ㄹ U+3139 HANGUL LETTER RIEUL */
	String.fromCodePoint(0x3141), /** #6  ㅁ U+3141 HANGUL LETTER MIEUM */
	String.fromCodePoint(0x3142), /** #7  ㅂ U+3142 HANGUL LETTER PIEUP */
	String.fromCodePoint(0x3143), /** #8  ㅃ U+3143 HANGUL LETTER SSANGPIEUP */
	String.fromCodePoint(0x3145), /** #9  ㅅ U+3145 HANGUL LETTER SIOS */
	String.fromCodePoint(0x3146), /** #10 ㅆ U+3146 HANGUL LETTER SSANGSIOS */
	String.fromCodePoint(0x3147), /** #11 ㅇ U+3147 HANGUL LETTER IEUNG */
	String.fromCodePoint(0x3148), /** #12 ㅈ U+3148 HANGUL LETTER CIEUC */
	String.fromCodePoint(0x3149), /** #13 ㅉ U+3149 HANGUL LETTER SSANGCIEUC */
	String.fromCodePoint(0x314A), /** #14 ㅊ U+314A HANGUL LETTER CHIEUCH */
	String.fromCodePoint(0x314B), /** #15 ㅋ U+314B HANGUL LETTER KHIEUKH */
	String.fromCodePoint(0x314C), /** #16 ㅌ U+314C HANGUL LETTER THIEUTH */
	String.fromCodePoint(0x314D), /** #17 ㅍ U+314D HANGUL LETTER PHIEUPH */
	String.fromCodePoint(0x314E), /** #18 ㅎ U+314E HANGUL LETTER HIEUH */

	// vowels (모음)
	String.fromCodePoint(0x314F), /** #19 ㅏ U+314F HANGUL LETTER A */
	String.fromCodePoint(0x3150), /** #20 ㅐ U+3150 HANGUL LETTER AE */
	String.fromCodePoint(0x3151), /** #21 ㅑ U+3151 HANGUL LETTER YA */
	String.fromCodePoint(0x3152), /** #22 ㅒ U+3152 HANGUL LETTER YAE */
	String.fromCodePoint(0x3153), /** #23 ㅓ U+3153 HANGUL LETTER EO */
	String.fromCodePoint(0x3154), /** #24 ㅔ U+3154 HANGUL LETTER E */
	String.fromCodePoint(0x3155), /** #25 ㅕ U+3155 HANGUL LETTER YEO */
	String.fromCodePoint(0x3156), /** #26 ㅖ U+3156 HANGUL LETTER YE */
	String.fromCodePoint(0x3157), /** #27 ㅗ U+3157 HANGUL LETTER O */
	String.fromCodePoint(0x3158), /** #28 ㅘ U+3158 HANGUL LETTER WA */
	String.fromCodePoint(0x3159), /** #29 ㅙ U+3159 HANGUL LETTER WAE */
	String.fromCodePoint(0x315A), /** #30 ㅚ U+315A HANGUL LETTER OE */
	String.fromCodePoint(0x315B), /** #31 ㅛ U+315B HANGUL LETTER YO */
	String.fromCodePoint(0x315C), /** #32 ㅜ U+315C HANGUL LETTER U */
	String.fromCodePoint(0x315D), /** #33 ㅝ U+315D HANGUL LETTER WEO */
	String.fromCodePoint(0x315E), /** #34 ㅞ U+315E HANGUL LETTER WE */
	String.fromCodePoint(0x315F), /** #35 ㅟ U+315F HANGUL LETTER WI */
	String.fromCodePoint(0x3160), /** #36 ㅠ U+3160 HANGUL LETTER YU */
	String.fromCodePoint(0x3161), /** #37 ㅡ U+3161 HANGUL LETTER EU */
	String.fromCodePoint(0x3162), /** #38 ㅢ U+3162 HANGUL LETTER YI */
	String.fromCodePoint(0x3163), /** #39 ㅣ U+3163 HANGUL LETTER I */
] as const

export const Ha = {
	// consonants (자음)
	Kiyeok: letters[0], // ㄱ
	SsangKiyeok: letters[1], // ㄲ
	Nieun: letters[2], // ㄴ
	Tikeut: letters[3], // ㄷ
	SsangTikeut: letters[4], // ㄸ
	Rieul: letters[5], // ㄹ
	Mieum: letters[6], // ㅁ
	Pieup: letters[7], // ㅂ
	SsangPieup: letters[8], // ㅃ
	Sios: letters[9], // ㅅ
	SsangSios: letters[10], // ㅆ
	Ieung: letters[11], // ㅇ
	Cieuc: letters[12], // ㅈ
	SsangCieuc: letters[13], // ㅉ
	Chieuch: letters[14], // ㅊ
	Khieukh: letters[15], // ㅋ
	Thieuth: letters[16], // ㅌ
	Phieuph: letters[17], // ㅍ
	Hieuh: letters[18], // ㅎ

	// vowels (모음)
	A: letters[19], // ㅏ
	Ae: letters[20], // ㅐ
	Ya: letters[21], // ㅑ
	Yae: letters[22], // ㅒ
	Eo: letters[23], // ㅓ
	E: letters[24], // ㅔ
	Yeo: letters[25], // ㅕ
	Ye: letters[26], // ㅖ
	O: letters[27], // ㅗ
	Wa: letters[28], // ㅘ
	Wae: letters[29], // ㅙ
	Oe: letters[30], // ㅚ
	Yo: letters[31], // ㅛ
	U: letters[32], // ㅜ
	Weo: letters[33], // ㅝ
	We: letters[34], // ㅞ
	Wi: letters[35], // ㅟ
	Yu: letters[36], // ㅠ
	Eu: letters[37], // ㅡ
	Yi: letters[38], // ㅢ
	I: letters[39], // ㅣ
}

export const hangul = new Script(
	Abjad.Hangul,
	false,
	letters,
)
