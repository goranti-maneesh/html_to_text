import "./App.css";
import { convert, compile } from "html-to-text";

function App() {

	const html = '<p>Hi Pullemla,</p><p>Your query is similar to this discussion. go through this <a href="https://learning.ccbp.in/discussions/7255ffe5-4b37-4e66-8b43-d8225af6093e" rel="noopener noreferrer" target="_blank">link</a>.</p><p><br></p><p>Feel free to reach out to us if you have any other questions. Mark the discussion as clarified if your issue is resolved.</p><p><br></p><p> Happy Learning!</p>';
	const text = convert(html, {
		wordwrap: 130,
	});
	console.log(text);

	return (
		<div className="Ap">
			<div>{text}</div>
		</div>
	);
}

export default App;
