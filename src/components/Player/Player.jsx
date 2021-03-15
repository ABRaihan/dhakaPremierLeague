import React from 'react';
import PlayerBio from '../PlayerBio/PlayerBio';
import PlayerImg from '../PlayerImg/PlayerImg';
import classes from './Player.module.css';
const Player = (props) => {
	return (
		<div className='col-4 mb-4'>
			<div className={classes.player}>
				<PlayerImg player={props.player} />
				<PlayerBio player={props.player} showButton={props.showButton} handleSelectedPlayer={props.handleSelectedPlayer}/>
			</div>
		</div>
	);
};

export default Player;
