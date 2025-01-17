import { useState } from 'react';

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

// Komponent z dynamicznym wyświetlaniem siatki pól do gry.
export default function GameBoard() {
	// Celem hook'a "useState" tutaj jest zarządzanie stanem i aktualizowanie stanu planszy gry.
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	function handleSelectSquare(rowIndex, colIndex) {
		setGameBoard(prevGameBoard => {
			const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
			updatedBoard[rowIndex][colIndex] = 'X';
			return updatedBoard;
		});
	}

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
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
