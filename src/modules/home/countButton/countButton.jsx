import {useState} from "react";

const CountButton =() => {
	const [state, setState] = useState(0)

	return <div>
		<h1 className="count-button-label">This is a count button made with react</h1>
		<button className="count-button" onClick={() => setState(state + 1)}>Count is: {state}</button>
	</div>
}

export default CountButton;