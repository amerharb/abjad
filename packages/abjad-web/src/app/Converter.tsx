'use client'

import { useState } from 'react'
import Select from 'react-select'
import { Abjad, convert, getLetters } from 'abjad-convert'
import OnScreenKeyboard from '@/components/OnScreenKeyboard'
import ThemeToggle from '@/components/ThemeToggle'
import Image from 'next/image'

// How long the copy button shows the "copied" checkmark before reverting.
const COPIED_RESET_MS = 1500

function CopyIcon() {
	return (
		<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
			strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
			<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
		</svg>
	)
}

function CheckIcon() {
	return (
		<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
			strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<polyline points="20 6 9 17 4 12"/>
		</svg>
	)
}

// Theme react-select via CSS variables so its control/menu follow the color scheme.
const selectStyles = {
	control: (base) => ({ ...base, backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }),
	menu: (base) => ({ ...base, backgroundColor: 'var(--surface)' }),
	option: (base, state) => ({
		...base,
		backgroundColor: state.isFocused ? 'var(--surface-hover)' : 'var(--surface)',
		color: 'var(--fg)',
	}),
	singleValue: (base) => ({ ...base, color: 'var(--fg)' }),
	input: (base) => ({ ...base, color: 'var(--fg)' }),
	placeholder: (base) => ({ ...base, color: 'var(--muted)' }),
}

const options = [
	{ value: Abjad.IPA, label: 'IPA' },
	{ value: Abjad.Arabic, label: 'Arabic ابجد' },
	{ value: Abjad.Hangul, label: 'Hangul ㄱㄴㄷㄹ' },
	{ value: Abjad.HanifiRohingya, label: 'HanifiRohingya 𐴀𐴁𐴅𐴊' },
	{ value: Abjad.Hebrew, label: 'Hebrew אבגדה' },
	{ value: Abjad.ImperialAramaic, label: 'Imperial Aramaic 𐡀𐡁𐡂𐡃' },
	{ value: Abjad.Nabataean, label: 'Nabataean 𐢀𐢂𐢄𐢅' },
	{ value: Abjad.OldSouthArabian, label: 'Old South Arabian 𐩱𐩨𐩴𐩵' },
	{ value: Abjad.Phoenician, label: 'Phoenician 𐤀𐤁𐤂𐤃' },
	{ value: Abjad.Runic, label: 'Runic ᚫᚮᛒᛲᛞ' },
	{ value: Abjad.Syriac, label: 'Syriac ܐܒܓܕ' },
	{ value: Abjad.Tifinagh, label: 'Tifinagh ⴰⴱⵊⴷ' },
	{ value: Abjad.Ugaritic, label: 'Ugaritic 𐎀𐎁𐎂𐎄' },
]

const optionByValue = (value: Abjad) => options.find((o) => o.value === value)

// Resolve a query-param string (e.g. "ipa") to an Abjad value, case-insensitively.
function parseAbjad(value: string | undefined): Abjad | undefined {
	if (!value) return undefined
	const lower = value.toLowerCase()
	return (Object.values(Abjad) as string[]).find((a) => a === lower) as Abjad | undefined
}

// Component for "From" Dropdown
const FromSelect = ({ setFromValue, toValue, textBoxValue, setResultText, defaultOption }) => (
	<div style={{ marginBottom: '10px' }}>
		<label htmlFor="fromDropdown" style={{ marginRight: '10px' }}>
			From:
		</label>
		<Select
			id="fromDropdown"
			instanceId="fromDropdown"
			isSearchable={false}
			styles={selectStyles}
			options={options}
			defaultValue={defaultOption}
			onChange={(selectedOption) => {
				setFromValue(selectedOption?.value)
				if (!selectedOption?.value || !toValue) return
				const result = convert(textBoxValue, selectedOption.value, toValue)
				setResultText(result)
			}}
		/>
	</div>
)

// Component for "To" Dropdown
const ToSelect = ({ setToValue, fromValue, textBoxValue, setResultText, defaultOption }) => (
	<div style={{ marginBottom: '10px' }}>
		<label htmlFor="toDropdown" style={{ marginRight: '10px' }}>
			To:
		</label>
		<Select
			id="toDropdown"
			instanceId="toDropdown"
			isSearchable={false}
			styles={selectStyles}
			options={options}
			defaultValue={defaultOption}
			onChange={(selectedOption) => {
				setToValue(selectedOption?.value)
				if (!fromValue || !selectedOption?.value) return
				const result = convert(textBoxValue, fromValue, selectedOption.value)
				setResultText(result)
			}}
		/>
	</div>
)

