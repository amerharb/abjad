import { Ar } from './letters'
import { He } from '../hebrew/letters'
import { DirectConverter } from '../../DirectConverter'
import { Abjad } from '../../types'

export class ArabicToHebrewConverter extends DirectConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.Hebrew

	private readonly map = new Map<string, string>(
		[
			[' ', ' '],
			[Ar.Hamza, He.Alef], // ء -> א
			[Ar.AlefMadda, He.Alef], // آ -> א
			[Ar.AlefHamza, He.Alef], // أ -> א
			[Ar.WawHamza, He.Vav], // ؤ -> ו
			[Ar.AlefHamzaMaksura, He.Alef], // ى -> א
			[Ar.Alef, He.Alef], // ا -> א
			[Ar.Ba, He.Bet], // ب -> ב
			[Ar.TaMarbuta, He.He], // ة -> ה
			[Ar.Ta, He.Tav], // ت -> ת
			[Ar.Tha, He.Tav], // ث -> ת
			[Ar.Jeem, He.Gimel], // ج -> ג
			[Ar.H7aa, He.He], // ح -> ה
			[Ar.Khaa, He.He], // خ -> ה
			[Ar.Dal, He.Dalet], // د -> ד
			[Ar.Thal, He.Dalet], // ذ -> ד
			[Ar.Ra, He.Resh], // ر -> ר
			[Ar.Zay, He.Zayin], // ز -> ז
			[Ar.Seen, He.Samekh], // س -> ס
			[Ar.Sheen, He.Shin], // ش -> ש
			[Ar.Sad, He.Tsadi], // ص -> צ
			[Ar.Dad, He.Dalet], // ض -> ד
			[Ar.TTa, He.Tav], // ط -> ת
			[Ar.THa, He.Tav], // ظ -> ת
			[Ar.Ayn, He.Ayin], // ع -> ע
			[Ar.Ghayn, He.Ayin], // غ -> ע
			[Ar.Fa, He.Pe], // ف -> פ
			[Ar.Qaf, He.Qof], // ق -> ק
			[Ar.Kaf, He.Kaf], // ك -> כ
			[Ar.Lam, He.Lamed], // ل -> ל
			[Ar.Meem, He.Mem], // م -> מ
			[Ar.Noon, He.Nun], // ن -> נ
			[Ar.Ha, He.He], // ه -> ה
			[Ar.Waw, He.Vav], // و -> ו
			[Ar.AlefMaksura, He.Alef], // ى -> א
			[Ar.Yaa, He.Yod], // ي -> י
			[Ar.Pe, He.Pe], // پ -> פ
			[Ar.Che, He.Shin], // چ -> ש
			[Ar.Že, He.Zayin], // ژ -> ז
			[Ar.Nga, He.Gimel], // ں -> ג
			[Ar.Ve, He.Vav], // و -> ו
			[Ar.Gaf, He.Gimel], // گ -> ג
		] as const
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
