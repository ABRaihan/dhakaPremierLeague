import React from 'react';
import classes from './PlayerBio.module.css';
const PlayerBio = (props) => {
	const {
		name,
		age,
		playingRole,
		battingStyle,
		transferFee,
		bowlingStyle,
		fieldingPosition,
	} = props.player;
	return (
		<div className={classes.playerDetails}>
			<h4 style={{fontWeight: 'bold', fontSize: '23px'}} className={classes.text}>{name}</h4><br />
			<p className={classes.text}>Age: {age}</p><br />
			<p className={classes.text}>Playing Role: {playingRole}</p><br />
			<p className={classes.text}>Batting Style: {battingStyle}</p><br />
			{bowlingStyle && <p className={classes.text}>Bowling Style: {bowlingStyle}</p>}
			{fieldingPosition && <p className={classes.text}>Fielding Position: {fieldingPosition}</p>}
			<p className={classes.text}>Transfer Fee: {transferFee} Tk</p><br />
			{
				props.showButton || <button onClick={props.handleSelectedPlayer.bind(null, props.player)}  className={classes.selectBtn}>Select</button>
			}
		</div>
	);
};

export default PlayerBio;
