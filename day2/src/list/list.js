import react, {useState} from "react";
import TypeFilter from "./type-filter";
import ListBox from "./list-box";
import SearchBox from "./search-box"
import "./list.css"

const List = () => {

    let [typeActive, setTypeActive] = useState({type: 'all'})

    return (
        <main className='main-box'>
            <h3>List Demo</h3>
            <div className="box">
                <TypeFilter typeActive={typeActive} setTypeActive={setTypeActive}></TypeFilter>
                <SearchBox></SearchBox>
                <ListBox typeActive={typeActive}></ListBox>
            </div>
        </main>
    )
}

export default List


