import { IPA } from './letters'
import { Ar } from '../arabic/letters'
import { DirectConverter } from '../../DirectConverter'
import { Abjad } from '../../types'

export class IpaToArabicConverter extends DirectConverter {
	public readonly from = Abjad.IPA
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[IPA.æ, Ar.Alef], /** ا <- æ */
			[IPA.ç, Ar.Che], /** چ <- ç */
			[IPA.ð, Ar.Thal], /** د <- ð */
			[IPA.ø, Ar.Waw], /** و <- ø */
			[IPA.ħ, Ar.H7aa], /** ح <- ħ */
			[IPA.ŋ, Ar.Noon], /** ن <- ŋ */
			[IPA.œ, Ar.Alef], /** ا <- œ */
			[IPA.β, Ar.Ba], /** ب <- β */
			[IPA.θ, Ar.Tha], /** ث <- θ */
			[IPA.λ, Ar.Lam], /** ل <- λ */
			[IPA.χ, Ar.Khaa], /** خ <- χ */
			[IPA.ɐ, Ar.Alef], /** ا <- ɐ */
			[IPA.ɑ, Ar.Alef], /** ا <- ɑ */
			[IPA.ɒ, Ar.Alef], /** ا <- ɒ */
			[IPA.ɓ, Ar.Ba], /** ب <- ɓ */
			[IPA.ɔ, Ar.Waw], /** و <- ɔ */
			[IPA.ɕ, Ar.Seen], /** س <- ɕ */
			[IPA.ɖ, Ar.Dal], /** د <- ɖ */
			[IPA.ɗ, Ar.Dal], /** د <- ɗ */
			[IPA.ɘ, Ar.Fatha], /** ـَ <- ɘ */
			[IPA.ə, Ar.Alef], /** ا <- ə */
			[IPA.ɚ, Ar.Alef], /** ا <- ɚ */
			[IPA.ɛ, Ar.Alef], /** ا <- ɛ */
			[IPA.ɜ, Ar.Alef], /** ا <- ɜ */
			[IPA.ɝ, Ar.Alef], /** ا <- ɝ */
			[IPA.ɞ, Ar.Alef], /** ا <- ɞ */
			[IPA.ɟ, Ar.Jeem], /** ج <- ɟ */
			[IPA.ɠ, Ar.Gaf], /** گ <- ɠ */
			[IPA.ɡ, Ar.Gaf], /** گ <- ɡ */
			[IPA.ɢ, Ar.Gaf], /** گ <- ɢ */
			[IPA.ɣ, Ar.Ghayn], /** غ <- ɣ */
			[IPA.ɤ, Ar.Alef], /** ا <- ɤ */
			[IPA.ɥ, Ar.Waw], /** و <- ɥ */
			[IPA.ɦ, Ar.Ha], /** ه <- ɦ */
			[IPA.ɨ, Ar.Yaa], /** ي <- ɨ */
			[IPA.ɪ, Ar.Yaa], /** ي <- ɪ */
			[IPA.ɫ, Ar.Lam], /** ل <- ɫ */
			[IPA.ɬ, Ar.Lam], /** ل <- ɬ */
			[IPA.ɭ, Ar.Lam], /** ل <- ɭ */
			[IPA.ɮ, Ar.Lam + Ar.Sheen], /** لش <- ɮ */
			[IPA.ɯ, Ar.Waw], /** و <- ɯ */
			[IPA.ɰ, Ar.Ghayn], /** غ <- ɰ */
			[IPA.ɱ, Ar.Meem], /** م <- ɱ */
			[IPA.ɲ, Ar.Noon], /** ن <- ɲ */
			[IPA.ɳ, Ar.Noon], /** ن <- ɳ */
			[IPA.ɴ, Ar.Noon], /** ن <- ɴ */
			[IPA.ɵ, Ar.Waw], /** و <- ɵ */
			[IPA.ɶ, Ar.Alef], /** ا <- ɶ */
			[IPA.ɸ, Ar.Fa], /** ف <- ɸ */
			[IPA.ɹ, Ar.Ra], /** ر <- ɹ */
			[IPA.ɺ, Ar.Ra], /** ر <- ɺ */
			[IPA.ɻ, Ar.Ra], /** ر <- ɻ */
			[IPA.ɽ, Ar.Ra], /** ر <- ɽ */
			[IPA.ɾ, Ar.Ra], /** ر <- ɾ */
			[IPA.ʁ, Ar.Ra], /** ر <- ʁ */
			[IPA.ʂ, Ar.Seen], /** س <- ʂ */
			[IPA.ʃ, Ar.Sheen], /** ش <- ʃ */
			[IPA.ʄ, ''], /**  <- ʄ */ // no equivalent in Arabic
			[IPA.ʅ, ''], /** <- ʅ */ // no equivalent in Arabic
			[IPA.ʆ, Ar.Sheen], /** ش <- ʆ */
			[IPA.ʇ, ''], /**  <- ʇ */ // no equivalent in Arabic
			[IPA.ʈ, Ar.Ta], /** ت <- ʈ */
			[IPA.ʉ, Ar.Waw], /** و <- ʉ */
			[IPA.ʊ, Ar.Waw], /** و <- ʊ */
			[IPA.ʋ, Ar.Ve], /** ڤ <- ʋ */
			[IPA.ʌ, Ar.Alef], /** ا <- ʌ */
			[IPA.ʍ, ''], /** w -> silent */
			[IPA.ʎ, Ar.Lam], /** ل <- ʎ */
			[IPA.ʏ, Ar.Yaa], /** ي <- ʏ */
			[IPA.ʐ, Ar.Jeem], /** ج <- ʐ */
			[IPA.ʑ, Ar.Jeem], /** ج <- ʑ */
			[IPA.ʒ, Ar.Jeem], /** ج <- ʒ */
			[IPA.ʓ, Ar.Že], /** ژ <- ʓ */
			[IPA.ʔ, Ar.Hamza], /** ء <- ʔ */
			[IPA.ʕ, Ar.Ayn], /** ع <- ʕ */
			[IPA.ʖ, '!'], /** ! <- ʖ */ // click sound convert to "!"
			[IPA.ʗ, '!'], /**  <- ʗ */ // deprecated IPA, click sound convert to "!"
			[IPA.ʘ, '!'], /**  <- ʘ */ // click sound convert to "!"
			[IPA.ʙ, Ar.Ba], /** ب <- ʙ */
			[IPA.ʚ, Ar.Alef], /** ا <- ʚ */
			[IPA.ʛ, Ar.Gaf], /** گ <- ʛ */
			[IPA.ʜ, Ar.Ha], /** ه <- ʜ */
			[IPA.ʝ, Ar.Jeem], /** ج <- ʝ */
			[IPA.ʞ, '!'], /** ! <- ʞ */ // deprecated IPA, click sound convert to "!"
			[IPA.ʟ, Ar.Lam], /** ل <- ʟ */
			[IPA.ʠ, Ar.Qaf], /** ق <- ʠ */ // deprecated IPA.
			[IPA.ʡ, Ar.Qaf], /** ق <- ʡ */
			[IPA.ʢ, Ar.Ayn], /** ع <- ʢ */
			[IPA.ʣ, Ar.Dal + Ar.Zay], /** دز <- ʣ */ // deprecated IPA. use d͡z o  d͜z
			[IPA.ʤ, Ar.Jeem], /** ج <- ʤ */
			[IPA.ʥ, Ar.Dal + Ar.Zay], /** دز <- ʥ */
			[IPA.ʦ, Ar.Ta + Ar.Seen], /** تس <- ʦ */
			[IPA.ʧ, Ar.Che], /** چ <- ʧ */
			[IPA.ʨ, Ar.Ta + Ar.Sheen], /** تش <- ʨ */
			[IPA.ʩ, ''], /** <- ʩ */
			[IPA.ʪ, ''], /** <- ʪ */
			[IPA.ʫ, ''], /** <- ʫ */
			[IPA.ʬ, ''], /** <- ʬ */
			[IPA.ʭ, ''], /** <- ʭ */
			[IPA.ʮ, ''], /** <- ʮ */
			[IPA.ʯ, ''], /** <- ʯ */
			[IPA.ˤ, ''], /**  <- ˤ */
			[IPA.ː, Ar.Shadda], /** ّ  <- ː */
			[IPA.a, Ar.Alef], /** ا <- a */
			[IPA.b, Ar.Ba], /** ب <- b */
			[IPA.c, Ar.Che], /** چ <- c */
			[IPA.d, Ar.Dal], /** د <- d */
			[IPA.e, Ar.Alef], /** ا <- e */
			[IPA.f, Ar.Fa], /** ف <- f */
			[IPA.g, Ar.Gaf], /** گ <- g */
			[IPA.h, Ar.Ha], /** ه <- h */
			[IPA.i, Ar.Yaa], /** ي <- i */
			[IPA.j, Ar.Yaa + Ar.Fatha], /** يَ <- j */
			[IPA.k, Ar.Kaf], /** ك <- k */
			[IPA.l, Ar.Lam], /** ل <- l */
			[IPA.m, Ar.Meem], /** م <- m */
			[IPA.n, Ar.Noon], /** ن <- n */
			[IPA.o, Ar.Waw], /** و <- o */
			[IPA.p, Ar.Pe], /** پ <- p */
			[IPA.q, Ar.Qaf], /** ق <- q */
			[IPA.r, Ar.Ra], /** ر <- r */
			[IPA.s, Ar.Seen], /** س <- s */
			[IPA.t, Ar.Ta], /** ت <- t */
			[IPA.u, Ar.Waw], /** و <- u */
			[IPA.v, Ar.Ve], /** ڤ <- v */
			[IPA.w, ''], /** w -> silent */
			[IPA.x, Ar.Khaa], /** خ <- x */
			[IPA.y, Ar.Yaa], /** ي <- y */
			[IPA.z, Ar.Zay], /** ز <- z */
			[IPA.ʧ, Ar.Che], /** چ <- ʧ */
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
