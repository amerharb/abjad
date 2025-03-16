import { Na } from './letters'
import { Ar } from '../arabic/letters'
import { DirectConverter } from '../../DirectConverter'
import { Abjad } from '../../types'

export class NabataeanToArabicConverter extends DirectConverter {
	public readonly from = Abjad.Nabataean
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Na.FinalAleph, Ar.Alef], //  𐢀 -> ا
			[Na.Aleph, Ar.Alef], // 𐢁 -> ا
			[Na.FinalBeth, Ar.Ba], // 𐢂 -> ب
			[Na.Beth, Ar.Ba], // 𐢃 -> ب
			[Na.Gimel, Ar.Jeem], // 𐢄 -> ج
			[Na.Daleth, Ar.Dal], // 𐢅 -> د
			[Na.FinalHe, Ar.Ha], // 𐢆 -> ه
			[Na.He, Ar.Ha], // 𐢇 -> ه

			[Na.Waw, Ar.Waw], // 𐢈 -> و
			[Na.Zayin, Ar.Zay], // 𐢉 -> ز
			[Na.Heth, Ar.H7aa], // 𐢊 -> ح
			[Na.Teth, Ar.TTa], // 𐢋 -> ط
			[Na.FinalYodh, Ar.Yaa], // 𐢌 -> ي
			[Na.Yodh, Ar.Yaa],// 𐢍 -> ي
			[Na.FinalKaph, Ar.Kaf], // 𐢎 -> ك
			[Na.Kaph, Ar.Kaf], // 𐢏 -> ك

			[Na.FinalLamedh, Ar.Lam], // 𐢐 -> ل
			[Na.Lamedh, Ar.Lam], // 𐢑 -> ل
			[Na.FinalMem, Ar.Meem], // 𐢒 -> م
			[Na.Mem, Ar.Meem], // 𐢓 -> م
			[Na.FinalNun, Ar.Noon], // 𐢔 -> ن
			[Na.Nun, Ar.Noon], // 𐢕 -> ن
			[Na.Samekh, Ar.Seen], // 𐢖 -> س
			[Na.Ayin, Ar.Ayn], // 𐢗 -> ع

			[Na.Pe, Ar.Fa], // 𐢘 -> ف
			[Na.Sadhe, Ar.Sad], // 𐢙 -> ص
			[Na.Qoph, Ar.Qaf], // 𐢚 -> ق
			[Na.Resh, Ar.Ra], // 𐢛 -> ر
			[Na.FinalShin, Ar.Sheen], // 𐢜 -> ش
			[Na.Shin, Ar.Sheen], // 𐢝 -> ش
			[Na.Taw, Ar.Ta], // 𐢞 -> ت
		],
	)

	public convert(text: string): string {
		let result = ''
		for (const letter of text) {
			result += this.map.get(letter) ?? ''
		}
		return result
	}
}
