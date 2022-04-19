import { ElementType, StrictMode } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "styles/index.css";
import { registerSW } from "virtual:pwa-register";
import App from "./src/pages/Home";
import ErrorBoundary from "./src/runtime/ErrorBoundry";

if ("serviceWorker" in navigator && !/localhost/.test(window.location.toString())) registerSW({
	immediate: true
});

export const queryClient = new QueryClient;

export type Page = { default: ElementType, path: string, caseSensitive?: boolean };
const pages = import.meta.globEager<Page>("./src/pages/*.tsx");

ReactDOM.render(
	<StrictMode>
		<ErrorBoundary>
			<QueryClientProvider client={ queryClient }>
				<App/>
				{ !PRODUCTION && <ReactQueryDevtools/> }
			</QueryClientProvider>
		</ErrorBoundary>
	</StrictMode>,
	document.getElementById("root")
);
