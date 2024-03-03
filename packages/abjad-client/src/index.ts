import { Abjad, convert } from 'abjad-convert'

log('Abjad Convert')

const arabic = 'ا ب ت ج د خ'
log(`convert Arabic text ${arabic} to Ugaritic`)
log(calmConvert(arabic, Abjad.Arabic, Abjad.Ugaritic))
log(`convert Arabic text ${arabic} to Phoenician`)
log(calmConvert(arabic, Abjad.Arabic, Abjad.Phoenician))
log(`convert Arabic text ${arabic} to Old South Arabian`)
log(calmConvert(arabic, Abjad.Arabic, Abjad.OldSouthArabian))

const imperialAramaic = '𐡀 𐡁 𐡂 𐡃 𐡄 𐡅'
log(`convert ImperialAramaic text ${imperialAramaic} to Arabic`)
log(calmConvert(imperialAramaic, Abjad.ImperialAramaic, Abjad.Arabic))
log(`convert ImperialAramaic text ${imperialAramaic} to Phoenician`)
log(calmConvert(imperialAramaic, Abjad.ImperialAramaic, Abjad.Phoenician))

const ipa = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
log(`convert IPA text ${ipa} to Arabic`)
log(calmConvert(ipa, Abjad.IPA, Abjad.Arabic))
log(`convert IPA text ${ipa} to Phoenician`)
log(calmConvert(ipa, Abjad.IPA, Abjad.Phoenician))

const oldSouthArabian = '𐩱 𐩨 𐩴 𐩵'
log(`convert OldSouthArabian text ${oldSouthArabian} to Arabic`)
log(calmConvert(oldSouthArabian, Abjad.OldSouthArabian, Abjad.Arabic))
log(`convert OldSouthArabian text ${oldSouthArabian} to Phoenician`)
log(calmConvert(oldSouthArabian, Abjad.OldSouthArabian, Abjad.Phoenician))

const phoenician = '𐤀 𐤁 𐤂 𐤃 𐤄 𐤅'
log(`convert Phoenician text ${phoenician} to Arabic`)
log(calmConvert(phoenician, Abjad.Phoenician, Abjad.Arabic))
log(`convert Phoenician text ${phoenician} to Ugaritic`)
log(calmConvert(phoenician, Abjad.Phoenician, Abjad.Ugaritic))

const syriac = 'ܐ ܒ ܓ ܕ ܗ ܘ'
log(`convert Syriac text ${syriac} to Arabic`)
log(calmConvert(syriac, Abjad.Syriac, Abjad.Arabic))
log(`convert Syriac text ${syriac} to ImperialAramaic`)
log(calmConvert(syriac, Abjad.Syriac, Abjad.ImperialAramaic))

const ugaritic = '𐎀 𐎁 𐎚 𐎂 𐎄 𐎃'
log(`convert Ugaritic text ${ugaritic} to Arabic`)
log(calmConvert(ugaritic, Abjad.Ugaritic, Abjad.Arabic))
log(`convert Ugaritic text ${ugaritic} to Phoenician`)
log(calmConvert(ugaritic, Abjad.Ugaritic, Abjad.Phoenician))

log(calmConvert('مرحبا', Abjad.Arabic, Abjad.ImperialAramaic))
log(calmConvert('مرحبا', Abjad.Arabic, Abjad.IPA))
log(calmConvert('مرحبا', Abjad.Arabic, Abjad.Phoenician))
log(calmConvert('مرحبا', Abjad.Arabic, Abjad.Syriac))
log(calmConvert('مرحبا', Abjad.Arabic, Abjad.Tifinagh))
log(calmConvert('مرحبا', Abjad.Arabic, Abjad.Ugaritic))

log('Done')

function calmConvert(source: string, from: Abjad, to: Abjad): string {
	try {
		return convert(source, from, to)
	} catch (e: any) {
		return e.message
	}
}

function log(message: string): void {
	// eslint-disable-next-line no-console
	console.log(message)
}
