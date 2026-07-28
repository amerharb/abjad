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
				className="key"
				title={letter}
				style={{ marginLeft: '1px', fontSize: '18px' }}
				onClick={() => onClickLetter(letter)}>
				{letter}
			</button>)
		}
		<button
			key={`btn_space`}
			className="key key-special"
			title="Space"
			style={{ marginLeft: '10px' }}
			onClick={() => onClickLetter(' ')}>␣
		</button>
		<button
			key={`btn_backSpace`}
			className="key key-special"
			title="Backspace"
			style={{ marginLeft: '2px' }}
			onClick={onBackSpace}>&#x232B;
		</button>
		<button
			key={`btn_clearAll`}
			className="key key-special"
			title="Clear all"
			style={{ marginLeft: '2px' }}
			onClick={onClearAll}>❌
		</button>
	</div>
}

export default OnScreenKeyboard
