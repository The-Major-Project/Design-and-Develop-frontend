import { BrowserRouter as Router } from "react-router-dom";
import { DNDContextProvider } from "./context/DNDContext";
import Routes from "./Routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<DNDContextProvider>
			<Router>
				<Routes />
			</Router>
			<ToastContainer />
		</DNDContextProvider>
	);
}

export default App;
