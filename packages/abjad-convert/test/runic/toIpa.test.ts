import { RunicToIpaConverter } from '../../src/scripts/runic/toIpa'
import { describe, expect, it } from '@jest/globals'

describe('RunicToIpaConverter', () => {
	describe('convert()', () => {
		const converter = new RunicToIpaConverter()
		it('convert ᚨ ᛒ ᛊ into ɑː b s', () => {
			const actual = converter.convert('ᚨ ᛒ ᛊ')
			expect(actual).toEqual('ɑː b s')
		})
	})
})
