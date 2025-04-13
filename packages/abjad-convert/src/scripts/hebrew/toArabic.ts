import { He } from './letters'
import { Ar } from '../arabic/letters'
import { DirectConverter } from '../../DirectConverter'
import { Abjad } from '../../types'

export class HebrewToArabicConverter extends DirectConverter {
	public readonly from = Abjad.Hebrew
	public readonly to = Abjad.Arabic

	private readonly map = new Map<string, string>(
		[
			[' ', ' '],
			[He.Alef, Ar.Alef],
			[He.Bet, Ar.Ba],
			// TODO: add missing letters
		]
	)

	public convert(text: string): string {
		let result = ''
		for (const letter of text) {
			result += this.map.get(letter) ?? ''
		}
		return result
	}
}
