import React from "react";

//components
import Page from "./containers/Page";

//styles
import "./styles/App.css";

function App() {
	return (
		<div className="App">
			<header className="Header" />
			<div className="Container">
				<div className="Lateral-Menu" />
				<div className="Content">
					<Page />
				</div>
			</div>
		</div>
	);
}

export default App;
