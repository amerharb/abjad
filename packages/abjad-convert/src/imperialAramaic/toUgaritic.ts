import { IConvert } from '../IConvert'
import { Abjad } from '../types'
import { ImperialAramaicToArabicConverter } from './toArabic'
import { ArabicToUgariticConverter } from '../arabic/toUgaritic'

export class ImperialAramaicToUgariticConverter implements IConvert {
	public readonly from = Abjad.ImperialAramaic
	public readonly to = Abjad.Ugaritic

	public convert(text: string): string {
		const IaToAr = new ImperialAramaicToArabicConverter()
		const ar = IaToAr.convert(text)
		const ArToUg = new ArabicToUgariticConverter()
		return ArToUg.convert(ar)
	}
}