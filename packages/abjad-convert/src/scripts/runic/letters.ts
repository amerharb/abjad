import { Script } from '../Script'
import { Abjad } from '../../types'

const letters = [
	String.fromCodePoint(0x16A0), /** #0  ᚠ U+16A0 RUNIC LETTER FEHU FEOH FE F */
	String.fromCodePoint(0x16A1), /** #1  ᚡ U+16A1 RUNIC LETTER V */
	String.fromCodePoint(0x16A2), /** #2  ᚢ U+16A2 RUNIC LETTER URUZ UR U */
	String.fromCodePoint(0x16A3), /** #3  ᚣ U+16A3 RUNIC LETTER YR */
	String.fromCodePoint(0x16A4), /** #4  ᚤ U+16A4 RUNIC LETTER Y */
	String.fromCodePoint(0x16A5), /** #5  ᚥ U+16A5 RUNIC LETTER W */
	String.fromCodePoint(0x16A6), /** #6  ᚦ U+16A6 RUNIC LETTER THURISAZ THURS THORN */
	String.fromCodePoint(0x16A7), /** #7  ᚧ U+16A7 RUNIC LETTER ETH */
	String.fromCodePoint(0x16A8), /** #8  ᚨ U+16A8 RUNIC LETTER ANSUZ A */
	String.fromCodePoint(0x16A9), /** #9  ᚩ U+16A9 RUNIC LETTER OS O */
	String.fromCodePoint(0x16AA), /** #10 ᚪ U+16AA RUNIC LETTER AC A */
	String.fromCodePoint(0x16AB), /** #11 ᚫ U+16AB RUNIC LETTER AESC */
	String.fromCodePoint(0x16AC), /** #12 ᚬ U+16AC RUNIC LETTER LONG-BRANCH-OSS O */
	String.fromCodePoint(0x16AD), /** #13 ᚭ U+16AD RUNIC LETTER SHORT-TWIG-OSS O */
	String.fromCodePoint(0x16AE), /** #14 ᚮ U+16AE RUNIC LETTER O */
	String.fromCodePoint(0x16AF), /** #15 ᚯ U+16AF RUNIC LETTER OE */
	String.fromCodePoint(0x16B0), /** #16 ᚰ U+16B0 RUNIC LETTER ON */
	String.fromCodePoint(0x16B1), /** #17 ᚱ U+16B1 RUNIC LETTER RAIDO RAD REID R */
	String.fromCodePoint(0x16B2), /** #18 ᚲ U+16B2 RUNIC LETTER KAUN K */
	String.fromCodePoint(0x16B3), /** #19 ᚳ U+16B3 RUNIC LETTER CEN */
	String.fromCodePoint(0x16B4), /** #20 ᚴ U+16B4 RUNIC LETTER KAUN K */
	String.fromCodePoint(0x16B5), /** #21 ᚵ U+16B5 RUNIC LETTER G */
	String.fromCodePoint(0x16B6), /** #22 ᚶ U+16B6 RUNIC LETTER ENG */
	String.fromCodePoint(0x16B7), /** #23 ᚷ U+16B7 RUNIC LETTER GEBO GYFU G */
	String.fromCodePoint(0x16B8), /** #24 ᚸ U+16B8 RUNIC LETTER GAR */
	String.fromCodePoint(0x16B9), /** #25 ᚹ U+16B9 RUNIC LETTER WUNJO WYNN W */
	String.fromCodePoint(0x16BA), /** #26 ᚺ U+16BA RUNIC LETTER HAGLAZ H */
	String.fromCodePoint(0x16BB), /** #27 ᚻ U+16BB RUNIC LETTER HAEGL H */
	String.fromCodePoint(0x16BC), /** #28 ᚼ U+16BC RUNIC LETTER LONG-BRANCH-HAGALL H */
	String.fromCodePoint(0x16BD), /** #29 ᚽ U+16BD RUNIC LETTER SHORT-TWIG-HAGALL H */
	String.fromCodePoint(0x16BE), /** #30 ᚾ U+16BE RUNIC LETTER NAUDIZ NYD NAUD N */
	String.fromCodePoint(0x16BF), /** #31 ᚿ U+16BF RUNIC LETTER SHORT-TWIG-NAUD N */
	String.fromCodePoint(0x16C0), /** #32 ᛀ U+16C0 RUNIC LETTER DOTTED-N */
	String.fromCodePoint(0x16C1), /** #33 ᛁ U+16C1 RUNIC LETTER ISAZ IS ISS I */
	String.fromCodePoint(0x16C2), /** #34 ᛂ U+16C2 RUNIC LETTER E */
	String.fromCodePoint(0x16C3), /** #35 ᛃ U+16C3 RUNIC LETTER JERAN J */
	String.fromCodePoint(0x16C4), /** #36 ᛄ U+16C4 RUNIC LETTER GER */
	String.fromCodePoint(0x16C5), /** #37 ᛅ U+16C5 RUNIC LETTER LONG-BRANCH-AR AE */
	String.fromCodePoint(0x16C6), /** #38 ᛆ U+16C6 RUNIC LETTER SHORT-TWIG-AR A */
	String.fromCodePoint(0x16C7), /** #39 ᛇ U+16C7 RUNIC LETTER IWAZ EOH */
	String.fromCodePoint(0x16C8), /** #40 ᛈ U+16C8 RUNIC LETTER PERTHO PEORTH P */
	String.fromCodePoint(0x16C9), /** #41 ᛉ U+16C9 RUNIC LETTER ALGIZ EOLHX */
	String.fromCodePoint(0x16CA), /** #42 ᛊ U+16CA RUNIC LETTER SOWILO S */
	String.fromCodePoint(0x16CB), /** #43 ᛋ U+16CB RUNIC LETTER SIGEL LONG-BRANCH-SOL S */
	String.fromCodePoint(0x16CC), /** #44 ᛌ U+16CC RUNIC LETTER SHORT-TWIG-SOL S */
	String.fromCodePoint(0x16CD), /** #45 ᛍ U+16CD RUNIC LETTER C */
	String.fromCodePoint(0x16CE), /** #46 ᛎ U+16CE RUNIC LETTER Z */
	String.fromCodePoint(0x16CF), /** #47 ᛏ U+16CF RUNIC LETTER TIWAZ TIR TYR T */
	String.fromCodePoint(0x16D0), /** #48 ᛐ U+16D0 RUNIC LETTER SHORT-TWIG-TYR T */
	String.fromCodePoint(0x16D1), /** #49 ᛑ U+16D1 RUNIC LETTER D */
	String.fromCodePoint(0x16D2), /** #50 ᛒ U+16D2 RUNIC LETTER BERKANAN BEORC BJARKAN B */
	String.fromCodePoint(0x16D3), /** #51 ᛓ U+16D3 RUNIC LETTER SHORT-TWIG-BJARKAN B */
	String.fromCodePoint(0x16D4), /** #52 ᛔ U+16D4 RUNIC LETTER DOTTED-P */
	String.fromCodePoint(0x16D5), /** #53 ᛕ U+16D5 RUNIC LETTER OPEN-P */
	String.fromCodePoint(0x16D6), /** #54 ᛖ U+16D6 RUNIC LETTER EHWAZ EH E */
	String.fromCodePoint(0x16D7), /** #55 ᛗ U+16D7 RUNIC LETTER MANNAZ MAN M */
	String.fromCodePoint(0x16D8), /** #56 ᛘ U+16D8 RUNIC LETTER LONG-BRANCH-MADR M */
	String.fromCodePoint(0x16D9), /** #57 ᛙ U+16D9 RUNIC LETTER SHORT-TWIG-MADR M */
	String.fromCodePoint(0x16DA), /** #58 ᛚ U+16DA RUNIC LETTER LAUKAZ LAGU LOGR L */
	String.fromCodePoint(0x16DB), /** #59 ᛛ U+16DB RUNIC LETTER DOTTED-L */
	String.fromCodePoint(0x16DC), /** #60 ᛜ U+16DC RUNIC LETTER INGWAZ */
	String.fromCodePoint(0x16DD), /** #61 ᛝ U+16DD RUNIC LETTER ING */
	String.fromCodePoint(0x16DE), /** #62 ᛞ U+16DE RUNIC LETTER DAGAZ DAEG D */
	String.fromCodePoint(0x16DF), /** #63 ᛟ U+16DF RUNIC LETTER OTHALAN ETHEL O */
	String.fromCodePoint(0x16E0), /** #64 ᛠ U+16E0 RUNIC LETTER EAR */
	String.fromCodePoint(0x16E1), /** #65 ᛡ U+16E1 RUNIC LETTER IOR */
	String.fromCodePoint(0x16E2), /** #66 ᛢ U+16E2 RUNIC LETTER CWEORTH */
	String.fromCodePoint(0x16E3), /** #67 ᛣ U+16E3 RUNIC LETTER CALC */
	String.fromCodePoint(0x16E4), /** #68 ᛤ U+16E4 RUNIC LETTER CEALC */
	String.fromCodePoint(0x16E5), /** #69 ᛥ U+16E5 RUNIC LETTER STAN */
	String.fromCodePoint(0x16E6), /** #70 ᛦ U+16E6 RUNIC LETTER LONG-BRANCH-YR */
	String.fromCodePoint(0x16E7), /** #71 ᛧ U+16E7 RUNIC LETTER SHORT-TWIG-YR */
	String.fromCodePoint(0x16E8), /** #72 ᛨ U+16E8 RUNIC LETTER ICELANDIC-YR */
	String.fromCodePoint(0x16E9), /** #73 ᛩ U+16E9 RUNIC LETTER Q */
	String.fromCodePoint(0x16EA), /** #74 ᛪ U+16EA RUNIC LETTER X */

	String.fromCodePoint(0x16EB), /** #75 ᛫ U+16EB RUNIC SINGLE PUNCTUATION */
	String.fromCodePoint(0x16EC), /** #76 ᛬ U+16EC RUNIC MULTIPLE PUNCTUATION */
	String.fromCodePoint(0x16ED), /** #77 ᛭ U+16ED RUNIC CROSS PUNCTUATION */

	String.fromCodePoint(0x16EE), /** #78 ᛮ U+16EE RUNIC ARLAUG SYMBOL */
	String.fromCodePoint(0x16EF), /** #79 ᛯ U+16EF RUNIC TVIMADUR SYMBOL */
	String.fromCodePoint(0x16F0), /** #80 ᛰ U+16F0 RUNIC BELGTHOR SYMBOL */

	String.fromCodePoint(0x16F1), /** #81 ᛱ U+16F1 RUNIC LETTER K */
	String.fromCodePoint(0x16F2), /** #82 ᛲ U+16F2 RUNIC LETTER SH */
	String.fromCodePoint(0x16F3), /** #83 ᛳ U+16F3 RUNIC LETTER OO */

	String.fromCodePoint(0x16F4), /** #84 ᛴ U+16F4 RUNIC FRANKS CASKET OS */
	String.fromCodePoint(0x16F5), /** #85 ᛵ U+16F5 RUNIC FRANKS CASKET IS */
	String.fromCodePoint(0x16F6), /** #86 ᛶ U+16F6 RUNIC FRANKS CASKET EH */
	String.fromCodePoint(0x16F7), /** #87 ᛷ U+16F7 RUNIC FRANKS CASKET AC */
	String.fromCodePoint(0x16F8), /** #88 ᛸ U+16F8 RUNIC FRANKS CASKET AESC */
] as const

