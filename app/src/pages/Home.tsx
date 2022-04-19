import Advice from "../components/Advice";

export const path = "/";

export default function App() {
	return (
		<div className="bg-darkblue w-full h-full grid fixed justify-center items-center">
			<Advice/>
		</div>
	);
}
