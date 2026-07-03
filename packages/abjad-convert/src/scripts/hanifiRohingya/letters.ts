import { Script } from '../Script'
import { Abjad } from '../../types'

const letters = [
	String.fromCodePoint(0x10D00), /** #0  𐴀 U+10D00 HANIFI ROHINGYA LETTER A */
	String.fromCodePoint(0x10D01), /** #1  𐴁 U+10D01 HANIFI ROHINGYA LETTER BA */
	String.fromCodePoint(0x10D02), /** #2  𐴂 U+10D02 HANIFI ROHINGYA LETTER PA */
	String.fromCodePoint(0x10D03), /** #3  𐴃 U+10D03 HANIFI ROHINGYA LETTER TA */
	String.fromCodePoint(0x10D04), /** #4  𐴄 U+10D04 HANIFI ROHINGYA LETTER TTA */
	String.fromCodePoint(0x10D05), /** #5  𐴅 U+10D05 HANIFI ROHINGYA LETTER JA */
	String.fromCodePoint(0x10D06), /** #6  𐴆 U+10D06 HANIFI ROHINGYA LETTER CA */
	String.fromCodePoint(0x10D07), /** #7  𐴇 U+10D07 HANIFI ROHINGYA LETTER HA */
	String.fromCodePoint(0x10D08), /** #8  𐴈 U+10D08 HANIFI ROHINGYA LETTER KHA */
	String.fromCodePoint(0x10D09), /** #9  𐴉 U+10D09 HANIFI ROHINGYA LETTER FA */
	String.fromCodePoint(0x10D0A), /** #10 𐴊 U+10D0A HANIFI ROHINGYA LETTER DA */
	String.fromCodePoint(0x10D0B), /** #11 𐴋 U+10D0B HANIFI ROHINGYA LETTER DDA */
	String.fromCodePoint(0x10D0C), /** #12 𐴌 U+10D0C HANIFI ROHINGYA LETTER RA */
	String.fromCodePoint(0x10D0D), /** #13 𐴍 U+10D0D HANIFI ROHINGYA LETTER RRA */
	String.fromCodePoint(0x10D0E), /** #14 𐴎 U+10D0E HANIFI ROHINGYA LETTER ZA */
	String.fromCodePoint(0x10D0F), /** #15 𐴏 U+10D0F HANIFI ROHINGYA LETTER SA */
	String.fromCodePoint(0x10D10), /** #16 𐴐 U+10D10 HANIFI ROHINGYA LETTER SHA */
	String.fromCodePoint(0x10D11), /** #17 𐴑 U+10D11 HANIFI ROHINGYA LETTER KA */
	String.fromCodePoint(0x10D12), /** #18 𐴒 U+10D12 HANIFI ROHINGYA LETTER GA */
	String.fromCodePoint(0x10D13), /** #19 𐴓 U+10D13 HANIFI ROHINGYA LETTER LA */
	String.fromCodePoint(0x10D14), /** #20 𐴔 U+10D14 HANIFI ROHINGYA LETTER MA */
	String.fromCodePoint(0x10D15), /** #21 𐴕 U+10D15 HANIFI ROHINGYA LETTER NA */
	String.fromCodePoint(0x10D16), /** #22 𐴖 U+10D16 HANIFI ROHINGYA LETTER WA */
	String.fromCodePoint(0x10D17), /** #23 𐴗 U+10D17 HANIFI ROHINGYA LETTER KINNA WA */
	String.fromCodePoint(0x10D18), /** #24 𐴘 U+10D18 HANIFI ROHINGYA LETTER YA */
	String.fromCodePoint(0x10D19), /** #25 𐴙 U+10D19 HANIFI ROHINGYA LETTER KINNA YA */
	String.fromCodePoint(0x10D1A), /** #26 𐴚 U+10D1A HANIFI ROHINGYA LETTER NGA */
	String.fromCodePoint(0x10D1B), /** #27 𐴛 U+10D1B HANIFI ROHINGYA VOWEL NYA */

	String.fromCodePoint(0x10D1C), /** #28 𐴜 U+10D1C HANIFI ROHINGYA LETTER VA */

	String.fromCodePoint(0x10D1D), /** #29 𐴝 U+10D1D HANIFI ROHINGYA VOWEL A */
	String.fromCodePoint(0x10D1E), /** #30 𐴞 U+10D1E HANIFI ROHINGYA VOWEL I */
	String.fromCodePoint(0x10D1F), /** #31 𐴟 U+10D1F HANIFI ROHINGYA VOWEL U */
	String.fromCodePoint(0x10D20), /** #32 𐴠 U+10D20 HANIFI ROHINGYA VOWEL E */
	String.fromCodePoint(0x10D21), /** #33 𐴡 U+10D21 HANIFI ROHINGYA VOWEL O */
	String.fromCodePoint(0x10D22), /** #34 𐴢 U+10D22 HANIFI ROHINGYA MARK SAKIN */

	String.fromCodePoint(0x10D23), /** #35 𐴣 U+10D23 HANIFI ROHINGYA SIGN KHONNA */
	String.fromCodePoint(0x10D24), /** #36 𐴤 U+10D24 HANIFI ROHINGYA SIGN HARBAHAY */
	String.fromCodePoint(0x10D25), /** #37 𐴥 U+10D25 HANIFI ROHINGYA SIGN TAHALA */
	String.fromCodePoint(0x10D26), /** #38 𐴦 U+10D26 HANIFI ROHINGYA SIGN TANA */
	String.fromCodePoint(0x10D27), /** #39 𐴧 U+10D27 HANIFI ROHINGYA SIGN TASSI */

	String.fromCodePoint(0x10D30), /** #40 𐴰 U+10D30 HANIFI ROHINGYA DIGIT ZERO */
	String.fromCodePoint(0x10D31), /** #41 𐴱 U+10D31 HANIFI ROHINGYA DIGIT ONE */
	String.fromCodePoint(0x10D32), /** #42 𐴲 U+10D32 HANIFI ROHINGYA DIGIT TWO */
	String.fromCodePoint(0x10D33), /** #43 𐴳 U+10D33 HANIFI ROHINGYA DIGIT THREE */
	String.fromCodePoint(0x10D34), /** #44 𐴴 U+10D34 HANIFI ROHINGYA DIGIT FOUR */
	String.fromCodePoint(0x10D35), /** #45 𐴵 U+10D35 HANIFI ROHINGYA DIGIT FIVE */
	String.fromCodePoint(0x10D36), /** #46 𐴶 U+10D36 HANIFI ROHINGYA DIGIT SIX */
	String.fromCodePoint(0x10D37), /** #47 𐴷 U+10D37 HANIFI ROHINGYA DIGIT SEVEN */
	String.fromCodePoint(0x10D38), /** #48 𐴸 U+10D38 HANIFI ROHINGYA DIGIT EIGHT */
	String.fromCodePoint(0x10D39), /** #49 𐴹 U+10D39 HANIFI ROHINGYA DIGIT NINE */
] as const

