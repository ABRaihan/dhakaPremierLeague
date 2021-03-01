import React, { useEffect, useState } from 'react';
import playersData from '../../playerData/playerData.json';
import Player from '../Player/Player';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
const Players = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(playersData);
    },[])
	// this will sort the players with their Transfer Fee
	players.sort((a, b) => b.transferFee - a.transferFee);
	const [selectedPlayer, setSelectedPlayer] = useState([]);
    const handleSelectedPlayer = (player) => {
        if (!selectedPlayer.includes(player)) {
            setSelectedPlayer([...selectedPlayer, player]);
        } else
            alert('This Player Already Selected')
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
			<SelectedPlayer selectedPlayer={selectedPlayer} />
		</div>
	);
};

export default Players;
