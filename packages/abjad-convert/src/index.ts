import { getConverter } from './converterFactory'
import { Abjad } from './types'
import { arabic } from './scripts/arabic/letters'
import { hanifiRohingya } from './scripts/hanifiRohingya/letters'
import { imperialAramaic } from './scripts/imperialAramaic/letters'
import { ipa } from './scripts/ipa/letters'
import { nabataean } from './scripts/nabataean/letters'
import { oldSouthArabian } from './scripts/oldSouthArabian/letters'
import { phoenician } from './scripts/phoenician/letters'
import { runic } from './scripts/runic/letters'
import { syriac } from './scripts/syriac/letters'
import { tifinagh } from './scripts/tifinagh/letters'
import { ugaritic } from './scripts/ugaritic/letters'

export { Abjad } from './types'

export function convert(source: string, from: Abjad, to: Abjad): string {
	if (from === to) {
		return source
	}
	const converter = getConverter(from, to)
	return converter.convert(source)
}

export function getLetters(script: Abjad): readonly string[] {
	switch (script) {
	case Abjad.Arabic:
		return arabic.letters
	case Abjad.HanifiRohingya:
		return hanifiRohingya.letters
	case Abjad.ImperialAramaic:
		return imperialAramaic.letters
	case Abjad.IPA:
		return ipa.letters
	case Abjad.Nabataean:
		return nabataean.letters
	case Abjad.OldSouthArabian:
		return oldSouthArabian.letters
	case Abjad.Phoenician:
		return phoenician.letters
	case Abjad.Runic:
		return runic.letters
	case Abjad.Syriac:
		return syriac.letters
	case Abjad.Tifinagh:
		return tifinagh.letters
	case Abjad.Ugaritic:
		return ugaritic.letters
	default:
		return []
	}
}
