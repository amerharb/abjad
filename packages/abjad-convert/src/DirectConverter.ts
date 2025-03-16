import { IConverter } from './IConverter'
import { Abjad } from './types'

export abstract class DirectConverter implements IConverter {
	public readonly numberOfConnection = 1
	public abstract readonly from: Abjad
	public abstract readonly to: Abjad
	public getConverterPath(): Abjad[] {
		return [this.from, this.to]
	}
	public abstract convert(text: string): string
}
