import { faHandHoldingUsd, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from './SelectedPlayer.module.css';
const SelectedPlayer = (props) => {
    const totalFee = props.selectedPlayer.reduce((prev, next) => prev + next.transferFee, 0);
    const iconStyle = {
        marginRight: '10px',
        color: 'black'
    }
	return (
		<div className={classes.selectedPlayer}>
			<div className={classes.playerCart}>
                <p><FontAwesomeIcon style={iconStyle} icon={faUserPlus}/> Selected Player: {props.selectedPlayer.length}</p>
                <p><FontAwesomeIcon style={iconStyle} icon={faHandHoldingUsd}/> Total Transfer Fee: {totalFee} Tk</p>
            </div>
            <div className={classes.selectedPlayersName}>
                <h3>Team Players:</h3>
                <ul>
                    {props.selectedPlayer.map((player, index) => <li key={index}><FontAwesomeIcon style={iconStyle} icon={faUser}/> {player.name}</li>)}
                </ul>
            </div>
		</div>
	);
};

export default SelectedPlayer;
