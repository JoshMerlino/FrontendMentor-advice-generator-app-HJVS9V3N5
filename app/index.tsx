import { ElementType, StrictMode } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "styles/index.css";
import { registerSW } from "virtual:pwa-register";
import { base } from "./manifest.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
				<BrowserRouter>
					<Routes>
						{ Object.values(pages).map((page, key) => <Route
							key={ key }
							path={ base + page.path.substring(1) }
							caseSensitive={ page.caseSensitive || false }
							element={ <page.default/> }/>
						) }
					</Routes>
					<div className="attribution fixed bottom-0 w-full text-center py-4 text-lightcyan">
						Challenge by <a className="text-neongreen" href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
						Coded by <a className="text-neongreen" href="https://joshmerlino.github.io/">JoshMerlino</a>.
					</div>
				</BrowserRouter>
				{ !PRODUCTION && <ReactQueryDevtools/> }
			</QueryClientProvider>
		</ErrorBoundary>
	</StrictMode>,
	document.getElementById("root")
);
