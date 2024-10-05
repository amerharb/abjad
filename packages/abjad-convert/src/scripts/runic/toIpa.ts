import { Ru } from './letters'
import { IPA } from '../ipa/letters'
import { DirectConverter } from '../../DirectConverter'
import { Abjad } from '../../types'

export class RunicToIpaConverter extends DirectConverter {
	public readonly from = Abjad.Runic
	public readonly to = Abjad.IPA

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[Ru.Fe, IPA.f],								// ᚠ -> f
			[Ru.Ve, IPA.v],								// ᚡ -> v
			[Ru.Uru, IPA.u],							// ᚢ -> u
			[Ru.Yr, IPA.y],								// ᚣ -> y
			[Ru.Y, IPA.ʏ],								// ᚤ -> ʏ
			[Ru.W, IPA.w],								// ᚥ -> w
			[Ru.Thurisaz, IPA.θ],					// ᚦ -> θ
			[Ru.Eth, IPA.ð],							// ᚧ -> ð
			[Ru.Ansuz, IPA.ɑ + IPA.ː],		// ᚨ -> ɑː
			[Ru.Os, IPA.o],								// ᚩ -> o
			[Ru.Ac, IPA.ɑ],								// ᚪ -> ɑ
			[Ru.Aesc, IPA.æ],							// ᚫ -> æ
			[Ru.LongBranchOss, IPA.o],		// ᚬ -> o
			[Ru.ShortTwigOss, IPA.o],			// ᚭ -> o
			[Ru.O, IPA.o],								// ᚮ -> o
			[Ru.Oe, IPA.ø],								// ᚯ -> ø
			[Ru.On, IPA.ɔ],								// ᚰ -> ɔ
			[Ru.Raido, IPA.r],						// ᚱ -> r
			[Ru.KaunA, IPA.k],						// ᚲ -> k
			[Ru.Cen, IPA.k],							// ᚳ -> k
			[Ru.KaunK, IPA.k],						// ᚴ -> k
			[Ru.G, IPA.g],								// ᚵ -> g
			[Ru.Eng, IPA.ŋ],							// ᚶ -> ŋ
			[Ru.Gebo, IPA.g],							// ᚷ -> g
			[Ru.Gar, IPA.g],							// ᚸ -> g
			[Ru.Wunjo, IPA.w],						// ᚹ -> w
			[Ru.Haglaz, IPA.h],						// ᚺ -> h
			[Ru.Haegl, IPA.h],						// ᚻ -> h
			[Ru.LongBranchHagall, IPA.h],	// ᚼ -> h
			[Ru.ShortTwigHagall, IPA.h],	// ᚽ -> h
			[Ru.Naudiz, IPA.n],						// ᚾ -> n
			[Ru.ShortTwigNaud, IPA.n],		// ᚿ -> n
			[Ru.DottedN, IPA.n],					// ᛀ -> n
			[Ru.Isaz, IPA.i],							// ᛁ -> i
			[Ru.E, IPA.e],								// ᛂ -> e
			[Ru.Jeran, IPA.j],						// ᛃ -> j
			[Ru.Ger, IPA.j],							// ᛄ -> j
			[Ru.LongBranchAr, IPA.a],			// ᛅ -> a
			[Ru.ShortTwigAr, IPA.a],			// ᛆ -> a
			[Ru.Iwaz, IPA.i + IPA.ː],			// ᛇ -> iː
			[Ru.Pertho, IPA.p],						// ᛈ -> p
			[Ru.Algiz, IPA.z],						// ᛉ -> z
			[Ru.Sowilo, IPA.s],						// ᛊ -> s
			[Ru.Sigel, IPA.s],						// ᛋ -> s
			[Ru.ShortTwigSol, IPA.s],			// ᛌ -> s
			[Ru.C, IPA.k],								// ᛍ -> k
			[Ru.Z, IPA.z],								// ᛎ -> z
			[Ru.Tiwaz, IPA.t],						// ᛏ -> t
			[Ru.ShortTwigTyr, IPA.t],			// ᛐ -> t
			[Ru.D, IPA.d],								// ᛑ -> d
			[Ru.Berkanan, IPA.b],					// ᛒ -> b
			[Ru.ShortTwigBjarkan, IPA.b],	// ᛓ -> b
			[Ru.DottedP, IPA.p],					// ᛔ -> p
			[Ru.OpenP, IPA.p],						// ᛕ -> p
			[Ru.Ehwaz, IPA.e + IPA.ː],		// ᛖ -> eː
			[Ru.Mannaz, IPA.m],						// ᛗ -> m
			[Ru.LongBranchMadr, IPA.ʀ],		// ᛦ -> ʀ
			[Ru.ShortTwigMadr, IPA.ʀ],		// ᛧ -> ʀ
			[Ru.Laukaz, IPA.l],						// ᛚ -> l
			[Ru.DottedL, IPA.l],					// ᛛ -> l
			[Ru.Ingwaz, IPA.ŋ],						// ᛜ -> ŋ
			[Ru.Ing, IPA.ŋ],							// ᛝ -> ŋ
			[Ru.Dagaz, IPA.d],						// ᛞ -> d
			[Ru.Othalan, IPA.o + IPA.ː],	// ᛟ -> oː
			[Ru.Ear, IPA.æ + IPA.ː],			// ᛠ -> æː
			[Ru.Ior, IPA.i + IPA.o],			// ᛡ -> io
			[Ru.Cweorth, IPA.x],					// ᛢ -> x
			[Ru.Calc, IPA.x],							// ᛣ -> x
			[Ru.Cealc, IPA.x],						// ᛤ -> x
			[Ru.Stan, IPA.x],							// ᛥ -> x
			[Ru.LongBranchYr, IPA.ʀ],			// ᛦ -> ʀ
			[Ru.ShortTwigYr, IPA.ʀ],			// ᛧ -> ʀ
			[Ru.IcelandicYr, IPA.ʀ],			// ᛨ -> ʀ
			[Ru.Q, IPA.k],								// ᛩ -> k
			[Ru.X, IPA.k],								// ᛪ -> k

			// Punctuation
			[Ru.SinglePunctuation, Ru.SinglePunctuation],				// keep as is
			[Ru.MultiplePunctuation, Ru.MultiplePunctuation],		// keep as is
			[Ru.CrossPunctuation, Ru.CrossPunctuation],					// keep as is

			// TODO: support below
			// Golden number runes
			[Ru.Arlaug, ''],
			[Ru.Tvimadur, ''],
			[Ru.Belgthor, ''],

			// TODO: support below
			// Tolkienian extensions
			[Ru.K, ''],
			[Ru.Sh, IPA.ʃ],
			[Ru.Oo, ''],

			// TODO: support below
			// Cryptogrammic letters
			[Ru.FranksCasketOs, ''],
			[Ru.FranksCasketIs, ''],
			[Ru.FranksCasketEh, ''],
			[Ru.FranksCasketAc, ''],
			[Ru.FranksCasketAesc, ''],
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
