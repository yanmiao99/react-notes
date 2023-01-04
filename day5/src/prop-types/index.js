import List from "./list"
import {useState} from "react";

const Index = () => {
    const [name, setName] = useState('李四');
    return (
        <div>
            <List name={name} setName={setName}></List>
            <button onClick={() => setName('王五')}>点击变成王五</button>
        </div>
    )
}

export default Index
