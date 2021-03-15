import React, { useContext } from 'react';
import {
	faHandHoldingUsd,
	faTimes,
	faUser,
	faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './CartPlayer.module.css';
import { DataContext } from '../DataContext/UserData';

const CartPlayer = (props) => {
	const [, selectedPlayer, setSelectedPlayer] = useContext(DataContext);
	selectedPlayer.sort((a, b) => b.transferFee - a.transferFee );
	const totalFee = selectedPlayer.reduce(
		(prev, next) => prev + next.transferFee,
		0
	);
	const removePlayer = (playerName) => {
		let playerIndex;
		selectedPlayer.forEach((player, index) => {
			if (player.name === playerName) playerIndex = index;
		})
		let newPlayer = Array.from(selectedPlayer)
		newPlayer.splice(playerIndex, 1);
		setSelectedPlayer(newPlayer)

	}
	const iconStyle = {
		marginRight: '10px',
		color: 'black',
	};
	return (
		<div className={classes.selectedPlayer}>
			<div className={classes.playerCart}>
				<p>
					<FontAwesomeIcon style={iconStyle} icon={faUserPlus} />{' '}
					Selected Player: {selectedPlayer.length}
				</p>
				<p>
					<FontAwesomeIcon
						style={iconStyle}
						icon={faHandHoldingUsd}
					/>
					Total Transfer Fee: {totalFee} Tk
				</p>
			</div>
			<div className={classes.selectedPlayersName}>
				<h3>Team Players:</h3>
				<ul>
					{selectedPlayer.map((player, index) => (
						<li key={index}>
							<FontAwesomeIcon style={iconStyle} icon={faUser} />{' '}
							{player.name} <FontAwesomeIcon onClick={removePlayer.bind(null, player.name)} style={{color: 'black', marginLeft: '20px', cursor: 'pointer'}} icon={ faTimes }/>
						</li>
					))}
				</ul>
			</div>
			{props.showButton || (
				<div className={classes.showTeam}>
					<Button as={Link} to='/teamPlayers'>
						Show Your Team
					</Button>
				</div>
			)}
		</div>
	);
};

export default CartPlayer;