export const HR = {
	A: letters[0], // 𐴀
	Ba: letters[1], // 𐴁
	Pa: letters[2], // 𐴂
	Ta: letters[3], // 𐴃
	Tta: letters[4], // 𐴄
	Ja: letters[5], // 𐴅
	Ca: letters[6], // 𐴆
	Ha: letters[7], // 𐴇
	Kha: letters[8], // 𐴈
	Fa: letters[9], // 𐴉
	Da: letters[10], // 𐴊
	Dda: letters[11], // 𐴋
	Ra: letters[12], // 𐴌
	Rra: letters[13], // 𐴍
	Za: letters[14], // 𐴎
	Sa: letters[15], // 𐴏
	Sha: letters[16], // 𐴐
	Ka: letters[17], // 𐴑
	Ga: letters[18], // 𐴒
	La: letters[19], // 𐴓
	Ma: letters[20], // 𐴔
	Na: letters[21], // 𐴕
	Wa: letters[22], // 𐴖
	KinnaWa: letters[23], // 𐴗
	Ya: letters[24], // 𐴘
	KinnaYa: letters[25], // 𐴙
	Nga: letters[26], // 𐴚
	Nya: letters[27], // 𐴛
	Va: letters[28], // 𐴜
	VowelA: letters[29], // 𐴝
	VowelI: letters[30], // 𐴞
	VowelU: letters[31], // 𐴟
	VowelE: letters[32], // 𐴠
	VowelO: letters[33], // 𐴡
	MarkSakin: letters[34], // 𐴢
	MarkNaKhonna: letters[35], // 𐴣
	SignHarbahay: letters[36], // 𐴤
	SignTahala: letters[37], // 𐴥
	SignTana: letters[38], // 𐴦
	SignTassi: letters[39], // 𐴧
	DigitZero: letters[40], // 𐴰
	DigitOne: letters[41], // 𐴱
	DigitTwo: letters[42], // 𐴲
	DigitThree: letters[43], // 𐴳
	DigitFour: letters[44], // 𐴴
	DigitFive: letters[45], // 𐴵
	DigitSix: letters[46], // 𐴶
	DigitSeven: letters[47], // 𐴷
	DigitEight: letters[48], // 𐴸
	DigitNine: letters[49], // 𐴹
}

export const hanifiRohingya = new Script(
	Abjad.HanifiRohingya,
	true,
	letters,
)
