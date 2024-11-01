import { Script } from '../Script'
import { Abjad } from '../../types'

/**
 * Nabatean letters
 */
const letters = [
	String.fromCodePoint(0x10880), /** #0   U+10880 NABATEAEN LETTER Final Aleph */
	String.fromCodePoint(0x10881), /** #1   U+10881 NABATEAEN LETTER Aleph */
	String.fromCodePoint(0x10882), /** #2   U+10882 NABATEAEN LETTER Final Beth */
	String.fromCodePoint(0x10883), /** #3   U+10883 NABATEAEN LETTER Beth */
	String.fromCodePoint(0x10884), /** #4   U+10884 NABATEAEN LETTER Gimel */
	String.fromCodePoint(0x10885), /** #5   U+10885 NABATEAEN LETTER Daleth */
	String.fromCodePoint(0x10886), /** #6   U+10886 NABATEAEN LETTER Final He */
	String.fromCodePoint(0x10887), /** #7   U+10887 NABATEAEN LETTER He */

	String.fromCodePoint(0x10888), /** #8   U+10888 NABATEAEN LETTER Waw */
	String.fromCodePoint(0x10889), /** #9   U+10889 NABATEAEN LETTER Zayin */
	String.fromCodePoint(0x1088A), /** #10  U+1088A NABATEAEN LETTER Heth */
	String.fromCodePoint(0x1088B), /** #11  U+1088B NABATEAEN LETTER Teth */
	String.fromCodePoint(0x1088C), /** #12  U+1088C NABATEAEN LETTER Final Yodh */
	String.fromCodePoint(0x1088D), /** #13  U+1088D NABATEAEN LETTER Yodh */
	String.fromCodePoint(0x1088E), /** #14  U+1088E NABATEAEN LETTER Final Kaph */
	String.fromCodePoint(0x1088F), /** #15  U+1088F NABATEAEN LETTER Kaph */

	String.fromCodePoint(0x10890), /** #16  U+10890 NABATEAEN LETTER Final Lamedh */
	String.fromCodePoint(0x10891), /** #17  U+10891 NABATEAEN LETTER Lamedh */
	String.fromCodePoint(0x10892), /** #18  U+10892 NABATEAEN LETTER Final Mem */
	String.fromCodePoint(0x10893), /** #19  U+10893 NABATEAEN LETTER Mem */
	String.fromCodePoint(0x10894), /** #20  U+10894 NABATEAEN LETTER Final Nun */
	String.fromCodePoint(0x10895), /** #21  U+10895 NABATEAEN LETTER Nun */
	String.fromCodePoint(0x10896), /** #22  U+10896 NABATEAEN LETTER Samekh */
	String.fromCodePoint(0x10897), /** #23  U+10897 NABATEAEN LETTER Ayin */

	String.fromCodePoint(0x10898), /** #24  U+10898 NABATEAEN LETTER Pe */
	String.fromCodePoint(0x10899), /** #25  U+10899 NABATEAEN LETTER Sadhe */
	String.fromCodePoint(0x1089A), /** #26  U+1089A NABATEAEN LETTER Qoph */
	String.fromCodePoint(0x1089B), /** #27  U+1089B NABATEAEN LETTER Resh */
	String.fromCodePoint(0x1089C), /** #28  U+1089C NABATEAEN LETTER Final Shin */
	String.fromCodePoint(0x1089D), /** #29  U+1089D NABATEAEN LETTER Shin */
	String.fromCodePoint(0x1089F), /** #30  U+1089E NABATEAEN LETTER Taw */
] as const

export const Na = {
	FinalAleph: letters[0],
	Aleph: letters[1],
	FinalBeth: letters[2],
	Beth: letters[3],
	Gimel: letters[4],
	Daleth: letters[5],
	FinalHe: letters[6],
	He: letters[7],

	Waw: letters[8],
	Zayin: letters[9],
	Heth: letters[10],
	Teth: letters[11],
	FinalYodh: letters[12],
	Yodh: letters[13],
	FinalKaph: letters[14],
	Kaph: letters[15],

	FinalLamedh: letters[16],
	Lamedh: letters[17],
	FinalMem: letters[18],
	Mem: letters[19],
	FinalNun: letters[20],
	Nun: letters[21],
	Samekh: letters[22],
	Ayin: letters[23],

	Pe: letters[24],
	Sadhe: letters[25],
	Qoph: letters[26],
	Resh: letters[27],
	FinalShin: letters[28],
	Shin: letters[29],
	Taw: letters[30],
}

export const nabataean = new Script(
	Abjad.Nabataean,
	true,
	letters,
)
