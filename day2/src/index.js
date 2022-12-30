import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /*
        识别不安全的生命周期
        关于使用过时字符串 ref API 的警告
        关于使用废弃的 findDOMNode 方法的警告
        检测意外的副作用
        检测过时的 context API
    */
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

