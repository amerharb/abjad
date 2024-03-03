import { Ar } from './letters'
import { IPA } from '../ipa/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class ArabicToIpaConverter implements IConverter {
	public readonly from = Abjad.Arabic
	public readonly to = Abjad.IPA

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Ar.Hamza, IPA.ʔ], /** ء -> ʔ */
			[Ar.AlefMadda, IPA.ʔ + IPA.a + IPA.ː], /** آ -> ʔaː */
			[Ar.AlefHamza, IPA.ʔ + IPA.a], /** ʔa <- أ */
			[Ar.WawHamza, IPA.ʔ + IPA.u + IPA.ː], /** ʔuː <- ؤ */
			[Ar.AlefHamzaMaksura, IPA.ʔ + IPA.i + IPA.ː], /** ʔiː <- إ */
			[Ar.Alef, IPA.a + IPA.ː], /** aː <- ا */
			[Ar.Ba, IPA.b], /** b <- ب */
			[Ar.TaMarbuta, IPA.h], /** h <- ة */
			[Ar.Ta, IPA.t], /** t <- ت */
			[Ar.Tha, IPA.θ], /** θ <- ث */
			[Ar.Jeem, IPA.ʒ], /** ʒ <- ج */
			[Ar.H7aa, IPA.ħ], /** ħ <- ح */
			[Ar.Khaa, IPA.x], /** x <- خ */
			[Ar.Dal, IPA.d], /** d <- د */
			[Ar.Thal, IPA.ð], /** ð <- ذ */
			[Ar.Ra, IPA.r], /** r <- ر */
			[Ar.Zay, IPA.z], /** z <- ز */
			[Ar.Seen, IPA.s], /** s <- س */
			[Ar.Sheen, IPA.ʃ], /** ʃ <- ش */
			[Ar.Sad, IPA.s + IPA.ˤ], /** sˤ <- ص */
			[Ar.Dad, IPA.d + IPA.ˤ], /** dˤ <- ض */
			[Ar.TTa, IPA.t + IPA.ˤ], /** tˤ <- ط */
			[Ar.THa, IPA.ð + IPA.ˤ], /** ðˤ <- ظ */
			[Ar.Ayn, IPA.ʕ], /** ʕ <- ع */
			[Ar.Ghayn, IPA.ɣ], /** ɣ <- غ */
			[Ar.Fa, IPA.f], /** f <- ف */
			[Ar.Qaf, IPA.q], /** q <- ق */
			[Ar.Kaf, IPA.k], /** k <- ك */
			[Ar.Lam, IPA.l], /** l <- ل */
			[Ar.Meem, IPA.m], /** m <- م */
			[Ar.Noon, IPA.n], /** n <- ن */
			[Ar.Ha, IPA.h], /** h <- ه */
			[Ar.Waw, IPA.u + IPA.ː], /** uː <- و */
			[Ar.Yaa, IPA.i + IPA.ː], /** iː <- ي */
			[Ar.AlefMaksura, IPA.a], /** a <- ى */
			[Ar.Fathatan, IPA.a + IPA.n], /** an <- ً */
			[Ar.Dammatan, IPA.u + IPA.n], /** un <- ٌ */
			[Ar.Kasratan, IPA.i + IPA.n], /** in <- ٍ */
			[Ar.Fatha, IPA.a], /** a <- َ */
			[Ar.Damma, IPA.u], /** u <- ُ */
			[Ar.Kasra, IPA.i], /** i <- ِ */
			[Ar.Shadda, ''], /** ?? <- ّ  TODO: this should repeat letter before */
			[Ar.Sukun, ''], /** silent <- ْ  */
			[Ar.AlefKhanjariya, IPA.a], /** a <- ٰ  */
			[Ar.AlefWasla, ''], /** silent <- ٱ */
			[Ar.Pe, IPA.p], /** p <- پ */
			[Ar.Che, IPA.ʧ], /** ʧ <- چ */
			[Ar.Ve, IPA.v], /** v <- ڤ */
			[Ar.Gaf, IPA.ɡ], /** ɡ <- گ */
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
