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
			[He.Gimel, Ar.Jeem],
			[He.Dalet, Ar.Dal],
			[He.He, Ar.Ha],
			[He.Vav, Ar.Waw],
			[He.Zayin, Ar.Zay],
			[He.Het, Ar.H7aa],
			[He.Tet, Ar.TTa],
			[He.Yod, Ar.Yaa],
			[He.FinalKaf, Ar.Kaf],
			[He.Kaf, Ar.Kaf],
			[He.Lamed, Ar.Lam],
			[He.FinalMem, Ar.Meem],
			[He.Mem, Ar.Meem],
			[He.FinalNun, Ar.Noon],
			[He.Nun, Ar.Noon],
			[He.Samekh, Ar.Seen],
			[He.Ayin, Ar.Ayn],
			[He.FinalPe, Ar.Fa],
			[He.Pe, Ar.Fa],
			[He.FinalTsadi, Ar.Sad],
			[He.Tsadi, Ar.Sad],
			[He.Qof, Ar.Qaf],
			[He.Resh, Ar.Ra],
			[He.Shin, Ar.Sheen],
			[He.Tav, Ar.Ta],
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
