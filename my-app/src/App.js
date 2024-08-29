import logo from "./logo.svg";
import "./App.css";

// декларативный
export const App = () => {
	const date = new Date();
	// императивный
	const showTime =
		date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	// декларативный
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<div className="App">
				<h1 align="center">Текущее время</h1>
				<h2 align="center"> {showTime}</h2>
			</div>
		</div>
	);
};
