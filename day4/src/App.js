import './App.css';
import Ref from "./useRef/Basics"
import Reducer from "./useReducer/index"
import CountReducer from "./useReducer/count"

function App() {
    return (
        <div className="App">
            <Ref/>
            <hr/>
            <Reducer/>
            <hr/>
            <CountReducer/>
        </div>
    );
}

export default App;
