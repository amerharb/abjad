import { Abjad } from '../../types'
import { Script } from '../Script'

const letters = [
	String.fromCodePoint(0x2d30), /** #0 ⴰ U+2D30 TIFINAGH LETTER YA */
	String.fromCodePoint(0x2d31), /** #1 ⴱ U+2D31 TIFINAGH LETTER YAB */
	String.fromCodePoint(0x2d32), /** #2 ⴲ U+2D32 TIFINAGH LETTER YABH */
	String.fromCodePoint(0x2d33), /** #3 ⴳ U+2D33 TIFINAGH LETTER YAG */
	String.fromCodePoint(0x2d34), /** #4 ⴴ U+2D34 TIFINAGH LETTER YAGHH */
	String.fromCodePoint(0x2d35), /** #5 ⴵ U+2D35 TIFINAGH LETTER BERBER ACADEMY YAJ */
	String.fromCodePoint(0x2d36), /** #6 ⴶ U+2D36 TIFINAGH LETTER YAJ */
	String.fromCodePoint(0x2d37), /** #7 ⴷ U+2D37 TIFINAGH LETTER YAD */
	String.fromCodePoint(0x2d38), /** #8 ⴸ U+2D38 TIFINAGH LETTER YADH */
	String.fromCodePoint(0x2d39), /** #9 ⴹ U+2D39 TIFINAGH LETTER YADD */
	String.fromCodePoint(0x2d3a), /** #10 ⴺ U+2D3A TIFINAGH LETTER YADDH */
	String.fromCodePoint(0x2d3b), /** #11 ⴻ U+2D3B TIFINAGH LETTER YEY */
	String.fromCodePoint(0x2d3c), /** #12 ⴼ U+2D3C TIFINAGH LETTER YAF */
	String.fromCodePoint(0x2d3d), /** #13 ⴽ U+2D3D TIFINAGH LETTER YAK */
	String.fromCodePoint(0x2d3e), /** #14 ⴾ U+2D3E TIFINAGH LETTER TUAREG YAK */
	String.fromCodePoint(0x2d3f), /** #15 ⴿ U+2D3F TIFINAGH LETTER YAKHH */
	String.fromCodePoint(0x2d40), /** #16 ⵀ U+2D40 TIFINAGH LETTER YAH */
	String.fromCodePoint(0x2d41), /** #17 ⵁ U+2D41 TIFINAGH LETTER BERBER ACADEMY YAH */
	String.fromCodePoint(0x2d42), /** #18 ⵂ U+2D42 TIFINAGH LETTER TUAREG YAH */
	String.fromCodePoint(0x2d43), /** #19 ⵃ U+2D43 TIFINAGH LETTER YAHH */
	String.fromCodePoint(0x2d44), /** #20 ⵄ U+2D44 TIFINAGH LETTER YAA */
	String.fromCodePoint(0x2d45), /** #21 ⵅ U+2D45 TIFINAGH LETTER YAKH */
	String.fromCodePoint(0x2d46), /** #22 ⵆ U+2D46 TIFINAGH LETTER TUAREG YAKH */
	String.fromCodePoint(0x2d47), /** #23 ⵇ U+2D47 TIFINAGH LETTER YAQ */
	String.fromCodePoint(0x2d48), /** #24 ⵈ U+2D48 TIFINAGH LETTER TUAREG YAQ */
	String.fromCodePoint(0x2d49), /** #25 ⵉ U+2D49 TIFINAGH LETTER YI */
	String.fromCodePoint(0x2d4a), /** #26 ⵊ U+2D4A TIFINAGH LETTER YAZH */
	String.fromCodePoint(0x2d4b), /** #27 ⵋ U+2D4B TIFINAGH LETTER AHAGGAR YAZH */
	String.fromCodePoint(0x2d4c), /** #28 ⵌ U+2D4C TIFINAGH LETTER TUAREG YAZH */
	String.fromCodePoint(0x2d4d), /** #29 ⵍ U+2D4D TIFINAGH LETTER YAL */
	String.fromCodePoint(0x2d4e), /** #30 ⵎ U+2D4E TIFINAGH LETTER YAM */
	String.fromCodePoint(0x2d4f), /** #31 ⵏ U+2D4F TIFINAGH LETTER YAN */
	String.fromCodePoint(0x2d50), /** #32 ⵐ U+2D50 TIFINAGH LETTER TUAREG YAGN */
	String.fromCodePoint(0x2d51), /** #33 ⵑ U+2D51 TIFINAGH LETTER TUAREG YANG */
	String.fromCodePoint(0x2d52), /** #34 ⵒ U+2D52 TIFINAGH LETTER YAP */
	String.fromCodePoint(0x2d53), /** #35 ⵓ U+2D53 TIFINAGH LETTER YU */
	String.fromCodePoint(0x2d54), /** #36 ⵔ U+2D54 TIFINAGH LETTER YAR */
	String.fromCodePoint(0x2d55), /** #37 ⵕ U+2D55 TIFINAGH LETTER YARR */
	String.fromCodePoint(0x2d56), /** #38 ⵖ U+2D56 TIFINAGH LETTER YAGH */
	String.fromCodePoint(0x2d57), /** #39 ⵗ U+2D57 TIFINAGH LETTER TUAREG YAGH */
	String.fromCodePoint(0x2d58), /** #40 ⵘ U+2D58 TIFINAGH LETTER AYER YAGH */
	String.fromCodePoint(0x2d59), /** #41 ⵙ U+2D59 TIFINAGH LETTER YAS */
	String.fromCodePoint(0x2d5a), /** #42 ⵚ U+2D5A TIFINAGH LETTER YASS */
	String.fromCodePoint(0x2d5b), /** #43 ⵛ U+2D5B TIFINAGH LETTER YASH */
	String.fromCodePoint(0x2d5c), /** #44 ⵜ U+2D5C TIFINAGH LETTER YAT */
	String.fromCodePoint(0x2d5d), /** #45 ⵝ U+2D5D TIFINAGH LETTER YATH */
	String.fromCodePoint(0x2d5e), /** #46 ⵞ U+2D5E TIFINAGH LETTER YACH */
	String.fromCodePoint(0x2d5f), /** #47 ⵟ U+2D5F TIFINAGH LETTER YATT */
	String.fromCodePoint(0x2d60), /** #48 ⵠ U+2D60 TIFINAGH LETTER YAV */
	String.fromCodePoint(0x2d61), /** #49 ⵡ U+2D61 TIFINAGH LETTER YAW */
	String.fromCodePoint(0x2d62), /** #50 ⵢ U+2D62 TIFINAGH LETTER YAY */
	String.fromCodePoint(0x2d63), /** #51 ⵣ U+2D63 TIFINAGH LETTER YAZ */
	String.fromCodePoint(0x2d64), /** #52 ⵤ U+2D64 TIFINAGH LETTER TAWELLEMET YAZ */
	String.fromCodePoint(0x2d65), /** #53 ⵥ U+2D65 TIFINAGH LETTER YAZZ */
	String.fromCodePoint(0x2d66), /** #54 ⵦ U+2D66 TIFINAGH LETTER YE */
	String.fromCodePoint(0x2d67), /** #55 ⵧ U+2D67 TIFINAGH LETTER YO */
	String.fromCodePoint(0x2d6f), /** #56 ⵯ U+2D6F TIFINAGH MODIFIER LETTER LABIALIZATION MARK */
	String.fromCodePoint(0x2d70), /** #54 ⵰ U+2D70 TIFINAGH SEPARATOR MARK */
	String.fromCodePoint(0x2d7f), /** #55 ⵿ U+2D7F TIFINAGH CONSONANT JOINER */
] as const

