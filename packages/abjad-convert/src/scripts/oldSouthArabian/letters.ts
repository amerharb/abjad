import { Script } from '../Script'
import { Abjad } from '../../types'

/**
 * Old South Arabian letters
 */
const letters = [
	String.fromCodePoint(0x10A60), /** #0  𐩠 U+10A60 OLD SOUTH ARABIAN LETTER He */
	String.fromCodePoint(0x10A61), /** #1  𐩡 U+10A61 OLD SOUTH ARABIAN LETTER Lamedh */
	String.fromCodePoint(0x10A62), /** #2  𐩢 U+10A62 OLD SOUTH ARABIAN LETTER Heth */
	String.fromCodePoint(0x10A63), /** #3  𐩣 U+10A63 OLD SOUTH ARABIAN LETTER Mem */
	String.fromCodePoint(0x10A64), /** #4  𐩤 U+10A64 OLD SOUTH ARABIAN LETTER Qoph */
	String.fromCodePoint(0x10A65), /** #5  𐩥 U+10A65 OLD SOUTH ARABIAN LETTER Waw */
	String.fromCodePoint(0x10A66), /** #6  𐩦 U+10A66 OLD SOUTH ARABIAN LETTER Shin */
	String.fromCodePoint(0x10A67), /** #7  𐩧 U+10A67 OLD SOUTH ARABIAN LETTER Resh */
	String.fromCodePoint(0x10A68), /** #8  𐩨 U+10A68 OLD SOUTH ARABIAN LETTER Beth */
	String.fromCodePoint(0x10A69), /** #9  𐩩 U+10A69 OLD SOUTH ARABIAN LETTER Taw */
	String.fromCodePoint(0x10A6A), /** #10 𐩪 U+10A6A OLD SOUTH ARABIAN LETTER Sat */
	String.fromCodePoint(0x10A6B), /** #11 𐩫 U+10A6B OLD SOUTH ARABIAN LETTER Kaph */
	String.fromCodePoint(0x10A6C), /** #12 𐩬 U+10A6C OLD SOUTH ARABIAN LETTER Nun */
	String.fromCodePoint(0x10A6D), /** #13 𐩭 U+10A6D OLD SOUTH ARABIAN LETTER Kheth */
	String.fromCodePoint(0x10A6E), /** #14 𐩮 U+10A6E OLD SOUTH ARABIAN LETTER Sadhe */
	String.fromCodePoint(0x10A6F), /** #15 𐩯 U+10A6F OLD SOUTH ARABIAN LETTER Samekh */
	String.fromCodePoint(0x10A70), /** #16 𐩰 U+10A70 OLD SOUTH ARABIAN LETTER Fe */
	String.fromCodePoint(0x10A71), /** #17 𐩱 U+10A71 OLD SOUTH ARABIAN LETTER Alef */
	String.fromCodePoint(0x10A72), /** #18 𐩲 U+10A72 OLD SOUTH ARABIAN LETTER Ayin */
	String.fromCodePoint(0x10A73), /** #19 𐩳 U+10A73 OLD SOUTH ARABIAN LETTER Dhadhe */
	String.fromCodePoint(0x10A74), /** #20 𐩴 U+10A74 OLD SOUTH ARABIAN LETTER Gimel */
	String.fromCodePoint(0x10A75), /** #21 𐩵 U+10A75 OLD SOUTH ARABIAN LETTER Daleth */
	String.fromCodePoint(0x10A76), /** #22 𐩶 U+10A76 OLD SOUTH ARABIAN LETTER Ghayn */
	String.fromCodePoint(0x10A77), /** #23 𐩷 U+10A77 OLD SOUTH ARABIAN LETTER Teth */
	String.fromCodePoint(0x10A78), /** #24 𐩸 U+10A78 OLD SOUTH ARABIAN LETTER Zayn */
	String.fromCodePoint(0x10A79), /** #25 𐩹 U+10A79 OLD SOUTH ARABIAN LETTER Dhaleth */
	String.fromCodePoint(0x10A7A), /** #26 𐩺 U+10A7A OLD SOUTH ARABIAN LETTER Yodh */
	String.fromCodePoint(0x10A7B), /** #27 𐩻 U+10A7B OLD SOUTH ARABIAN LETTER Thaw */
	String.fromCodePoint(0x10A7C), /** #28 𐩼 U+10A7C OLD SOUTH ARABIAN LETTER Theth */
	String.fromCodePoint(0x10A7D), /** #29 𐩽 U+10A7D OLD SOUTH ARABIAN NUMBER ONE */
	String.fromCodePoint(0x10A7E), /** #30 𐩾 U+10A7E OLD SOUTH ARABIAN NUMBER FIFTY */
	String.fromCodePoint(0x10A7F), /** #31 𐩿 U+10A7F OLD SOUTH ARABIAN NUMERIC INDICATOR */
] as const

export const Sa = {
	He: letters[0], // 𐩠
	Lamedh: letters[1], // 𐩡
	Heth: letters[2], // 𐩢
	Mem: letters[3], // 𐩣
	Qoph: letters[4], // 𐩤
	Waw: letters[5], // 𐩥
	Shin: letters[6], // 𐩦
	Resh: letters[7], // 𐩧
	Beth: letters[8], // 𐩨
	Taw: letters[9], // 𐩩
	Sat: letters[10], // 𐩪
	Kaph: letters[11], // 𐩫
	Nun: letters[12], // 𐩬
	Kheth: letters[13], // 𐩭
	Sadhe: letters[14], // 𐩮
	Samekh: letters[15], // 𐩯
	Fe: letters[16], // 𐩰
	Alef: letters[17], // 𐩱
	Ayin: letters[18], // 𐩲
	Dhadhe: letters[19], // 𐩳
	Gimel: letters[20], // 𐩴
	Daleth: letters[21], // 𐩵
	Ghayn: letters[22], // 𐩶
	Teth: letters[23], // 𐩷
	Zayn: letters[24], // 𐩸
	Dhaleth: letters[25], // 𐩹
	Yodh: letters[26], // 𐩺
	Thaw: letters[27], // 𐩻
	Theth: letters[28], // 𐩼
	ONE: letters[29], // 𐩽
	FIFTY: letters[30], // 𐩾
	INDICATOR: letters[31], // 𐩿
}

export const oldSouthArabian = new Script(
	Abjad.OldSouthArabian,
	true,
	letters,
)
