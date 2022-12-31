import react, {useState} from "react";
import FilterList from "./filter-list";
import ListBox from "./list-box";
import SearchBox from "./search-box"
import "./list.css"

const List = () => {
    return (
        <main className='main-box'>
            <h3>List Demo</h3>
            <div className="box">
                <FilterList></FilterList>
                <SearchBox></SearchBox>
                <ListBox></ListBox>
            </div>
        </main>
    )
}

export default List


