import { Script } from '../Script'
import { Abjad } from '../../types'
import { letters as englishLetters } from './englishLetters'

/**
 * IPA letters
 */
const letters = [
	'\u00E6', /** #0 æ U+00E6 LATIN SMALL LETTER AE */
	'\u00E7', /** #1 ç U+00E7 LATIN SMALL LETTER C WITH CEDILLA */
	'\u00F0', /** #2 ð U+00F0 LATIN SMALL LETTER ETH */
	'\u00F8', /** #3 ø U+00F8 LATIN SMALL LETTER O WITH STROKE */
	'\u0127', /** #4 ħ U+0127 LATIN SMALL LETTER H WITH STROKE */
	'\u014B', /** #5 ŋ U+014B LATIN SMALL LETTER ENG */
	'\u0153', /** #6 œ U+0153 LATIN SMALL LIGATURE OE */
	'\u03B2', /** #7 β U+03B2 GREEK SMALL LETTER BETA */
	'\u03B8', /** #8 θ U+03B8 GREEK SMALL LETTER THETA */
	'\u03BB', /** #9 λ U+03BB GREEK SMALL LETTER LAMDA */
	'\u03C7', /** #10 χ U+03C7 GREEK SMALL LETTER CHI */

	'\u0250', /** #11 ɐ U+0250 LATIN SMALL LETTER TURNED A */
	'\u0251', /** #12 ɑ U+0251 LATIN SMALL LETTER ALPHA */
	'\u0252', /** #13 ɒ U+0252 LATIN SMALL LETTER TURNED ALPHA */
	'\u0253', /** #14 ɓ U+0253 LATIN SMALL LETTER B WITH HOOK */
	'\u0254', /** #15 ɔ U+0254 LATIN SMALL LETTER OPEN O */
	'\u0255', /** #16 ɕ U+0255 LATIN SMALL LETTER C WITH CURL */
	'\u0256', /** #17 ɖ U+0256 LATIN SMALL LETTER D WITH TAIL */
	'\u0257', /** #18 ɗ U+0257 LATIN SMALL LETTER D WITH HOOK */
	'\u0258', /** #19 ɘ U+0258 LATIN SMALL LETTER REVERSED E */
	'\u0259', /** #20 ə U+0259 LATIN SMALL LETTER SCHWA */
	'\u025A', /** #21 ɚ U+025A LATIN SMALL LETTER SCHWA WITH HOOK */
	'\u025B', /** #22 ɛ U+025B LATIN SMALL LETTER OPEN E */
	'\u025C', /** #23 ɜ U+025C LATIN SMALL LETTER REVERSED OPEN E */
	'\u025D', /** #24 ɝ U+025D LATIN SMALL LETTER REVERSED OPEN E WITH HOOK */
	'\u025E', /** #25 ɞ U+025E LATIN SMALL LETTER CLOSED REVERSED OPEN E */
	'\u025F', /** #26 ɟ U+025F LATIN SMALL LETTER DOTLESS J WITH STROKE */
	'\u0260', /** #27 ɠ U+0260 LATIN SMALL LETTER G WITH HOOK */
	'\u0261', /** #28 ɡ U+0261 LATIN SMALL LETTER SCRIPT G */
	'\u0262', /** #29 ɢ U+0262 LATIN LETTER SMALL CAPITAL G */
	'\u0263', /** #30 ɣ U+0263 LATIN SMALL LETTER GAMMA */
	'\u0264', /** #31 ɤ U+0264 LATIN SMALL LETTER RAMS HORN */
	'\u0265', /** #32 ɥ U+0265 LATIN SMALL LETTER TURNED H */
	'\u0266', /** #33 ɦ U+0266 LATIN SMALL LETTER H WITH HOOK */
	'\u0267', /** #34 ɧ U+0267 LATIN SMALL LETTER HENG WITH HOOK */
	'\u0268', /** #35 ɨ U+0268 LATIN SMALL LETTER I WITH STROKE */
	'\u0269', /** #36 ɩ U+0269 LATIN SMALL LETTER IOTA */
	'\u026A', /** #37 ɪ U+026A LATIN LETTER SMALL CAPITAL I */
	'\u026B', /** #38 ɫ U+026B LATIN SMALL LETTER L WITH MIDDLE TILDE */
	'\u026C', /** #39 ɬ U+026C LATIN SMALL LETTER L WITH BELT */
	'\u026D', /** #40 ɭ U+026D LATIN SMALL LETTER L WITH RETROFLEX HOOK */
	'\u026E', /** #41 ɮ U+026E LATIN SMALL LETTER LEZH */
	'\u026F', /** #42 ɯ U+026F LATIN SMALL LETTER TURNED M */
	'\u0270', /** #43 ɰ U+0270 LATIN SMALL LETTER TURNED M WITH LONG LEG */
	'\u0271', /** #44 ɱ U+0271 LATIN SMALL LETTER M WITH HOOK */
	'\u0272', /** #45 ɲ U+0272 LATIN SMALL LETTER N WITH LEFT HOOK */
	'\u0273', /** #46 ɳ U+0273 LATIN SMALL LETTER N WITH RETROFLEX HOOK */
	'\u0274', /** #47 ɴ U+0274 LATIN LETTER SMALL CAPITAL N */
	'\u0275', /** #48 ɵ U+0275 LATIN SMALL LETTER BARRED O */
	'\u0276', /** #49 ɶ U+0276 LATIN LETTER SMALL CAPITAL OE */
	'\u0277', /** #50 ɷ U+0277 LATIN SMALL LETTER CLOSED OMEGA */
	'\u0278', /** #51 ɸ U+0278 LATIN SMALL LETTER PHI */
	'\u0279', /** #52 ɹ U+0279 LATIN SMALL LETTER TURNED R */
	'\u027A', /** #53 ɺ U+027A LATIN SMALL LETTER TURNED R WITH LONG LEG */
	'\u027B', /** #54 ɻ U+027B LATIN SMALL LETTER TURNED R WITH HOOK */
	'\u027C', /** #55 ɼ U+027C LATIN SMALL LETTER R WITH LONG LEG */
	'\u027D', /** #56 ɽ U+027D LATIN SMALL LETTER R WITH TAIL */
	'\u027E', /** #57 ɾ U+027E LATIN SMALL LETTER R WITH FISHHOOK */
	'\u027F', /** #58 ɿ U+027F LATIN SMALL LETTER REVERSED R WITH FISHHOOK */
	'\u0280', /** #59 ʀ U+0280 LATIN LETTER SMALL CAPITAL R */
	'\u0281', /** #60 ʁ U+0281 LATIN LETTER SMALL CAPITAL INVERTED R */
	'\u0282', /** #61 ʂ U+0282 LATIN SMALL LETTER S WITH HOOK */
	'\u0283', /** #62 ʃ U+0283 LATIN SMALL LETTER ESH */
	'\u0284', /** #63 ʄ U+0284 LATIN SMALL LETTER DOTLESS J WITH STROKE AND HOOK */
	'\u0285', /** #64 ʅ U+0285 LATIN SMALL LETTER SQUAT REVERSED ESH */
	'\u0286', /** #65 ʆ U+0286 LATIN SMALL LETTER ESH WITH CURL */
	'\u0287', /** #66 ʇ U+0287 LATIN SMALL LETTER TURNED T */
	'\u0288', /** #67 ʈ U+0288 LATIN SMALL LETTER T WITH RETROFLEX HOOK */
	'\u0289', /** #68 ʉ U+0289 LATIN SMALL LETTER U BAR */
	'\u028A', /** #69 ʊ U+028A LATIN SMALL LETTER UPSILON */
	'\u028B', /** #70 ʋ U+028B LATIN SMALL LETTER V WITH HOOK */
	'\u028C', /** #71 ʌ U+028C LATIN SMALL LETTER TURNED V */
	'\u028D', /** #72 ʍ U+028D LATIN SMALL LETTER TURNED W */
	'\u028E', /** #73 ʎ U+028E LATIN SMALL LETTER TURNED Y */
	'\u028F', /** #74 ʏ U+028F LATIN LETTER SMALL CAPITAL Y */
	'\u0290', /** #75 ʐ U+0290 LATIN SMALL LETTER Z WITH RETROFLEX HOOK */
	'\u0291', /** #76 ʑ U+0291 LATIN SMALL LETTER Z WITH CURL */
	'\u0292', /** #77 ʒ U+0292 LATIN SMALL LETTER EZH */
	'\u0293', /** #78 ʓ U+0293 LATIN SMALL LETTER EZH WITH CURL */
	'\u0294', /** #79 ʔ U+0294 LATIN GLOTTAL STOP */
	'\u0295', /** #80 ʕ U+0295 LATIN LETTER PHARYNGEAL VOICED FRICATIVE */
	'\u0296', /** #81 ʖ U+0296 LATIN LETTER INVERTED GLOTTAL STOP */
	'\u0297', /** #82 ʗ U+0297 LATIN LETTER STRETCHED C */
	'\u0298', /** #83 ʘ U+0298 LATIN LETTER BILABIAL CLICK */
	'\u0299', /** #84 ʙ U+0299 LATIN LETTER SMALL CAPITAL B */
	'\u029A', /** #85 ʚ U+029A LATIN SMALL LETTER CLOSED OPEN E */
	'\u029B', /** #86 ʛ U+029B LATIN LETTER SMALL CAPITAL G WITH HOOK */
	'\u029C', /** #87 ʜ U+029C LATIN LETTER SMALL CAPITAL H */
	'\u029D', /** #88 ʝ U+029D LATIN SMALL LETTER J WITH CROSSED-TAIL */
	'\u029E', /** #89 ʞ U+029E LATIN SMALL LETTER TURNED K */
	'\u029F', /** #90 ʟ U+029F LATIN LETTER SMALL CAPITAL L */
	'\u02A0', /** #91 ʠ U+02A0 LATIN SMALL LETTER Q WITH HOOK */
	'\u02A1', /** #92 ʡ U+02A1 LATIN LETTER GLOTTAL STOP WITH STROKE */
	'\u02A2', /** #93 ʢ U+02A2 LATIN LETTER REVERSED GLOTTAL STOP WITH STROKE */
	'\u02A3', /** #94 ʣ U+02A3 LATIN SMALL LETTER DZ DIGRAPH */
	'\u02A4', /** #95 ʤ U+02A4 LATIN SMALL LETTER DEZH DIGRAPH */
	'\u02A5', /** #96 ʥ U+02A5 LATIN SMALL LETTER DZ DIGRAPH WITH CURL */
	'\u02A6', /** #97 ʦ U+02A6 LATIN SMALL LETTER TS DIGRAPH */
	'\u02A7', /** #98 ʧ U+02A7 LATIN SMALL LETTER TESH DIGRAPH */
	'\u02A8', /** #99 ʨ U+02A8 LATIN SMALL LETTER TC DIGRAPH WITH CURL */
	'\u02A9', /** #100 ʩ U+02A9 LATIN SMALL LETTER FENG DIGRAPH */
	'\u02AA', /** #101 ʪ U+02AA LATIN SMALL LETTER LS DIGRAPH */
	'\u02AB', /** #102 ʫ U+02AB LATIN SMALL LETTER LZ DIGRAPH */
	'\u02AC', /** #103 ʬ U+02AC LATIN LETTER BILABIAL PERCUSSIVE */
	'\u02AD', /** #104 ʭ U+02AD LATIN LETTER BIDENTAL PERCUSSIVE */
	'\u02AE', /** #105 ʮ U+02AE LATIN SMALL LETTER TURNED H WITH FISHHOOK */
	'\u02AF', /** #106 ʯ U+02AF LATIN SMALL LETTER TURNED H WITH FISHHOOK AND TAIL */

	'\u02E4', /** #107 ˤ U+02E4 MODIFIER LETTER SMALL REVERSED GLOTTAL STOP */
	'\u02D0', /** #108 ː U+02D0 MODIFIER LETTER TRIANGULAR COLON */

	/** #109 to #134 from 26 englishLetters a-z*/
	...englishLetters,
	'\u0361', /** #135 ͡  U+0361 COMBINING DOUBLE INVERTED BREVE */
] as const

