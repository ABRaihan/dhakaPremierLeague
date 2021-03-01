import React from 'react';
import Header from './Header/Header';
import Players from './Players/Players';
const App = () => {
	return (
        <div className='container-fluid py-5'>
            <Header/>
            <Players />
		</div>
	);
};

export default App;
