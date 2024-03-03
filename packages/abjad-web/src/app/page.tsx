'use client'

import { useState } from 'react'
import Select from 'react-select'
import { Abjad, convert, getLetters } from 'abjad-convert'
import OnScreenKeyboard from '@/components/OnScreenKeyboard'
import Image from 'next/image'

export default function Home() {
	const [textBoxValue, setTextBoxValue] = useState('')
	const [resultText, setResultText] = useState('')
	const [fromValue, setFromValue] = useState<Abjad | undefined>(Abjad.Arabic)
	const [toValue, setToValue] = useState<Abjad | undefined>(Abjad.IPA)

	const options = [
		{ value: Abjad.IPA, label: 'IPA' },
		{ value: Abjad.Arabic, label: 'Arabic ابجد' },
		{ value: Abjad.ImperialAramaic, label: 'Imperial Aramaic 𐡀𐡁𐡂𐡃' },
		{ value: Abjad.OldSouthArabian, label: 'Old South Arabian 𐩱𐩨𐩴𐩵' },
		{ value: Abjad.Phoenician, label: 'Phoenician 𐤀𐤁𐤂𐤃' },
		{ value: Abjad.Syriac, label: 'Syriac ܐܒܓܕ' },
		{ value: Abjad.Tifinagh, label: 'Tifinagh ⴰⴱⵊⴷ' },
		{ value: Abjad.Ugaritic, label: 'Ugaritic 𐎀𐎁𐎂𐎄' },
	]
	const FromSelect = () => <div style={{ marginBottom: '10px' }}>
		<label htmlFor="fromDropdown" style={{ marginRight: '10px' }}>
			From:
		</label>
		<Select
			id="fromDropdown"
			isSearchable={false}
			options={options}
			defaultValue={options[1]}
			onChange={(selectedOption) => {
				setFromValue(selectedOption?.value)
				if (!selectedOption?.value || !toValue) {
					return
				}
				const result = convert(textBoxValue, selectedOption?.value, toValue)
				setResultText(result)
			}}
		/>
	</div>
	const ToSelect = () => <div style={{ marginBottom: '10px' }}>
		<label htmlFor="toDropdown" style={{ marginRight: '10px' }}>
			To:
		</label>
		<Select
			id="toDropdown"
			isSearchable={false}
			options={options}
			defaultValue={options[0]}
			onChange={(selectedOption) => {
				setToValue(selectedOption?.value)
				if (!fromValue || !selectedOption?.value) {
					return
				}
				const result = convert(textBoxValue, fromValue, selectedOption?.value)
				setResultText(result)
			}}
		/>
	</div>

	return (
		<main style={{ textAlign: 'center', padding: '20px' }}>
			<h1>Abjad Converter</h1>
			{FromSelect()}
			<OnScreenKeyboard
				letters={fromValue ? getLetters(fromValue) : []}
				onClickLetter={(letter) => {
					const newTextBoxValue = textBoxValue + letter
					setTextBoxValue(newTextBoxValue)
					if (!fromValue || !toValue) {
						return
					}
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
					if (!fromValue || !toValue) {
						return
					}
					const result = convert(newTextBoxValue, fromValue, toValue)
					setResultText(result)
				}}
			/>
			{ToSelect()}
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
					if (!fromValue || !toValue) {
						return
					}
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
			</div>
			<hr/>
			<div style={{ marginTop: '20px', fontSize: '22px' }}>
				This is an open source project. based on npm package{' '}
				<a href="https://www.npmjs.com/package/abjad-convert" style={{ textDecoration: 'none' }}>
					<Image src="/images/Npm-logo.svg" alt="NPM" width={54} height={21}
						 style={{ width: '54px', height: '21px' }}/>
					{' '}abjad-convert
				</a>
				<br/>
				You can find the source code on{' '}
				<a href="https://www.github.com/amerharb/abjad" style={{ textDecoration: 'none' }}>
					<Image src="/images/Github-logo.svg" alt="GitHub" width={32}
						   height={32}
						   style={{ width: '32px', height: '32px' }}/>
					{' '}GitHub
				</a>
				<br/>
				You welcome to contribute to the project.
			</div>
			<div style={{ marginTop: '25px', fontSize: '22px' }}>
				<a href="mailto:abjad@amerharb.com" style={{ textDecoration: 'none' }}>✉️ Email</a>
			</div>
		</main>
	)
}
