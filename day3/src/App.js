import './App.css';
import Basics from "./useEffect/basics";
import FormInput from "./form/index"
import FormOptimize from "./formOptimize/index"

function App() {
    return (
        <div className="App">
            <Basics/>
            <hr/>
            <FormInput/>
            <hr/>
            <FormOptimize/>
        </div>
    );
}

export default App;
