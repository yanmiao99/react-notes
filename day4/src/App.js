import './App.css';
import Ref from "./useRef/Basics"
import Reducer from "./useReducer/index"
import CountReducer from "./useReducer/count"
import Content from "./useContext";

function App() {
    return (
        <div className="App">
            <Ref/>
            <hr/>
            <Reducer/>
            <hr/>
            <CountReducer/>
            <hr/>
            <Content/>
        </div>
    );
}

export default App;
