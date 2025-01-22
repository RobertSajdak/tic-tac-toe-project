const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

// Komponent z dynamicznym wyświetlaniem siatki pól do gry.
export default function GameBoard({ onSelectSquare, turns }) {
	let gameBoard = initialGameBoard;

	for (const turn of turns) {
		const { square, player } = turn;
		const { row, col } = square;

		gameBoard[row][col] = player;
	}

	// Celem hook'a "useState" tutaj jest zarządzanie stanem i aktualizowanie stanu planszy gry.
	// const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// function handleSelectSquare(rowIndex, colIndex) {
	// 	setGameBoard(prevGameBoard => {
	// 		const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
	// 		updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
	// 		return updatedBoard;
	// 	});

	// 	onSelectSquare();
	// }

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button
									onClick={() => onSelectSquare(rowIndex, colIndex)}
									disabled={playerSymbol !== null}
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
