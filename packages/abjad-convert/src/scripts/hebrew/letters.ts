import { Script } from '../Script'
import { Abjad } from '../../types'

const letters = [
	String.fromCodePoint(0x05D0), /** #0 א U+05D0 HEBREW LETTER ALEF */
	String.fromCodePoint(0x05D1), /** #0 ב U+05D1 HEBREW LETTER BET */
	String.fromCodePoint(0x05D2), /** #0 ג U+05D2 HEBREW LETTER GIMEL */
	String.fromCodePoint(0x05D3), /** #0 ד U+05D3 HEBREW LETTER DALET */
	String.fromCodePoint(0x05D4), /** #0 ה U+05D4 HEBREW LETTER HE */
	String.fromCodePoint(0x05D5), /** #0 ו U+05D5 HEBREW LETTER VAV */
	String.fromCodePoint(0x05D6), /** #0 ז U+05D6 HEBREW LETTER ZAYIN */
	String.fromCodePoint(0x05D7), /** #0 ח U+05D7 HEBREW LETTER HET */
	String.fromCodePoint(0x05D8), /** #0 ט U+05D8 HEBREW LETTER TET */
	String.fromCodePoint(0x05D9), /** #0 י U+05D9 HEBREW LETTER YOD */
	String.fromCodePoint(0x05DA), /** #0 ך U+05DA HEBREW LETTER FINAL KAF */
	String.fromCodePoint(0x05DB), /** #0 כ U+05DB HEBREW LETTER KAF */
	String.fromCodePoint(0x05DC), /** #0 ל U+05DC HEBREW LETTER LAMED */
	String.fromCodePoint(0x05DD), /** #0 ם U+05DD HEBREW LETTER FINAL MEM */
	String.fromCodePoint(0x05DE), /** #0 מ U+05DE HEBREW LETTER MEM */
	String.fromCodePoint(0x05DF), /** #0 ן U+05DF HEBREW LETTER FINAL NUN */

	String.fromCodePoint(0x05E0), /** #0 נ U+05E0 HEBREW LETTER NUN */
	String.fromCodePoint(0x05E1), /** #0 ס U+05E1 HEBREW LETTER SAMEKH */
	String.fromCodePoint(0x05E2), /** #0 ע U+05E2 HEBREW LETTER AYIN */
	String.fromCodePoint(0x05E3), /** #0 ף U+05E3 HEBREW LETTER FINAL PE */
	String.fromCodePoint(0x05E4), /** #0 פ U+05E4 HEBREW LETTER PE */
	String.fromCodePoint(0x05E5), /** #0 ץ U+05E5 HEBREW LETTER FINAL TSADI */
	String.fromCodePoint(0x05E6), /** #0 צ U+05E6 HEBREW LETTER TSADI */
	String.fromCodePoint(0x05E7), /** #0 ק U+05E7 HEBREW LETTER QOF */
	String.fromCodePoint(0x05E8), /** #0 ר U+05E8 HEBREW LETTER RESH */
	String.fromCodePoint(0x05E9), /** #0 ש U+05E9 HEBREW LETTER SHIN */
	String.fromCodePoint(0x05EA), /** #0 ת U+05EA HEBREW LETTER TAV */
] as const

export const He = {
	Alef: letters[0], // א
	Bet: letters[1], // ב
	Gimel: letters[2], // ג
	Dalet: letters[3], // ד
	He: letters[4], // ה
	Vav: letters[5], // ו
	Zayin: letters[6], // ז
	Het: letters[7], // ח
	Tet: letters[8], // ט
	Yod: letters[9], // י
	FinalKaf: letters[10], // ך
	Kaf: letters[11], // כ
	Lamed: letters[12], // ל
	FinalMem: letters[13], // ם
	Mem: letters[14], // מ
	FinalNun: letters[15], // ן
	Nun: letters[16], // נ
	Samekh: letters[17], // ס
	Ayin: letters[18], // ע
	FinalPe: letters[19], // ף
	Pe: letters[20], // פ
	FinalTsadi: letters[21], // ץ
	Tsadi: letters[22], // צ
	Qof: letters[23], // ק
	Resh: letters[24], // ר
	Shin: letters[25], // ש
	Tav: letters[26], // ת
} as const

export const hebrew = new Script(
	Abjad.Hebrew,
	true,
	letters,
)