export const Ti = {
	Ya: letters[0], // ⴰ
	Yab: letters[1], // ⴱ
	Yabh: letters[2], // ⴲ
	Yag: letters[3], // ⴳ
	Yaghh: letters[4], // ⴴ
	BerberAcademyYaj: letters[5], // ⴵ
	Yaj: letters[6], // ⴶ
	Yad: letters[7], // ⴷ
	Yadh: letters[8], // ⴸ
	Yadd: letters[9], // ⴹ
	Yaddh: letters[10], // ⴺ
	Yey: letters[11], // ⴻ
	Yaf: letters[12], // ⴼ
	Yak: letters[13], // ⴽ
	TuaregYak: letters[14], // ⴾ
	Yakhh: letters[15], // ⴿ
	Yah: letters[16], // ⵀ
	BerberAcademyYah: letters[17], // ⵁ
	TuaregYah: letters[18], // ⵂ
	Yahh: letters[19], // ⵃ
	Yaa: letters[20], // ⵄ
	Yakh: letters[21], // ⵅ
	TuaregYakh: letters[22], // ⵆ
	Yaq: letters[23], // ⵇ
	TuaregYaq: letters[24], // ⵈ
	Yi: letters[25], // ⵉ
	Yazh: letters[26], // ⵊ
	AhaggarYazh: letters[27], // ⵋ
	TuaregYazh: letters[28], // ⵌ
	Yal: letters[29], // ⵍ
	Yam: letters[30], // ⵎ
	Yan: letters[31], // ⵏ
	TuaregYagn: letters[32], // ⵐ
	TuaregYang: letters[33], // ⵑ
	Yap: letters[34], // ⵒ
	Yu: letters[35], // ⵓ
	Yar: letters[36], // ⵔ
	Yarr: letters[37], // ⵕ
	Yagh: letters[38], // ⵖ
	TuaregYagh: letters[39], // ⵗ
	AyerYagh: letters[40], // ⵘ
	Yas: letters[41], // ⵙ
	Yass: letters[42], // ⵚ
	Yash: letters[43], // ⵛ
	Yat: letters[44], // ⵜ
	Yath: letters[45], // ⵝ
	Yach: letters[46], // ⵞ
	Yatt: letters[47], // ⵟ
	Yav: letters[48], // ⵠ
	Yaw: letters[49], // ⵡ
	Yay: letters[50], // ⵢ
	Yaz: letters[51], // ⵣ
	TawellemetYaz: letters[52], // ⵤ
	Yazz: letters[53], // ⵥ
	Ye: letters[54], // ⵦ
	Yo: letters[55], // ⵧ
	ModifierLetterLabializationMark: letters[56], // ⵯ
	SeparatorMark: letters[57], // ⵰
	ConsonantJoiner: letters[58], // ⵿
}

export const tifinagh = new Script(
	Abjad.Tifinagh,
	false,
	letters,
)
