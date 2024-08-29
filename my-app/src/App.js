import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";

export const App = () => {
	const date = new Date();
	const showTime =
		date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	return (
		createElement("div", { className: "App" }),
		createElement("header", { className: "App-header" }),
		createElement("img", {
			src: logo,
			className: "App-logo",
			alt: "logo",
		}),
		createElement(
			"p",
			null,
			"Edit",
			createElement("code", null, "src/App.js"),
			"and save to reload.",
		),
		createElement(
			"a",
			{
				className: "App-link",
				href: "https://reactjs.org",
				target: "_blank",
				rel: "noopener noreferrer",
			},
			"Learn React",
		),
		createElement(
			"div",
			{
				className: "App",
			},
			"h1",
			{
				align: "center",
			},
			"Current time",
		),
		createElement(
			"h2",
			{
				align: "center",
			},
			" ",
			showTime,
		)
	);
};
