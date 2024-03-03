import { Abjad } from './types'
import { IConverter } from './IConverter'
import { ArabicToImperialAramaicConverter } from './scripts/arabic/toImperialAramaic'
import { ArabicToIpaConverter } from './scripts/arabic/toIpa'
import { ArabicToOldSouthArabianConverter } from './scripts/arabic/toOldSouthArabian'
import { ArabicToPhoenicianConverter } from './scripts/arabic/toPhoenician'
import { ArabicToSyriacConverter } from './scripts/arabic/toSyriac'
import { ArabicToTifinaghConverter } from './scripts/arabic/toTifinagh'
import { ArabicToUgariticConverter } from './scripts/arabic/toUgaritic'
import { ImperialAramaicToArabicConverter } from './scripts/imperialAramaic/toArabic'
import { IpaToArabicConverter } from './scripts/ipa/toArabic'
import { OldSouthArabicToArabicConverter } from './scripts/oldSouthArabian/toArabic'
import { PhoenicianToArabicConverter } from './scripts/phoenician/toArabic'
import { SyriacToArabicConverter } from './scripts/syriac/toArabic'
import { TifinaghToArabicConverter } from './scripts/tifinagh/toArabic'
import { UgariticToArabicConverter } from './scripts/ugaritic/toArabic'

const converters: IConverter[] = [
	new ArabicToImperialAramaicConverter(),
	new ArabicToIpaConverter(),
	new ArabicToOldSouthArabianConverter(),
	new ArabicToPhoenicianConverter(),
	new ArabicToSyriacConverter(),
	new ArabicToTifinaghConverter(),
	new ArabicToUgariticConverter(),
	new ImperialAramaicToArabicConverter(),
	new IpaToArabicConverter(),
	new OldSouthArabicToArabicConverter(),
	new PhoenicianToArabicConverter(),
	new SyriacToArabicConverter(),
	new TifinaghToArabicConverter(),
	new UgariticToArabicConverter(),
]

export function getConverter(from: Abjad, to: Abjad): IConverter {
	// try to find a direct converter
	const converter = converters.find(c => c.from === from && c.to === to)
	if (converter) {
		return converter
	}

	// try to find two converters and create a composite converter from them
	const fromConverters = converters.filter(c => c.from === from)
	const toConverters = converters.filter(c => c.to === to)
	for (const fromConverter of fromConverters) {
		for (const toConverter of toConverters) {
			if (fromConverter.to === toConverter.from) {
				return {
					from,
					to,
					convert(text: string): string {
						return toConverter.convert(fromConverter.convert(text))
					},
				}
			}
		}
	}

	// try to find 3 converters and create a composite converter from them
	for (const fromConverter of fromConverters) {
		for (const toConverter of toConverters) {
			for (const middleConverter of converters) {
				if (fromConverter.to === middleConverter.from && middleConverter.to === toConverter.from) {
					return {
						from,
						to,
						convert(text: string): string {
							return toConverter.convert(middleConverter.convert(fromConverter.convert(text)))
						},
					}
				}
			}
		}
	}

	throw new Error(`No converter exists from ${from} to ${to}`)
}
