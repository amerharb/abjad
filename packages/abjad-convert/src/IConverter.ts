import { Abjad } from './types'

export interface IConverter {
	readonly from: Abjad
	readonly to: Abjad

	/** equal 1 for direct converter, or more for the number of direct converters that used */
	readonly numberOfConnection : number

	/**
	 * the path of the converters that used
	 * converter from Arabic to Ugaritic have value [Abjad.Arabic, Abjad.Ugaritic]
	 */
	getConverterPath(): Abjad[]

	convert(text: string): string
}
