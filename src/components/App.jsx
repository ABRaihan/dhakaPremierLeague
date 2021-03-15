import React from 'react';
import Header from './Header/Header';
import Players from './Players/Players';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TeamPlayer from './TeamPlayer/TeamPlayer';
import {UserDataProvider} from './DataContext/UserData';


const App = () => {
	return (
		<UserDataProvider>
			<div className='container-fluid py-5'>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path='/'>
							<Players />
						</Route>
						<Route path='/teamPlayers'>
							<TeamPlayer />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		</UserDataProvider>
	);
};

export default App;
