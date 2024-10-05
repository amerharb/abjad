import { IPA } from './letters'
import { Ru } from '../runic/letters'
import { DirectConverter } from '../../DirectConverter'
import { Abjad } from '../../types'

export class IpaToRunicConverter extends DirectConverter {
	public readonly from = Abjad.IPA
	public readonly to = Abjad.Runic

	private map = new Map<string, string>(
		[
			[' ', ' '],
			[IPA.æ, Ru.Aesc],			// æ -> ᚫ
			[IPA.ç, Ru.Sh],				// ç -> ᛲ historically there is no should ch or sh, so used ext. ᛲ
			[IPA.ð, Ru.Eth],			// ð -> ᚧ
			[IPA.ø, Ru.Oe],				// ø -> ᚯ
			[IPA.ħ, Ru.Haegl],		// ħ -> ᚻ

			[IPA.ŋ, Ru.Gebo],			// ŋ -> ᚷ
			[IPA.œ, Ru.Oe],				// œ -> ᚯ
			[IPA.β, Ru.Fe],				// β -> ᚠ (closest approximation)
			[IPA.θ, Ru.Thurisaz],	// θ -> ᚦ
			[IPA.λ, Ru.Laukaz],		// λ -> ᛚ (closest approximation)
			[IPA.χ, Ru.Sh],				// χ -> ᛲ (modern extension)
			[IPA.ɐ, Ru.Ac],				// ɐ -> ᚪ (closest approximation)
			[IPA.ɑ, Ru.Ansuz],		// ɑ -> ᚨ
			[IPA.ɒ, Ru.Ansuz],		// ɒ -> ᚨ (closest approximation)
			[IPA.ɓ, Ru.Berkanan],	// ɓ -> ᛒ (closest approximation)
			[IPA.ɔ, Ru.O],				// ɔ -> ᚩ
			[IPA.ɕ, Ru.Cen],			// ɕ -> ᚳ (modern adaptation)
			[IPA.ɖ, Ru.D],				// ɖ -> ᛑ (closest approximation)
			[IPA.ɗ, Ru.Berkanan],	// ɗ -> ᛒ (closest approximation)
			[IPA.ɘ, Ru.Ac],				// ɘ -> ᚪ (closest approximation)
			[IPA.ə, Ru.O],				// ə -> ᚩ
			[IPA.ɚ, Ru.O],				// ɚ -> ᚩ (closest approximation)
			[IPA.ɛ, Ru.Aesc],			// ɛ -> ᚫ
			[IPA.ɜ, Ru.Aesc],			// ɜ -> ᚫ (closest approximation)
			[IPA.ɝ, Ru.O],				// ɝ -> ᚩ (closest approximation)
			[IPA.ɞ, Ru.O],				// ɞ -> ᚩ (closest approximation)
			[IPA.ɟ, Ru.Gebo],			// ɟ -> ᚷ (closest approximation)
			[IPA.ɠ, Ru.Gebo],			// ɠ -> ᚷ (closest approximation)
			[IPA.ɡ, Ru.Gebo],			// ɡ -> ᚷ
			[IPA.ɢ, Ru.Gebo],			// ɢ -> ᚷ (closest approximation)

			[IPA.ɣ, Ru.Gebo],			// ɣ -> ᚷ (closest approximation)
			[IPA.ɤ, Ru.Oe],				// ɤ -> ᚯ (closest approximation)
			[IPA.ɥ, Ru.Haegl],		// ɥ -> ᚻ (closest approximation)
			[IPA.ɦ, Ru.Haegl],		// ɦ -> ᚻ (closest approximation)
			[IPA.ɨ, Ru.Aesc],			// ɨ -> ᚫ (closest approximation)
			[IPA.ɪ, Ru.Ior],			// ɪ -> ᛁ
			[IPA.ɫ, Ru.Laukaz],		// ɫ -> ᛚ (closest approximation)
			[IPA.ɬ, Ru.Laukaz],		// ɬ -> ᛚ (closest approximation)
			[IPA.ɭ, Ru.Laukaz],		// ɭ -> ᛚ (closest approximation)
			[IPA.ɮ, Ru.Laukaz],		// ɮ -> ᛚ (closest approximation)
			[IPA.ɯ, Ru.Uru],			// ɯ -> ᚢ (closest approximation)
			[IPA.ɰ, Ru.Uru],			// ɰ -> ᚢ (closest approximation)
			[IPA.ɱ, Ru.Mannaz],		// ɱ -> ᛗ
			[IPA.ɲ, Ru.Ingwaz],		// ɲ -> ᛜ
			[IPA.ɳ, Ru.Ingwaz],		// ɳ -> ᛜ (closest approximation)
			[IPA.ɴ, Ru.Ingwaz],		// ɴ -> ᛜ (closest approximation)
			[IPA.ɵ, Ru.Oe],				// ɵ -> ᚯ (closest approximation)
			[IPA.ɶ, Ru.Oe],				// ɶ -> ᚯ (closest approximation)
			[IPA.ɸ, Ru.Fe],				// ɸ -> ᚠ (closest approximation)
			[IPA.ɹ, Ru.Raido],		// ɹ -> ᚱ
			[IPA.ɺ, Ru.Raido],		// ɺ -> ᚱ (closest approximation)
			[IPA.ɻ, Ru.Raido],		// ɻ -> ᚱ (closest approximation)
			[IPA.ɽ, Ru.Raido],		// ɽ -> ᚱ (closest approximation)
			[IPA.ɾ, Ru.Raido],		// ɾ -> ᚱ
			[IPA.ʁ, Ru.Gebo],			// ʁ -> ᚷ (closest approximation)

			[IPA.ʂ, Ru.Sh],				// ʂ -> ᛲ (modern extension for /ʂ/)
			[IPA.ʃ, Ru.Sh],				// ʃ -> ᛲ (historical equivalent for /ʃ/)
			[IPA.ʄ, Ru.Cen],			// ʄ -> ᚳ (closest approximation, though not historically used for this sound)
			[IPA.ʅ, Ru.Cen],			// ʅ -> ᚳ (closest approximation, not historically used for this sound)
			[IPA.ʆ, Ru.Cen],			// ʆ -> ᚳ (closest approximation, not historically used for this sound)
			[IPA.ʇ, Ru.Tiwaz],		// ʇ -> ᛏ (closest approximation, though not used historically for this sound)
			[IPA.ʈ, Ru.Tiwaz],		// ʈ -> ᛏ (closest approximation)
			[IPA.ʉ, Ru.Uru],			// ʉ -> ᚢ (closest approximation)
			[IPA.ʊ, Ru.O],				// ʊ -> ᚩ (closest approximation)
			[IPA.ʋ, Ru.Fe],				// ʋ -> ᚠ (closest approximation for /v/)
			[IPA.ʌ, Ru.Ansuz],		// ʌ -> ᚨ (closest approximation for /ʌ/)
			[IPA.ʍ, Ru.W],				// ʍ -> ᚹ (closest approximation for /w/)
			[IPA.ʎ, Ru.Y],				// ʎ -> ᚤ (closest approximation for /j/)
			[IPA.ʏ, Ru.Y],				// ʏ -> ᚤ (closest approximation)
			[IPA.ʐ, Ru.Raido],		// ʐ -> ᚱ (closest approximation for /r/)
			[IPA.ʑ, Ru.Raido],		// ʑ -> ᚱ (closest approximation)
			[IPA.ʒ, Ru.Sh],				// ʒ -> ᛲ (closest approximation for /ʒ/)
			[IPA.ʓ, Ru.Cen],			// ʓ -> ᚳ (closest approximation, though not historically used for this sound)
			[IPA.ʔ, Ru.Aesc],			// ʔ -> ᚫ (closest approximation for the glottal stop)
			[IPA.ʕ, Ru.Haegl],		// ʕ -> ᚻ (closest approximation for the pharyngeal voiced fricative)
			[IPA.ʖ, Ru.Haegl],		// ʖ -> ᚻ (closest approximation for the voiced pharyngeal fricative)
			[IPA.ʗ, Ru.Cen],			// ʗ -> ᚳ (closest approximation, though not historically used for this sound)
			[IPA.ʘ, Ru.Oe],				// ʘ -> ᚯ (closest approximation for the bilabial click)
			[IPA.ʙ, Ru.Berkanan],	// ʙ -> ᛒ (closest approximation for the bilabial flap)
			[IPA.ʚ, Ru.Oe],				// ʚ -> ᚯ (closest approximation for the open-mid central rounded vowel)

			[IPA.ʛ, Ru.Ger],			// ʛ -> ᚷ (Closest approximation for /g/)
			[IPA.ʜ, Ru.Haegl],		// ʜ -> ᚻ (Closest approximation for /h/, though historically not exact)
			[IPA.ʝ, Ru.Iwaz],			// ʝ -> ᛇ (Closest approximation for /j/, historically not used)
			[IPA.ʞ, Ru.Naudiz],		// ʞ -> ᚾ (Closest approximation for /ŋ/, though not historically used)
			[IPA.ʟ, Ru.Laukaz],		// ʟ -> ᛚ (Closest approximation for /l/)
			[IPA.ʠ, Ru.Raido],		// ʠ -> ᚱ (Closest approximation for /q/, though not historically used)
			[IPA.ʡ, Ru.Haegl],		// ʡ -> ᚻ (Closest approximation for the pharyngeal voiced stop, though historically not used)
			[IPA.ʢ, Ru.Haegl],		// ʢ -> ᚻ (Closest approximation for pharyngeal voiced fricative, historically not used)
			[IPA.ʣ, Ru.Eth],			// ʣ -> ᚧ (Closest approximation for /z/ with a retroflex articulation)
			[IPA.ʤ, Ru.Dagaz],		// ʤ -> ᛞ (Closest approximation for /dʒ/)
			[IPA.ʥ, Ru.Cen],			// ʥ -> ᚳ (Closest approximation for /dʑ/, though historically not used)
			[IPA.ʦ, Ru.Tiwaz],		// ʦ -> ᛏ (Closest approximation for /ts/)
			[IPA.ʧ, Ru.Tiwaz],		// ʧ -> ᛏ (Closest approximation for /tʃ/)
			[IPA.ʨ, Ru.Tiwaz],		// ʨ -> ᛏ (Closest approximation for /tʃ/, though not historically used)
			[IPA.ʩ, Ru.Fe],				// ʩ -> ᚠ (Closest approximation for /p/ with a specific articulation, though not historically used)
			[IPA.ʪ, Ru.Sowilo],		// ʪ -> ᛊ (Closest approximation for a lateral click, though not historically used)
			[IPA.ʫ, Ru.Sowilo],		// ʫ -> ᛊ (Closest approximation for a lateral click, though not historically used)
			[IPA.ʬ, Ru.Cen],			// ʬ -> ᚳ (Closest approximation for /k/ with a particular articulation, historically not used)
			[IPA.ʭ, Ru.Cen],			// ʭ -> ᚳ (Closest approximation, though historically not used)
			[IPA.ʮ, Ru.Cen],			// ʮ -> ᚳ (Closest approximation for a specific articulation, historically not used)
			[IPA.ʯ, Ru.Cen],			// ʯ -> ᚳ (Closest approximation for a specific articulation, historically not used)
			[IPA.ˤ, Ru.Haegl],		// ˤ -> ᚻ (Closest approximation for the pharyngeal articulation, though not historically used)
			[IPA.ː, Ru.O],				// ː -> ᚩ (Closest approximation for vowel length, though not used historically)
			[IPA.a, Ru.Aesc],			// a -> ᚫ (Closest approximation for /a/)
			[IPA.b, Ru.Berkanan],	// b -> ᛒ (Closest approximation for /b/)

			[IPA.c, Ru.Cen],			// c -> ᚳ (Closest approximation for /c/, though historically not used)
			[IPA.d, Ru.Dagaz],		// d -> ᛞ (Closest approximation for /d/)
			[IPA.e, Ru.Ear],			// e -> ᛠ (Closest approximation for /e/)
			[IPA.f, Ru.Fe],				// f -> ᚠ (Closest approximation for /f/)
			[IPA.g, Ru.Ger],			// g -> ᚷ (Closest approximation for /g/)
			[IPA.h, Ru.Haegl],		// h -> ᚻ (Closest approximation for /h/)
			[IPA.i, Ru.Ior],			// i -> ᛁ (Closest approximation for /i/)
			[IPA.j, Ru.Iwaz],			// j -> ᛇ (Closest approximation for /j/, though historically not used)
			[IPA.k, Ru.K],				// k -> ᚲ (Closest approximation for /k/)
			[IPA.l, Ru.Laukaz],		// l -> ᛚ (Closest approximation for /l/)
			[IPA.m, Ru.Mannaz],		// m -> ᛗ (Closest approximation for /m/)
			[IPA.n, Ru.Naudiz],		// n -> ᚾ (Closest approximation for /n/)
			[IPA.o, Ru.Oe],				// o -> ᚯ (Closest approximation for /o/)
			[IPA.p, Ru.Pertho],		// p -> ᛈ (Closest approximation for /p/)
			[IPA.q, Ru.Q],				// q -> ᛩ (Closest approximation for /q/, though historically not used)
			[IPA.r, Ru.Raido],		// r -> ᚱ (Closest approximation for /r/)
			[IPA.s, Ru.Sowilo],		// s -> ᛊ (Closest approximation for /s/)
			[IPA.t, Ru.Tiwaz],		// t -> ᛏ (Closest approximation for /t/)
			[IPA.u, Ru.Uru],			// u -> ᚢ (Closest approximation for /u/)
			[IPA.v, Ru.Berkanan],	// v -> ᛒ (Closest approximation for /v/)
			[IPA.w, Ru.Wunjo],		// w -> ᚹ (Closest approximation for /w/)
			[IPA.x, Ru.Cweorth],	// x -> ᛪ (Closest approximation for /x/)
			[IPA.y, Ru.Y],				// y -> ᚤ (Closest approximation for /y/)
			[IPA.z, Ru.Z],				// z -> ᛉ (Closest approximation for /z/)
			[IPA.ʧ, Ru.Tiwaz],		// ʧ -> ᛏ (Closest approximation for /tʃ/)
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
