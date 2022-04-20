import { useParams } from "react-router-dom";
import Advice from "../components/Advice";

export const path = "/:id";

export default function App() {
	return (
		<div className="bg-darkblue w-full h-full grid fixed justify-center items-center">
			<Advice id={ parseInt(useParams().id!) }/>
		</div>
	);
}
