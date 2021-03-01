import React from 'react';
import classes from './PlayerImg.module.css';
const PlayerImg = (props) => {
    const { name, img } = props.player;
    return (
        <div className={classes.playerImg}>
            <img src={img} alt={name}/>
        </div>
    );
};

export default PlayerImg;