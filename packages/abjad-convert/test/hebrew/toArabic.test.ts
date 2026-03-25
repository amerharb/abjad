import { describe, expect, it } from '@jest/globals'
import { HebrewToArabicConverter } from '../../src/scripts/hebrew/toArabic'

describe('HebrewToArabicConverter', () => {
	describe('convert()', () => {
		it('convert אבגדהוז to ابجدهوز', () => {
			const converter = new HebrewToArabicConverter()
			const actual = converter.convert('אבגדהוז')
			expect(actual).toEqual('ابجدهوز')
		})
		it('convert חטיכלמן to حطيكلمن', () => {
			const converter = new HebrewToArabicConverter()
			const actual = converter.convert('חטיכלמן')
			expect(actual).toEqual('حطيكلمن')
		})
		it('convert סעפצקרשת to سعفصقرشت', () => {
			const converter = new HebrewToArabicConverter()
			const actual = converter.convert('סעפצקרשת')
			expect(actual).toEqual('سعفصقرشت')
		})
		it('convert final forms ךםןףץ to كمنفص', () => {
			const converter = new HebrewToArabicConverter()
			const actual = converter.convert('ךםןףץ')
			expect(actual).toEqual('كمنفص')
		})
	})
})
