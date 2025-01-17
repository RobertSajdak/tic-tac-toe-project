import { useState } from 'react';

// Komponent gracza.
export default function Player({ name, symbol }) {
	const [isEditing, setIsEditing] = useState(false);

	// Funkcja obsługi kliknięcia.
	// Dobra praktyka i rekomendacja React:
	// Podczas aktualizacji stanu komponentu w oparciu o poprzednią wartość tego stanu, przekazuję funkcję
	// jako argument do funkcji aktualizującej stan, zamiast nową wartość stanu, który chcę otrzymać po kliknięciu.
	// Funkcja strzałkowa (arrow function) zostanie wywołana w React i automatycznie zaczyta aktualną wartość stanu.
	function handleEditClick() {
		setIsEditing((editing) => !editing);
	}

	let playerName = <span className="player-name">{name}</span>;
	let btnCaption = "Edit";

	if (isEditing) {
		playerName = <input type="text" required value={name}/>;
		btnCaption = "Save";
	}

	return (
		<li>
			<span className="player">
				{playerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{btnCaption}</button>
		</li>
	);
}
