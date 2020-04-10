import React, { createContext, useState } from 'react';

import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Aside from './component/Aside';

export const OpenContext = createContext();

function App() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<OpenContext.Provider value={[open, setOpen]}>
				<Header />
				<Aside />
			</OpenContext.Provider>

			<Main />
			<Footer />
		</>
	);
}

export default App;
