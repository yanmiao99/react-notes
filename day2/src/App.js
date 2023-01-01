import React from 'react';
import Basics from "./hooks/basics";
import ArrayList from "./hooks/array-list"
import ObjectData from "./hooks/object-data";
import "./app.css"
import List from "./list/list"

function App() {
    return (
        <div className="App">
            <List>List Demo</List>
            <h3>基础</h3>
            <Basics></Basics>
            <h3>数据类型</h3>
            <ArrayList></ArrayList>
            <h3>对象类型</h3>
            <ObjectData></ObjectData>
        </div>
    )
}

export default App;
