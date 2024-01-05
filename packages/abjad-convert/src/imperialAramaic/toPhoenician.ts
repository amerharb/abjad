import { IConvert } from '../IConvert'
import { Abjad } from '../types'
import { ImperialAramaicToArabicConverter } from './toArabic'
import { ArabicToPhoenicianConverter } from '../arabic/toPhoenician'

export class ImperialAramaicToPhoenicianConverter implements IConvert {
	public readonly from = Abjad.ImperialAramaic
	public readonly to = Abjad.Phoenician

	public convert(text: string): string {
		const IaToAr = new ImperialAramaicToArabicConverter()
		const ar = IaToAr.convert(text)
		const ArToPh = new ArabicToPhoenicianConverter()
		return ArToPh.convert(ar)
	}
}