import React, { createContext, useEffect, useState } from 'react';
import playersData from '../../playerData/playerData.json';
let Context;
const {Provider, Consumer} = Context = createContext();
function UserData(props) {
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState([]);
    useEffect(() => setPlayers(playersData), []);
    return (
        <Provider value={[players, selectedPlayer, setSelectedPlayer]}>
            {props.children}
        </Provider>
    )
}

export {UserData as UserDataProvider, Consumer as UserDataConsumer, Context as DataContext}
