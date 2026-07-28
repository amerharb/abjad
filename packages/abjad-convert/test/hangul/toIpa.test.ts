import { Abjad, convert } from '../../src'
import { HangulToIpaConverter } from '../../src/scripts/hangul/toIpa'
import { describe, expect, it } from '@jest/globals'

describe('HangulToIpaConverter', () => {
	describe('convert()', () => {
		const converter = new HangulToIpaConverter()

		describe('syllable blocks', () => {
			it('convert 한국 into hanɡuk', () => {
				expect(converter.convert('한국')).toEqual('hanɡuk')
			})
			it('convert 서울 into sʌul', () => {
				expect(converter.convert('서울')).toEqual('sʌul')
			})
			it('convert 김치 into ɡimʧi', () => {
				expect(converter.convert('김치')).toEqual('ɡimʧi')
			})
			it('convert 강남 into ɡaŋnam', () => {
				expect(converter.convert('강남')).toEqual('ɡaŋnam')
			})
		})

		describe('ㅇ', () => {
			it('is silent when it opens a syllable, so 우 gives u', () => {
				expect(converter.convert('우')).toEqual('u')
			})
			it('is sounded ŋ when it closes a syllable, so 중 gives ʤuŋ', () => {
				expect(converter.convert('중')).toEqual('ʤuŋ')
			})
		})

		describe('glide vowels are written as two sounds', () => {
			it('convert 야 into ja', () => {
				expect(converter.convert('야')).toEqual('ja')
			})
			it('convert 와 into wa', () => {
				expect(converter.convert('와')).toEqual('wa')
			})
			it('convert 권 into ɡwʌn', () => {
				expect(converter.convert('권')).toEqual('ɡwʌn')
			})
		})

		describe('finals are neutralised to k t p m n ŋ l', () => {
			it('convert 곧 into kot', () => {
				expect(converter.convert('곧')).toEqual('ɡot')
			})
			it('convert 곳 into the same sounds as 곧', () => {
				expect(converter.convert('곳')).toEqual(converter.convert('곧'))
			})
			it('convert 밥 into bap', () => {
				expect(converter.convert('밥')).toEqual('bap')
			})
		})

		describe('standalone letters', () => {
			it('convert ㄱ ㄴ ㅏ into ɡ n a', () => {
				expect(converter.convert('ㄱ ㄴ ㅏ')).toEqual('ɡ n a')
			})
		})

		describe('other input', () => {
			it('keeps the space between words', () => {
				expect(converter.convert('한국 서울')).toEqual('hanɡuk sʌul')
			})
			it('returns an empty string for an empty input', () => {
				expect(converter.convert('')).toEqual('')
			})
			it('drops characters that are not Korean', () => {
				expect(converter.convert('한!x')).toEqual('han')
			})
		})

		// The two converters use the same plain/aspirated convention, so Korean text can
		// make the trip through IPA and come back unchanged.
		describe('round trip through IPA', () => {
			it.each(['한국', '서울', '김치', '안녕', '강남', '부산', '물', '우', '야', '와', '권', '중', '감사합니다'])
			('returns %s unchanged', (word) => {
				const ipa = convert(word, Abjad.Hangul, Abjad.IPA)
				expect(convert(ipa, Abjad.IPA, Abjad.Hangul)).toEqual(word)
			})
		})
	})
})