export default function Converter({ from, to, text }: { from?: string; to?: string; text?: string }) {
	const initialFrom = parseAbjad(from) ?? Abjad.IPA
	const initialTo = parseAbjad(to) ?? Abjad.Arabic
	const initialText = text ?? ''

	const [textBoxValue, setTextBoxValue] = useState(initialText)
	const [resultText, setResultText] = useState(() => {
		if (!initialText) return ''
		try {
			return convert(initialText, initialFrom, initialTo)
		} catch {
			// Unsupported from/to pair — leave the result empty rather than crashing render.
			return ''
		}
	})
	const [fromValue, setFromValue] = useState<Abjad | undefined>(initialFrom)
	const [toValue, setToValue] = useState<Abjad | undefined>(initialTo)
	const [copied, setCopied] = useState(false)

	function copyResult() {
		navigator.clipboard.writeText(resultText).then(() => {
			setCopied(true)
			setTimeout(() => setCopied(false), COPIED_RESET_MS)
		}).catch(() => {
			// Clipboard may be unavailable (e.g. insecure context); silently ignore.
		})
	}

	return (
		<main style={{ textAlign: 'center', padding: '20px' }}>
			<ThemeToggle/>
			<h1>Abjad Converter</h1>
			<div className="converter-controls">
				<FromSelect
					setFromValue={setFromValue}
					toValue={toValue}
					textBoxValue={textBoxValue}
					setResultText={setResultText}
					defaultOption={optionByValue(initialFrom)}
				/>
				<OnScreenKeyboard
					letters={fromValue ? getLetters(fromValue) : []}
					onClickLetter={(letter) => {
						const newTextBoxValue = textBoxValue + letter
						setTextBoxValue(newTextBoxValue)
						if (!fromValue || !toValue) return
						const result = convert(newTextBoxValue, fromValue, toValue)
						setResultText(result)
					}}
					onClearAll={() => {
						setTextBoxValue('')
						setResultText('')
					}}
					onBackSpace={() => {
						const newTextBoxValue = textBoxValue.slice(0, -1)
						setTextBoxValue(newTextBoxValue)
						if (!fromValue || !toValue) return
						const result = convert(newTextBoxValue, fromValue, toValue)
						setResultText(result)
					}}
				/>
				<ToSelect
					setToValue={setToValue}
					fromValue={fromValue}
					textBoxValue={textBoxValue}
					setResultText={setResultText}
					defaultOption={optionByValue(initialTo)}
				/>
			</div>
			<label htmlFor="editTextBox" style={{ marginRight: '10px' }}>
				Enter Text:
			</label>
			<textarea
				id="editTextBox"
				dir="auto"
				placeholder="Type here"
				value={textBoxValue}
				onChange={(e) => {
					setTextBoxValue(e.target.value)
					if (!fromValue || !toValue) return
					const result = convert(e.target.value, fromValue, toValue)
					setResultText(result)
				}}
				style={{ padding: '10px', width: '100%', minHeight: '100px', fontSize: '25px' }}
			/>
			<div>
				<label htmlFor="resultLabel" style={{ marginRight: '10px' }}>
					Result:
				</label>
				<br/>
				<span
					id="resultLabel"
					dir="auto"
					style={{ padding: '10px', width: '100%', minHeight: '100px', fontSize: '25px' }}
				>
					{resultText}
				</span>
				{resultText !== '' && (
					<button
						type="button"
						className="copy-btn"
						title="Copy to clipboard"
						aria-label="Copy result to clipboard"
						style={copied ? { color: '#3fb950' } : undefined}
						onClick={copyResult}
					>
						{copied ? <CheckIcon/> : <CopyIcon/>}
					</button>
				)}
			</div>
			<hr/>
			<div style={{ marginTop: '20px', fontSize: '22px' }}>
				This is an open source project, based on npm package{' '}
				<a href="https://www.npmjs.com/package/abjad-convert" style={{ textDecoration: 'none' }}>
					<Image src="/images/Npm-logo.svg" alt="NPM" width={54} height={21}/>
				</a>
				<br/>
				You can find the source code on{' '}
				<a href="https://www.github.com/amerharb/abjad" style={{ textDecoration: 'none' }}>
					<Image className="github-logo" src="/images/Github-logo.svg" alt="GitHub" width={32} height={32}/>
				</a>
				<br/>
				You welcome to contribute to the project.
			</div>
			<div style={{ marginTop: '25px', fontSize: '22px' }}>
				<a href="mailto:abjad@amerharb.com" style={{ textDecoration: 'none' }}>
					✉️ Email
				</a>
			</div>
		</main>
	)
}
