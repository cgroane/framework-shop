import React from "react";

import "./App.css";
import router from './../router.js';

import Nav from "./Nav/Nav";

export function App( { children } ) {
	return (
		<div className="app">
			<Nav />
			<div id="App__routerContainer">
				{router}
			</div>
		</div>
	);
}

export default App;
