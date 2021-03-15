import React, { useContext } from 'react';
import CartPlayer from '../CartPlayer/CartPlayer';
import Player from '../Player/Player';
import { DataContext } from '../DataContext/UserData';
function TeamPlayer() {
	const [, selectedPlayer] = useContext(DataContext);
	selectedPlayer.sort((a, b) => b.transferFee - a.transferFee);
	return (
		<div className='container'>
			<CartPlayer showButton={true} selectedPlayer={selectedPlayer} />
			<div className='row justify-content-center mt-5'>
				{selectedPlayer.map((player, index) => (
					<Player showButton={true} player={player} key={index} />
				))}
			</div>
		</div>
	);
}

export default TeamPlayer;