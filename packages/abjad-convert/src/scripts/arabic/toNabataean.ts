import { Ar } from './letters'
import { Na } from '../nabataean/letters'
import { DirectConverter } from '../../DirectConverter'
import { Abjad } from '../../types'

export class ArabicToNabataeanConverter extends DirectConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.Nabataean

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Ar.Hamza, ''], //  ء ->
			[Ar.AlefMadda, Na.Aleph], //  آ ->
			[Ar.AlefHamza, Na.Aleph], //  أ ->
			[Ar.WawHamza, Na.Waw], //  ؤ ->
			[Ar.AlefHamzaMaksura, Na.Aleph], //  ى ->
			[Ar.Alef, Na.Aleph], //  ا ->
			[Ar.Ba, Na.Beth], //  ب ->
			[Ar.TaMarbuta, Na.He], //  ة ->
			[Ar.Ta, Na.Taw], //  ت ->
			[Ar.Tha, Na.Taw], // Both Ta and Tha become Taw ث ->
			[Ar.Jeem, Na.Gimel], //  ج ->
			[Ar.H7aa, Na.Heth], //  ح ->
			[Ar.Khaa, Na.Heth], // Both H7aa and Khaa int o Heth خ ->
			[Ar.Dal, Na.Daleth], //  د ->
			[Ar.Thal, Na.Daleth], // Both Dal and Thal into Daleth ذ ->
			[Ar.Ra, Na.Resh], //  ر ->
			[Ar.Zay, Na.Zayin], //  ز ->
			[Ar.Seen, Na.Samekh], //  س ->
			[Ar.Sheen, Na.Shin], //  ش ->
			[Ar.Sad, Na.Sadhe], //  ص ->
			[Ar.Dad, Na.Daleth], //  ض ->
			[Ar.TTa, Na.Teth], //  ط ->
			[Ar.THa, Na.Daleth], //  ظ ->
			[Ar.Ayn, Na.Ayin], //  ع ->
			[Ar.Ghayn, Na.Ayin], // Both Ayn and Ghayn into Ayin  غ ->
			[Ar.Fa, Na.Pe], //  ف ->
			[Ar.Qaf, Na.Qoph], //  ق ->
			[Ar.Kaf, Na.Kaph], //  ك ->
			[Ar.Lam, Na.Lamedh], //  ل ->
			[Ar.Meem, Na.Mem], //  م ->
			[Ar.Noon, Na.Nun], //  ن ->
			[Ar.Ha, Na.He], //  ه ->
			[Ar.Waw, Na.Waw], //  و ->
			[Ar.Yaa, Na.Yodh], //  ي ->
			[Ar.AlefMaksura, Na.Aleph], //  ى ->
		],
	)

	public convert(text: string): string {
		let result = ''
		for (const letter of text) {
			const u = this.map.get(letter) ?? ''
			result += u
		}
		return result
	}
}
