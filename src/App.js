import { Provider } from "react-redux";
import "./App.css";
import Dashboard from "./components/Dashboard";
import store from "./utils/reduxStore";

function App() {
  return (
    <>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </>
  );
}

export default App;
