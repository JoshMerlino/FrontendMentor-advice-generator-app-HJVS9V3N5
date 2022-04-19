import classnames from "classnames";
import { useEffect, useState } from "react";
import { BsDice5Fill, BsPauseFill } from "react-icons/bs";

export default function Advice(): JSX.Element {

	// Initialize state
	const id = 0;
	const advice = "";
	const [ state, setState ] = useState({ advice, id });
	const [ disabled, setDisabled ] = useState(false);
	const [ spinning, setSpinning ] = useState(false);

	// Fetch new state from API
	function fetchState() {
		setSpinning(true);
		setDisabled(true);
		setTimeout(() => setSpinning(false), 500);
		fetch("https://api.adviceslip.com/advice")
			.then(resp => resp.json())
			.then(data => {
				setState(data.slip);
				setTimeout(() => setDisabled(false), 2000);
			});
	}

	// On mount, fetch initial state
	useEffect(fetchState, []);

	// Return card
	return (
		<div className="bg-darkgrayishblue shadow-2xl rounded-3xl p-12 text-center mx-auto pb-0" style={ { maxWidth: "clamp(0px, 532px, 100%)"} }>
			<p className="text-neongreen uppercase text-xs tracking-[4px]">Advice #{ state.id.toString().padStart(3, "0") }</p>
			<p className="mt-8 text-3xl text-lightcyan">&ldquo;{ state.advice }&rdquo;</p>
			<div className="border-t-[1px] border-lightcyan/10 mt-12 mb-8">
				<div className="bg-darkgrayishblue flex -mt-4 w-12 mx-auto justify-center">
					<BsPauseFill className="text-lightcyan text-3xl"/>
				</div>
			</div>
			<button disabled={ disabled } className="bg-neongreen disabled:bg-gray-600 disabled:pointer-events-none disabled:shadow-none disabled:text-white disabled rounded-full p-5 -mt-8 transition-all" style={ { transform: "translateY(32px)" } } onClick={ fetchState }>
				<BsDice5Fill className={ classnames("text-darkblue text-2xl", spinning && "spinning") }/>
			</button>
		</div>
	);
}