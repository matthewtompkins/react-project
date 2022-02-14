import './App.css';
import { ButtonContextProvider } from "./store/button-context";
import CountryButtonGame from './components/CountryButtonGame';


function App() {
  return (<ButtonContextProvider>
            <CountryButtonGame />
          </ButtonContextProvider>
  );
}

export default App;
