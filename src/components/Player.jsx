import { useState } from 'react';

// Komponent gracza.
export default function Player({ initialName, symbol, isActive, onChangeName }) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	// Funkcja obsługi kliknięcia.
	// Dobra praktyka i rekomendacja React:
	// Podczas aktualizacji stanu komponentu w oparciu o poprzednią wartość tego stanu, przekazuję funkcję
	// jako argument do funkcji aktualizującej stan, zamiast nową wartość stanu, który chcę otrzymać po kliknięciu.
	// Funkcja strzałkowa (arrow function) zostanie wywołana w React i automatycznie zaczyta aktualną wartość stanu.
	function handleEditClick() {
		setIsEditing(editing => !editing);

		if (isEditing) {
			onChangeName(symbol, playerName);
		}
	}

	function handleChange(event) {
		setPlayerName(event.target.value);
	}

	let editablePlayerName = <span className="player-name">{playerName}</span>;
	let btnCaption = 'Edit';

	if (isEditing) {
		editablePlayerName = (
			<input type="text" required value={playerName} onChange={handleChange} />
		);
		btnCaption = 'Save';
	}

	return (
		<li className={isActive ? 'active' : undefined}>
			<span className="player">
				{editablePlayerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{btnCaption}</button>
		</li>
	);
}