export const IPA = {
	æ: letters[0],
	ç: letters[1],
	ð: letters[2],
	ø: letters[3],
	ħ: letters[4],
	ŋ: letters[5],
	œ: letters[6],
	β: letters[7],
	θ: letters[8],
	λ: letters[9],

	χ: letters[10],
	ɐ: letters[11],
	ɑ: letters[12],
	ɒ: letters[13],
	ɓ: letters[14],
	ɔ: letters[15],
	ɕ: letters[16],
	ɖ: letters[17],
	ɗ: letters[18],
	ɘ: letters[19],

	ə: letters[20],
	ɚ: letters[21],
	ɛ: letters[22],
	ɜ: letters[23],
	ɝ: letters[24],
	ɞ: letters[25],
	ɟ: letters[26],
	ɠ: letters[27],
	ɡ: letters[28],
	ɢ: letters[29],

	ɣ: letters[30],
	ɤ: letters[31],
	ɥ: letters[32],
	ɦ: letters[33],
	ɧ: letters[34],
	ɨ: letters[35],
	ɩ: letters[36],
	ɪ: letters[37],
	ɫ: letters[38],
	ɬ: letters[39],

	ɭ: letters[40],
	ɮ: letters[41],
	ɯ: letters[42],
	ɰ: letters[43],
	ɱ: letters[44],
	ɲ: letters[45],
	ɳ: letters[46],
	ɴ: letters[47],
	ɵ: letters[48],
	ɶ: letters[49],

	ɷ: letters[50],
	ɸ: letters[51],
	ɹ: letters[52],
	ɺ: letters[53],
	ɻ: letters[54],
	ɼ: letters[55],
	ɽ: letters[56],
	ɾ: letters[57],
	ɿ: letters[58],
	ʀ: letters[59],

	ʁ: letters[60],
	ʂ: letters[61],
	ʃ: letters[62],
	ʄ: letters[63],
	ʅ: letters[64],
	ʆ: letters[65],
	ʇ: letters[66],
	ʈ: letters[67],
	ʉ: letters[68],
	ʊ: letters[69],

	ʋ: letters[70],
	ʌ: letters[71],
	ʍ: letters[72],
	ʎ: letters[73],
	ʏ: letters[74],
	ʐ: letters[75],
	ʑ: letters[76],
	ʒ: letters[77],
	ʓ: letters[78],
	ʔ: letters[79],

	ʕ: letters[80],
	ʖ: letters[81],
	ʗ: letters[82],
	ʘ: letters[83],
	ʙ: letters[84],
	ʚ: letters[85],
	ʛ: letters[86],
	ʜ: letters[87],
	ʝ: letters[88],
	ʞ: letters[89],

	ʟ: letters[90],
	ʠ: letters[91],
	ʡ: letters[92],
	ʢ: letters[93],
	ʣ: letters[94],
	ʤ: letters[95],
	ʥ: letters[96],
	ʦ: letters[97],
	ʧ: letters[98],
	ʨ: letters[99],

	ʩ: letters[100],
	ʪ: letters[101],
	ʫ: letters[102],
	ʬ: letters[103],
	ʭ: letters[104],
	ʮ: letters[105],
	ʯ: letters[106],

	ˤ: letters[107],
	ː: letters[108],

	// from englishLetters a-z
	a: letters[109], //
	b: letters[110],
	c: letters[111], //
	d: letters[112],
	e: letters[113], //
	f: letters[114],
	g: letters[115],
	h: letters[116],
	i: letters[117],
	j: letters[118],
	k: letters[119],
	l: letters[120],
	m: letters[121],
	n: letters[122],
	o: letters[123],
	p: letters[124],
	q: letters[125],
	r: letters[126],
	s: letters[127],
	t: letters[128],
	u: letters[129],
	v: letters[130],
	w: letters[131],
	x: letters[132],
	y: letters[133],
	z: letters[134],

	COMBINING: letters[135],
}

export const ipa = new Script(
	Abjad.IPA,
	false,
	letters,
)
