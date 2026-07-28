import { Ha } from './letters'

/*
 * Hangul syllable composition.
 *
 * Korean is not written as a flat run of letters: two or three letters are packed into a
 * square syllable block. The Hangul Syllables block (U+AC00..U+D7A3) holds all 11,172
 * modern blocks in a fixed order, so a block can be computed arithmetically from the
 * index of its parts:
 *
 *   block = 0xAC00 + (choseong * 21 + jungseong) * 28 + jongseong
 *
 * where choseong is the initial consonant, jungseong the medial vowel, and jongseong the
 * optional final consonant (index 0 means "no final").
 */
const SYLLABLE_BASE = 0xAC00
const JUNGSEONG_COUNT = 21
const JONGSEONG_COUNT = 28

/** Initial consonants (초성), in Unicode index order. */
const CHOSEONG = [
	Ha.Kiyeok, Ha.SsangKiyeok, Ha.Nieun, Ha.Tikeut, Ha.SsangTikeut, Ha.Rieul, Ha.Mieum,
	Ha.Pieup, Ha.SsangPieup, Ha.Sios, Ha.SsangSios, Ha.Ieung, Ha.Cieuc, Ha.SsangCieuc,
	Ha.Chieuch, Ha.Khieukh, Ha.Thieuth, Ha.Phieuph, Ha.Hieuh,
]

/** Medial vowels (중성), in Unicode index order. */
const JUNGSEONG = [
	Ha.A, Ha.Ae, Ha.Ya, Ha.Yae, Ha.Eo, Ha.E, Ha.Yeo, Ha.Ye, Ha.O, Ha.Wa, Ha.Wae, Ha.Oe,
	Ha.Yo, Ha.U, Ha.Weo, Ha.We, Ha.Wi, Ha.Yu, Ha.Eu, Ha.Yi, Ha.I,
]

/*
 * Final consonants (종성). The full Unicode list also holds eleven two-letter clusters
 * (ㄳ ㄵ ㄶ ㄺ ㄻ ㄼ ㄽ ㄾ ㄿ ㅀ ㅄ) which transcription never produces, so only the single
 * letters are listed here, each with its own Unicode index.
 */
const JONGSEONG_INDEX = new Map<string, number>([
	[Ha.Kiyeok, 1],
	[Ha.SsangKiyeok, 2],
	[Ha.Nieun, 4],
	[Ha.Tikeut, 7],
	[Ha.Rieul, 8],
	[Ha.Mieum, 16],
	[Ha.Pieup, 17],
	[Ha.Sios, 19],
	[Ha.SsangSios, 20],
	[Ha.Ieung, 21],
	[Ha.Cieuc, 22],
	[Ha.Chieuch, 23],
	[Ha.Khieukh, 24],
	[Ha.Thieuth, 25],
	[Ha.Phieuph, 26],
	[Ha.Hieuh, 27],
])

const CHOSEONG_INDEX = new Map<string, number>(CHOSEONG.map((letter, i) => [letter, i]))
const JUNGSEONG_INDEX = new Map<string, number>(JUNGSEONG.map((letter, i) => [letter, i]))

/**
 * Combine Hangul letters into one syllable block, e.g. ㅎ + ㅏ + ㄴ -> 한.
 * Returns the letters unchanged when they cannot form a block.
 */
export function composeSyllable(initial: string, medial: string, final = ''): string {
	const choseong = CHOSEONG_INDEX.get(initial)
	const jungseong = JUNGSEONG_INDEX.get(medial)
	if (choseong === undefined || jungseong === undefined) {
		return initial + medial + final
	}
	const jongseong = final === '' ? 0 : JONGSEONG_INDEX.get(final) ?? 0
	const code = SYLLABLE_BASE
		+ (choseong * JUNGSEONG_COUNT + jungseong) * JONGSEONG_COUNT
		+ jongseong
	return String.fromCodePoint(code)
}

/** True when the letter can be used as a final consonant (종성). */
export function canBeFinal(letter: string): boolean {
	return JONGSEONG_INDEX.has(letter)
}

const SYLLABLE_LAST = 0xD7A3

/** The parts of a syllable block, as their Unicode indices. */
export type SyllableParts = {
	choseong: number
	jungseong: number
	jongseong: number
}

/**
 * Split a syllable block back into the indices of its parts, e.g. 한 -> ㅎ, ㅏ, ㄴ.
 * Returns undefined when the character is not a Hangul syllable block.
 */
export function decomposeSyllable(letter: string): SyllableParts | undefined {
	const code = letter.codePointAt(0)
	if (code === undefined || code < SYLLABLE_BASE || code > SYLLABLE_LAST) {
		return undefined
	}
	const offset = code - SYLLABLE_BASE
	return {
		choseong: Math.floor(offset / (JUNGSEONG_COUNT * JONGSEONG_COUNT)),
		jungseong: Math.floor(offset / JONGSEONG_COUNT) % JUNGSEONG_COUNT,
		jongseong: offset % JONGSEONG_COUNT,
	}
}
