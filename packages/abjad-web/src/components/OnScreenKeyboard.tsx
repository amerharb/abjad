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
			style={{ marginLeft: '10px', backgroundColor: 'lightsteelblue' }}
			onClick={() => onClickLetter(' ')}>␣
		</button>
		<button
			key={`btn_backSpace`}
			style={{ marginLeft: '2px', backgroundColor: 'lightsteelblue' }}
			onClick={onBackSpace}>&#x232B;
		</button>
		<button
			key={`btn_clearAll`}
			style={{ marginLeft: '2px', backgroundColor: 'lightsteelblue' }}
			onClick={onClearAll}>❌
		</button>
	</div>
}

export default OnScreenKeyboard
