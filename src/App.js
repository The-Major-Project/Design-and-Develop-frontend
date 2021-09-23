import { BrowserRouter as Router } from "react-router-dom";
import { DNDContextProvider } from "./context/DNDContext";
import Routes from "./Routes/Routes";

function App() {
	return (
		<DNDContextProvider>
			<Router>
				<Routes />
			</Router>
		</DNDContextProvider>
	);
}

export default App;
