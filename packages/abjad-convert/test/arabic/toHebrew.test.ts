import { describe, expect, it } from '@jest/globals'
import { ArabicToHebrewConverter } from '../../src/scripts/arabic/toHebrew'

describe('ArabicToHebrewConverter', () => {
	describe('convert()', () => {
		it('convert ابجدهوز to אבגדהוז', () => {
			const converter = new ArabicToHebrewConverter()
			const actual = converter.convert('ابجدهوز')
			expect(actual).toEqual('אבגדהוז')
		})
		it('convert حطيكلمن to חטיכלמנ', () => {
			const converter = new ArabicToHebrewConverter()
			const actual = converter.convert('حطيكلمن')
			expect(actual).toEqual('חטיכלמנ')
		})
		it('convert سعفصقرشت to סעפצקרשת', () => {
			const converter = new ArabicToHebrewConverter()
			const actual = converter.convert('سعفصقرشت')
			expect(actual).toEqual('סעפצקרשת')
		})
	})
})