export const Ru = {
	Fe: letters[0], // ᚠ
	Ve: letters[1], // ᚡ
	Uru: letters[2], // ᚢ
	Yr: letters[3], // ᚣ
	Y: letters[4], // ᚤ
	W: letters[5], // ᚥ
	Thurisaz: letters[6], // ᚦ
	Eth: letters[7], // ᚧ
	Ansuz: letters[8], // ᚨ
	Os: letters[9], // ᚩ
	Ac: letters[10], // ᚪ
	Aesc: letters[11], // ᚫ
	LongBranchOss: letters[12], // ᚬ
	ShortTwigOss: letters[13], // ᚭ
	O: letters[14], // ᚮ
	Oe: letters[15], // ᚯ
	On: letters[16], // ᚰ
	Raido: letters[17], // ᚱ
	KaunA: letters[18], // ᚲ
	Cen: letters[19], // ᚳ
	KaunK: letters[20], // ᚴ
	G: letters[21], // ᚵ
	Eng: letters[22], // ᚶ
	Gebo: letters[23], // ᚷ
	Gar: letters[24], // ᚸ
	Wunjo: letters[25], // ᚹ
	Haglaz: letters[26], // ᚺ
	Haegl: letters[27], // ᚻ
	LongBranchHagall: letters[28], // ᚼ
	ShortTwigHagall: letters[29], // ᚽ
	Naudiz: letters[30], // ᚾ
	ShortTwigNaud: letters[31], // ᚿ
	DottedN: letters[32], // ᛀ
	Isaz: letters[33], // ᛁ
	E: letters[34], // ᛂ
	Jeran: letters[35], // ᛃ
	Ger: letters[36], // ᛄ
	LongBranchAr: letters[37], // ᛅ
	ShortTwigAr: letters[38], // ᛆ
	Iwaz: letters[39], // ᛇ
	Pertho: letters[40], // ᛈ
	Algiz: letters[41], // ᛉ
	Sowilo: letters[42], // ᛊ
	Sigel: letters[43], // ᛋ
	ShortTwigSol: letters[44], // ᛌ
	C: letters[45], // ᛍ
	Z: letters[46], // ᛎ
	Tiwaz: letters[47], // ᛏ
	ShortTwigTyr: letters[48], // ᛐ
	D: letters[49], // ᛑ
	Berkanan: letters[50], // ᛒ
	ShortTwigBjarkan: letters[51], // ᛓ
	DottedP: letters[52], // ᛔ
	OpenP: letters[53], // ᛕ
	Ehwaz: letters[54], // ᛖ
	Mannaz: letters[55], // ᛗ
	LongBranchMadr: letters[56], // ᛘ
	ShortTwigMadr: letters[57], // ᛙ
	Laukaz: letters[58], // ᛚ
	DottedL: letters[59], // ᛛ
	Ingwaz: letters[60], // ᛜ
	Ing: letters[61], // ᛝ
	Dagaz: letters[62], // ᛞ
	Othalan: letters[63], // ᛟ
	Ear: letters[64], // ᛠ
	Ior: letters[65], // ᛡ
	Cweorth: letters[66], // ᛢ
	Calc: letters[67], // ᛣ
	Cealc: letters[68], // ᛤ
	Stan: letters[69], // ᛥ
	LongBranchYr: letters[70], // ᛦ
	ShortTwigYr: letters[71], // ᛧ
	IcelandicYr: letters[72], // ᛨ
	Q: letters[73], // ᛩ
	X: letters[74], // ᛪ

	// Punctuation
	SinglePunctuation: letters[75], // ᛫
	MultiplePunctuation: letters[76], // ᛬
	CrossPunctuation: letters[77], // ᛭

	// Golden number runes
	Arlaug: letters[78], // number 17
	Tvimadur: letters[79], // number 18
	Belgthor: letters[80], // number 19

	// Tolkienian extensions
	K: letters[81], // ᛱ
	Sh: letters[82], // ᛲ
	Oo: letters[83], // ᛳ

	// Cryptogrammic letters
	FranksCasketOs: letters[84], // ᛴ
	FranksCasketIs: letters[85], // ᛵ
	FranksCasketEh: letters[86], // ᛶ
	FranksCasketAc: letters[87], // ᛷ
	FranksCasketAesc: letters[88], // ᛸ
}

export const runic = new Script(
	Abjad.Runic,
	false,
	letters,
)
