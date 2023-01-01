import {useState} from "react";
import TypeFilter from "./type-filter";
import ListBox from "./list-box";
import SearchBox from "./search-box"
import "./list.css"

const List = (props) => {

    let [typeActive, setTypeActive] = useState({type: 'all'})
    let [searchText, setSearchText] = useState('')

    let {children} = props

    return (
        <main className='main-box'>
            <div className="box">
                <h3>{children}</h3>
                {/*
                react 函数组件传参 父传子，子传父
                参考 : https://www.jianshu.com/p/26a83ddb38c5
                */}
                <TypeFilter typeActive={typeActive} setTypeActive={setTypeActive}/>
                <SearchBox setSearchText={setSearchText}/>
                <ListBox typeActive={typeActive} searchText={searchText}/>
            </div>
        </main>
    )
}

export default List


