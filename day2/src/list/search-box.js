import react, {useState} from "react";
import "./search-box.css"

const searchBox = () => {
    const searchImg = require("./images/search.png")
    return (
        <div className="search-box">
            <img src={searchImg} alt=""/>
            <input type="text" placeholder='请输入名称进行搜索'/>
        </div>
    )
}
export default searchBox
