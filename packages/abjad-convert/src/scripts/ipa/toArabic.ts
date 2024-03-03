import { IPA } from './letters'
import { Ar } from '../arabic/letters'
import { IConverter } from '../../IConverter'
import { Abjad } from '../../types'

export class IpaToArabicConverter implements IConverter {
	public readonly from = Abjad.IPA
	public readonly to = Abjad.Arabic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			// TODO: add all the IPA letters
			[IPA.ʔ, Ar.Hamza], /** ء <- ʔ */
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
