import react, {useState} from "react";
import TypeFilter from "./type-filter";
import ListBox from "./list-box";
import SearchBox from "./search-box"
import "./list.css"

const List = () => {
    return (
        <main className='main-box'>
            <h3>List Demo</h3>
            <div className="box">
                <TypeFilter></TypeFilter>
                <SearchBox></SearchBox>
                <ListBox></ListBox>
            </div>
        </main>
    )
}

export default List


