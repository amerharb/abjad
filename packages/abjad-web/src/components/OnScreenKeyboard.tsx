import { FC } from 'react'

type Props = {
	letters: readonly string[];
	onClickLetter: (letter: string) => void;
	onBackSpace: () => void;
	onClearAll: () => void;
};

const OnScreenKeyboard: FC<Props> = ({ letters, onClickLetter, onBackSpace, onClearAll }) => {
	return <div>
		{letters.map((letter, index) =>
			<button
				key={`btn_letter${index}`}
				style={{ marginLeft: '1px', fontSize: '18px' }}
				onClick={() => onClickLetter(letter)}>
				{letter}
			</button>)
		}
		<button
			key={`btn_space`}
			style={{ marginLeft: '10px', backgroundColor: 'var(--key-special-bg)' }}
			onClick={() => onClickLetter(' ')}>␣
		</button>
		<button
			key={`btn_backSpace`}
			style={{ marginLeft: '2px', backgroundColor: 'var(--key-special-bg)' }}
			onClick={onBackSpace}>&#x232B;
		</button>
		<button
			key={`btn_clearAll`}
			style={{ marginLeft: '2px', backgroundColor: 'var(--key-special-bg)' }}
			onClick={onClearAll}>❌
		</button>
	</div>
}

export default OnScreenKeyboard
