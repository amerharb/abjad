import { Abjad, convert, getLetters } from '../src'
import { describe, expect, it } from '@jest/globals'

describe('index.ts', () => {
	describe('convert()', () => {
		describe('from Arabic', () => {
			describe('to Hangul', () => {
				it('convert ا ب ج into 아 브 즈', () => {
					const actual = convert('ا ب ج', Abjad.Arabic, Abjad.Hangul)
					expect(actual).toEqual('아 브 즈')
				})
			})
			describe('to HanifiRohingya', () => {
				it('convert ا ب ج into 𐴀 𐴁 𐴅', () => {
					const actual = convert('ا ب ج', Abjad.Arabic, Abjad.HanifiRohingya)
					expect(actual).toEqual('𐴀 𐴁 𐴅')
				})
			})
			describe('to ImperialAramaic', () => {
				it('convert ا ب ج into 𐡀 𐡁 𐡂', () => {
					const actual = convert('ا ب ج', Abjad.Arabic, Abjad.ImperialAramaic)
					expect(actual).toEqual('𐡀 𐡁 𐡂')
				})
			})
			describe('to IPA', () => {
				it('convert ا ب ج into aː b ʒ', () => {
					const actual = convert('ا ب ج', Abjad.Arabic, Abjad.IPA)
					expect(actual).toEqual('aː b ʒ')
				})
			})
			describe('to OldSouthArabian', () => {
				it('convert ا ب ج into \uD802\uDE71 \uD802\uDE68 \uD802\uDE74', () => {
					const actual = convert('ا ب ج', Abjad.Arabic, Abjad.OldSouthArabian)
					expect(actual).toEqual('\uD802\uDE71 \uD802\uDE68 \uD802\uDE74')
				})
			})
			describe('to Phoenician', () => {
				it('convert ا ب ج into 𐤀𐤟𐤁𐤟𐤂', () => {
					const actual = convert('ا ب ج', Abjad.Arabic, Abjad.Phoenician)
					expect(actual).toEqual('𐤀𐤟𐤁𐤟𐤂')
				})
			})
			describe('to Runic', () => {
				it('convert مرحبا into ᛗᚱᚻᛒᚫᚮ', () => {
					const actual = convert('مرحبا', Abjad.Arabic, Abjad.Runic)
					expect(actual).toEqual('ᛗᚱᚻᛒᚫᚮ')
				})
			})
			describe('to Syriac', () => {
				it('convert ا ب ج into ܐ ܒ ܓ', () => {
					const actual = convert('ا ب ج', Abjad.Arabic, Abjad.Syriac)
					expect(actual).toEqual('ܐ ܒ ܓ')
				})
			})
			describe('to Tifinagh', () => {
				it('convert ا ب ج into ⴰ ⴱ ⵊ', () => {
					const actual = convert('ا ب ج', Abjad.Arabic, Abjad.Tifinagh)
					expect(actual).toEqual('ⴰ ⴱ ⵊ')
				})
			})
			describe('to Ugaritic', () => {
				it('convert ا ب ج into 𐎀 𐎁 𐎂', () => {
					const actual = convert('ا ب ج', Abjad.Arabic, Abjad.Ugaritic)
					expect(actual).toEqual('𐎀 𐎁 𐎂')
				})
			})
		})
		describe('from Hangul', () => {
			describe('to Arabic', () => {
				it('convert 한국 into هانگوك', () => {
					const actual = convert('한국', Abjad.Hangul, Abjad.Arabic)
					expect(actual).toEqual('هانگوك')
				})
			})
			describe('to IPA', () => {
				it('convert 한국 into hanɡuk', () => {
					const actual = convert('한국', Abjad.Hangul, Abjad.IPA)
					expect(actual).toEqual('hanɡuk')
				})
			})
		})
		describe('from HanifiRohingya', () => {
			describe('to Arabic', () => {
				it('convert 𐴀 𐴁 𐴅 into ا ب ج', () => {
					const actual = convert('𐴀 𐴁 𐴅', Abjad.HanifiRohingya, Abjad.Arabic)
					expect(actual).toEqual('ا ب ج')
				})
			})
		})
		describe('from ImperialAramaic', () => {
			describe('to Arabic', () => {
				it('convert 𐡀 𐡁 𐡂 into ا ب ج', () => {
					const actual = convert('𐡀 𐡁 𐡂', Abjad.ImperialAramaic, Abjad.Arabic)
					expect(actual).toEqual('ا ب ج')
				})
			})
			describe('to Phoenician', () => {
				it('convert 𐡀 𐡁 𐡂 into 𐤀𐤟𐤁𐤟𐤂', () => {
					const actual = convert('𐡀 𐡁 𐡂', Abjad.ImperialAramaic, Abjad.Phoenician)
					expect(actual).toEqual('𐤀𐤟𐤁𐤟𐤂')
				})
			})
			describe('to Syriac', () => {
				it('convert 𐡀 𐡁 𐡂 into ܐ ܒ ܓ', () => {
					const actual = convert('𐡀 𐡁 𐡂', Abjad.ImperialAramaic, Abjad.Syriac)
					expect(actual).toEqual('ܐ ܒ ܓ')
				})
			})
			describe('to Tifinagh', () => {
				it('convert 𐡀 𐡁 𐡂 into ⴰ ⴱ ⵊ', () => {
					const actual = convert('𐡀 𐡁 𐡂', Abjad.ImperialAramaic, Abjad.Tifinagh)
					expect(actual).toEqual('ⴰ ⴱ ⵊ')
				})
			})
			describe('to Ugaritic', () => {
				it('convert 𐡀 𐡁 𐡂 into 𐎀 𐎁 𐎂', () => {
					const actual = convert('𐡀 𐡁 𐡂', Abjad.ImperialAramaic, Abjad.Ugaritic)
					expect(actual).toEqual('𐎀 𐎁 𐎂')
				})
			})
		})
		describe('from IPA', () => {
			describe('to Arabic', () => {
				it('convert a b ʒ into ا ب ج', () => {
					const actual = convert('a b ʒ', Abjad.IPA, Abjad.Arabic)
					expect(actual).toEqual('ا ب ج')
				})
			})
			describe('to Hangul', () => {
				it('convert hanɡuɡ into 한국', () => {
					const actual = convert('hanɡuɡ', Abjad.IPA, Abjad.Hangul)
					expect(actual).toEqual('한국')
				})
			})
		})
		describe('from Nabataean', () => {
			describe('to Arabic', () => {
				it('convert 𐢀 𐢂  into ا ب ج', () => {
					const actual = convert('𐢀 𐢂 𐢄', Abjad.Nabataean, Abjad.Arabic)
					expect(actual).toEqual('ا ب ج')
				})
			})
		})
		describe('from OldSouthArabian', () => {
			describe('to Arabic', () => {
				it('convert \uD802\uDE71 \uD802\uDE68 \uD802\uDE74 into ا ب ج', () => {
					const actual = convert('\uD802\uDE71 \uD802\uDE68 \uD802\uDE74', Abjad.OldSouthArabian, Abjad.Arabic)
					expect(actual).toEqual('ا ب ج')
				})
			})
		})
		describe('from Phoenician', () => {
			describe('to Arabic', () => {
				it('convert 𐤀𐤟𐤁𐤟𐤂 into ا ب ج', () => {
					const actual = convert('𐤀𐤟𐤁𐤟𐤂', Abjad.Phoenician, Abjad.Arabic)
					expect(actual).toEqual('ا ب ج')
				})
			})
			describe('to ImperialAramaic', () => {
				it('convert 𐤀𐤟𐤁𐤟𐤂 into 𐡀 𐡁 𐡂', () => {
					const actual = convert('𐤀𐤟𐤁𐤟𐤂', Abjad.Phoenician, Abjad.ImperialAramaic)
					expect(actual).toEqual('𐡀 𐡁 𐡂')
				})
			})
			describe('to Syriac', () => {
				it('convert 𐤀𐤟𐤁𐤟𐤂 into ܐ ܒ ܓ', () => {
					const actual = convert('𐤀𐤟𐤁𐤟𐤂', Abjad.Phoenician, Abjad.Syriac)
					expect(actual).toEqual('ܐ ܒ ܓ')
				})
			})
			describe('to Tifinagh', () => {
				it('convert 𐤀𐤟𐤁𐤟𐤂 into ⴰ ⴱ ⵊ', () => {
					const actual = convert('𐤀𐤟𐤁𐤟𐤂', Abjad.Phoenician, Abjad.Tifinagh)
					expect(actual).toEqual('ⴰ ⴱ ⵊ')
				})
			})
			describe('to Ugaritic', () => {
				it('convert 𐤀𐤟𐤁𐤟𐤂 into 𐎀𐎁𐎂', () => {
					const actual = convert('𐤀𐤟𐤁𐤟𐤂', Abjad.Phoenician, Abjad.Ugaritic)
					expect(actual).toEqual('𐎀 𐎁 𐎂')
				})
			})
		})
		describe('from Runic', () => {
			describe('to IPA', () => {
				it('convert ᚱ ᚷ ᛈ ᛏ ᛒ ᛗ into r g p t b m', () => {
					const actual = convert('ᚱ ᚷ ᛈ ᛏ ᛒ ᛗ', Abjad.Runic, Abjad.IPA)
					expect(actual).toEqual('r g p t b m')
				})
			})
		})
		describe('from Syriac', () => {
			describe('to Arabic', () => {
				it('convert ܐ ܒ ܓ into ا ب ج', () => {
					const actual = convert('ܐ ܒ ܓ', Abjad.Syriac, Abjad.Arabic)
					expect(actual).toEqual('ا ب ج')
				})
			})
			describe('to ImperialAramaic', () => {
				it('convert ܐ ܒ ܓ into 𐡀 𐡁 𐡂', () => {
					const actual = convert('ܐ ܒ ܓ', Abjad.Syriac, Abjad.ImperialAramaic)
					expect(actual).toEqual('𐡀 𐡁 𐡂')
				})
			})
			describe('to Phoenician', () => {
				it('convert ܐ ܒ ܓ into 𐤀𐤟𐤁𐤟𐤂', () => {
					const actual = convert('ܐ ܒ ܓ', Abjad.Syriac, Abjad.Phoenician)
					expect(actual).toEqual('𐤀𐤟𐤁𐤟𐤂')
				})
			})
			describe('to Tifinagh', () => {
				it('convert ܐ ܒ ܓ into ⴰ ⴱ ⵊ', () => {
					const actual = convert('ܐ ܒ ܓ', Abjad.Syriac, Abjad.Tifinagh)
					expect(actual).toEqual('ⴰ ⴱ ⵊ')
				})
			})
			describe('to Ugaritic', () => {
				it('convert ܐ ܒ ܓ into 𐎀 𐎁 𐎂', () => {
					const actual = convert('ܐ ܒ ܓ', Abjad.Syriac, Abjad.Ugaritic)
					expect(actual).toEqual('𐎀 𐎁 𐎂')
				})
			})
		})
		describe('from Tifinagh', () => {
			describe('to Arabic', () => {
				it('convert ⴰ ⴱ ⵊ into ا ب ج', () => {
					const actual = convert('ⴰ ⴱ ⵊ', Abjad.Tifinagh, Abjad.Arabic)
					expect(actual).toEqual('ا ب ج')
				})
			})
			describe('to ImperialAramaic', () => {
				it('convert ⴰ ⴱ ⵊ into 𐡀 𐡁 𐡂', () => {
					const actual = convert('ⴰ ⴱ ⵊ', Abjad.Tifinagh, Abjad.ImperialAramaic)
					expect(actual).toEqual('𐡀 𐡁 𐡂')
				})
			})
			describe('to Phoenician', () => {
				it('convert ⴰ ⴱ ⵊ into 𐤀𐤟𐤁𐤟𐤂', () => {
					const actual = convert('ⴰ ⴱ ⵊ', Abjad.Tifinagh, Abjad.Phoenician)
					expect(actual).toEqual('𐤀𐤟𐤁𐤟𐤂')
				})
			})
			describe('to Syriac', () => {
				it('convert ⴰ ⴱ ⵊ into ܐ ܒ ܓ', () => {
					const actual = convert('ⴰ ⴱ ⵊ', Abjad.Tifinagh, Abjad.Syriac)
					expect(actual).toEqual('ܐ ܒ ܓ')
				})
			})
			describe('to Ugaritic', () => {
				it('convert ⴰ ⴱ ⵊ into 𐎀 𐎁 𐎂', () => {
					const actual = convert('ⴰ ⴱ ⵊ', Abjad.Tifinagh, Abjad.Ugaritic)
					expect(actual).toEqual('𐎀 𐎁 𐎂')
				})
			})
		})
		describe('from Ugaritic', () => {
			describe('to Arabic', () => {
				it('convert 𐎀 𐎁 𐎂 into ا ب ج', () => {
					const actual = convert('𐎀 𐎁 𐎂', Abjad.Ugaritic, Abjad.Arabic)
					expect(actual).toEqual('ا ب ج')
				})
			})
			describe('to ImperialAramaic', () => {
				it('convert 𐎀 𐎁 𐎂 into 𐡀 𐡁 𐡂', () => {
					const actual = convert('𐎀 𐎁 𐎂', Abjad.Ugaritic, Abjad.ImperialAramaic)
					expect(actual).toEqual('𐡀 𐡁 𐡂')
				})
			})
			describe('to Phoenician', () => {
				it('convert 𐎀 𐎁 𐎂 into 𐤀𐤟𐤁𐤟𐤂', () => {
					const actual = convert('𐎀 𐎁 𐎂', Abjad.Ugaritic, Abjad.Phoenician)
					expect(actual).toEqual('𐤀𐤟𐤁𐤟𐤂')
				})
			})
			describe('to Syriac', () => {
				it('convert 𐎀 𐎁 𐎂 into ܐ ܒ ܓ', () => {
					const actual = convert('𐎀 𐎁 𐎂', Abjad.Ugaritic, Abjad.Syriac)
					expect(actual).toEqual('ܐ ܒ ܓ')
				})
			})
			describe('to Tifinagh', () => {
				it('convert 𐎀 𐎁 𐎂 into ⴰ ⴱ ⵊ', () => {
					const actual = convert('𐎀 𐎁 𐎂', Abjad.Ugaritic, Abjad.Tifinagh)
					expect(actual).toEqual('ⴰ ⴱ ⵊ')
				})
			})
		})
	})

	describe('getLetters()', () => {
		it.each(Object.values(Abjad))
		('returns letters for %s script', (input) => {
			const actual = getLetters(input)
			expect(actual).not.toEqual([])
		})
	})
})
