import { Script } from '../Script'
import { Abjad } from '../../types'

const letters = [
	'\u0621', /** #0   ء */
	'\u0622', /** #1   آ */
	'\u0623', /** #2   أ */
	'\u0624', /** #3   ؤ */
	'\u0625', /** #4   إ */
	'\u0626', /** #5   ئ */
	'\u0627', /** #6   ا */
	'\u0628', /** #7   ب */
	'\u0629', /** #8   ة */
	'\u062A', /** #9   ت */
	'\u062B', /** #10  ث */
	'\u062C', /** #11  ج */
	'\u062D', /** #12  ح */
	'\u062E', /** #13  خ */
	'\u062F', /** #14  د */
	'\u0630', /** #15  ذ */
	'\u0631', /** #16  ر */
	'\u0632', /** #17  ز */
	'\u0633', /** #18  س */
	'\u0634', /** #19  ش */
	'\u0635', /** #20  ص */
	'\u0636', /** #21  ض */
	'\u0637', /** #22  ط */
	'\u0638', /** #23  ظ */
	'\u0639', /** #24  ع */
	'\u063A', /** #25  غ */
	/** ignore from U+063B to U+0640 */
	'\u0641', /** #26  ف */
	'\u0642', /** #27  ق */
	'\u0643', /** #28  ك */
	'\u0644', /** #29  ل */
	'\u0645', /** #30  م */
	'\u0646', /** #31  ن */
	'\u0647', /** #32  ه */
	'\u0648', /** #33  و */
	'\u0649', /** #34  ى */
	'\u064A', /** #35  ي */
	'\u064B', /** #36  ً  */
	'\u064C', /** #37  ٌ  */
	'\u064D', /** #38  ٍ  */
	'\u064E', /** #39  َ  */
	'\u064F', /** #40  ُ  */
	'\u0650', /** #41  ِ  */
	'\u0651', /** #42  ّ  */
	'\u0652', /** #43  ْ  */
	/** ignore from U+0653 to U+066F */
	'\u0670', /** #44  ٰ  */
	'\u0671', /** #45  ٱ */

	/** selective frequently used alternative letters */
	'\u067E', /** #46  پ */
	'\u0686', /** #47  چ */
	'\u06A4', /** #48  ڤ */
	'\u06AF', /** #49  گ */
] as const

export const Ar = {
	Hamza: letters[0], // ء
	AlefMadda: letters[1], // آ
	AlefHamza: letters[2], // أ
	WawHamza: letters[3], // ؤ
	AlefHamzaMaksura: letters[4], // إ
	AlefMaksuraHamza: letters[5], // ئ
	Alef: letters[6], // ا
	Ba: letters[7], // ب
	TaMarbuta: letters[8], // ة
	Ta: letters[9], // ت
	Tha: letters[10], // ث
	Jeem: letters[11], // ج
	H7aa: letters[12], // ح
	Khaa: letters[13], // خ
	Dal: letters[14], // د
	Thal: letters[15], // ذ
	Ra: letters[16], // ر
	Zay: letters[17], // ز
	Seen: letters[18], // س
	Sheen: letters[19], // ش
	Sad: letters[20], // ص
	Dad: letters[21], // ض
	TTa: letters[22], // ط
	THa: letters[23], // ظ
	Ayn: letters[24], // ع
	Ghayn: letters[25], // غ
	Fa: letters[26], // ف
	Qaf: letters[27], // ق
	Kaf: letters[28], // ك
	Lam: letters[29], // ل
	Meem: letters[30], // م
	Noon: letters[31], // ن
	Ha: letters[32], // ه
	Waw: letters[33], // و
	AlefMaksura: letters[34], // ى
	Yaa: letters[35], // ي
	Fathatan: letters[36], // ً
	Dammatan: letters[37], // ٌ
	Kasratan: letters[38], // ٍ
	Fatha: letters[39], // َ
	Damma: letters[40], // ُ
	Kasra: letters[41], // ِ
	Shadda: letters[42], // ّ
	Sukun: letters[43], // ْ
	AlefKhanjariya: letters[44], // ٰ
	AlefWasla: letters[45], // ٱ
	Pe: letters[46], // پ
	Che: letters[47], // چ
	Ve: letters[48], // ڤ
	Gaf: letters[49], // گ

}

export const arabic = new Script(
	Abjad.Arabic,
	true,
	letters,
)
