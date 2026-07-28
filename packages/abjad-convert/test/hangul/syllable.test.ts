import { Ha } from '../../src/scripts/hangul/letters'
import { canBeFinal, composeSyllable, decomposeSyllable } from '../../src/scripts/hangul/syllable'
import { describe, expect, it } from '@jest/globals'

describe('hangul/syllable', () => {
	describe('composeSyllable()', () => {
		it('combine ㅎ ㅏ ㄴ into 한', () => {
			expect(composeSyllable(Ha.Hieuh, Ha.A, Ha.Nieun)).toEqual('한')
		})
		it('combine ㄱ ㅜ ㄱ into 국', () => {
			expect(composeSyllable(Ha.Kiyeok, Ha.U, Ha.Kiyeok)).toEqual('국')
		})
		it('combine ㅇ ㅏ into 아 when there is no final', () => {
			expect(composeSyllable(Ha.Ieung, Ha.A)).toEqual('아')
		})
		it('returns the letters unchanged when the initial is not a consonant', () => {
			expect(composeSyllable(Ha.A, Ha.A)).toEqual(Ha.A + Ha.A)
		})
		it('returns the letters unchanged when the medial is not a vowel', () => {
			expect(composeSyllable(Ha.Kiyeok, Ha.Kiyeok)).toEqual(Ha.Kiyeok + Ha.Kiyeok)
		})
		it('ignores a final that cannot close a syllable', () => {
			expect(composeSyllable(Ha.Hieuh, Ha.A, Ha.SsangTikeut)).toEqual('하')
		})
	})

	describe('decomposeSyllable()', () => {
		it('split 한 into ㅎ ㅏ ㄴ', () => {
			expect(decomposeSyllable('한')).toEqual({ choseong: 18, jungseong: 0, jongseong: 4 })
		})
		it('split 아 into ㅇ ㅏ with no final', () => {
			expect(decomposeSyllable('아')).toEqual({ choseong: 11, jungseong: 0, jongseong: 0 })
		})
		it('returns undefined for a standalone letter', () => {
			expect(decomposeSyllable(Ha.Kiyeok)).toBeUndefined()
		})
		it('returns undefined for a character outside the syllables block', () => {
			expect(decomposeSyllable('a')).toBeUndefined()
		})
		it('returns undefined for an empty string', () => {
			expect(decomposeSyllable('')).toBeUndefined()
		})
	})

	describe('canBeFinal()', () => {
		it('is true for ㄴ', () => {
			expect(canBeFinal(Ha.Nieun)).toBe(true)
		})
		it('is false for ㄸ, which never closes a syllable', () => {
			expect(canBeFinal(Ha.SsangTikeut)).toBe(false)
		})
		it('is false for a vowel', () => {
			expect(canBeFinal(Ha.A)).toBe(false)
		})
	})
})
