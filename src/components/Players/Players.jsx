import React, { useContext } from 'react';
import Player from '../Player/Player';
import CartPlayer from '../CartPlayer/CartPlayer';
import { DataContext } from '../DataContext/UserData';
const Players = () => {
	const [players, selectedPlayer, setSelectedPlayer] = useContext(DataContext);

	players.sort((a, b) => b.transferFee - a.transferFee);
	const handleSelectedPlayer = (player) => {
		if (!selectedPlayer.includes(player)) {
			setSelectedPlayer([...selectedPlayer, player]);
		} else alert('This Player Already Selected');
	};

	return (
		<div className='container'>
			<div className='row mt-5'>
				{players.map((player, index) => (
					<Player
						key={index}
						player={player}
						handleSelectedPlayer={handleSelectedPlayer}
					/>
				))}
			</div>
			<CartPlayer selectedPlayer={selectedPlayer} />
		</div>
	);
};

export default Players;