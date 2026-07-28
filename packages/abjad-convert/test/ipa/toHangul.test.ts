import { IpaToHangulConverter } from '../../src/scripts/ipa/toHangul'
import { describe, expect, it } from '@jest/globals'

/*
 * Korean writes the plain stops ㄱ ㄷ ㅂ ㅈ and the aspirated ones ㅋ ㅌ ㅍ ㅊ. IPA only has a
 * voiced/voiceless contrast, so the loanword convention is followed: voiceless /k t p/ ->
 * ㅋ ㅌ ㅍ and voiced /ɡ d b/ -> ㄱ ㄷ ㅂ. Native Korean words are therefore spelled with the
 * voiced symbols in these tests, e.g. 한국 comes from /hanɡuɡ/.
 */
describe('IpaToHangulConverter', () => {
	describe('convert()', () => {
		const converter = new IpaToHangulConverter()

		describe('syllable blocks', () => {
			it('convert hanɡuɡ into 한국', () => {
				expect(converter.convert('hanɡuɡ')).toEqual('한국')
			})
			it('convert sʌul into 서울', () => {
				expect(converter.convert('sʌul')).toEqual('서울')
			})
			it('convert ɡimʧi into 김치', () => {
				expect(converter.convert('ɡimʧi')).toEqual('김치')
			})
			it('convert ɡamsahapnida into 감사합니다', () => {
				expect(converter.convert('ɡamsahapnida')).toEqual('감사합니다')
			})
			it('convert annjʌŋ into 안녕', () => {
				expect(converter.convert('annjʌŋ')).toEqual('안녕')
			})
			it('convert ɡaŋnam into 강남', () => {
				expect(converter.convert('ɡaŋnam')).toEqual('강남')
			})
			it('convert busan into 부산', () => {
				expect(converter.convert('busan')).toEqual('부산')
			})
		})

		describe('a syllable with no initial consonant takes the silent ㅇ', () => {
			it('convert u into 우', () => {
				expect(converter.convert('u')).toEqual('우')
			})
			it('convert a into 아', () => {
				expect(converter.convert('a')).toEqual('아')
			})
		})

		describe('a consonant between two vowels starts the next syllable', () => {
			it('convert koɾia into 코리아', () => {
				expect(converter.convert('koɾia')).toEqual('코리아')
			})
		})

		describe('final consonants (종성)', () => {
			it('convert buk into 북, closing the syllable with ㄱ', () => {
				expect(converter.convert('buk')).toEqual('북')
			})
			it('convert siŋ into 싱, closing the syllable with ㅇ', () => {
				expect(converter.convert('siŋ')).toEqual('싱')
			})
			it('convert mul into 물, closing the syllable with ㄹ', () => {
				expect(converter.convert('mul')).toEqual('물')
			})
			it('convert ŋ into 응, since ㅇ is silent as an initial', () => {
				expect(converter.convert('ŋ')).toEqual('응')
			})
			it('convert ɡɹæf into 그래프, as ㅍ cannot close a syllable', () => {
				expect(converter.convert('ɡɹæf')).toEqual('그래프')
			})
		})

		describe('consonant clusters take the filler vowel ㅡ', () => {
			it('convert stɹaik into 스트라익', () => {
				expect(converter.convert('stɹaik')).toEqual('스트라익')
			})
		})

		describe('glides are written as one vowel letter', () => {
			it('convert ja into 야', () => {
				expect(converter.convert('ja')).toEqual('야')
			})
			it('convert wa into 와', () => {
				expect(converter.convert('wa')).toEqual('와')
			})
			it('convert ɡwʌn into 권', () => {
				expect(converter.convert('ɡwʌn')).toEqual('권')
			})
			it('convert kjo into 쿄', () => {
				expect(converter.convert('kjo')).toEqual('쿄')
			})
		})

		describe('sounds Korean does not have', () => {
			it('convert kɔfi into 코피, mapping f to ㅍ', () => {
				expect(converter.convert('kɔfi')).toEqual('코피')
			})
			it('convert pizə into 피저, mapping z to ㅈ', () => {
				expect(converter.convert('pizə')).toEqual('피저')
			})
		})

		describe('other input', () => {
			it('keeps the space between words', () => {
				expect(converter.convert('hanɡuɡ sʌul')).toEqual('한국 서울')
			})
			it('drops the length mark', () => {
				expect(converter.convert('aː')).toEqual('아')
			})
			it('returns an empty string for an empty input', () => {
				expect(converter.convert('')).toEqual('')
			})
			it('drops characters it has no sound for', () => {
				expect(converter.convert('a!?')).toEqual('아')
			})
		})
	})
})
