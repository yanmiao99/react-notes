import "./search-box.css"

const SearchBox = (props) => {
    const searchImg = require("./images/search.png")
    let {setSearchText} = props

    const handleSearchItem = (e) => {
        let value = e.target.value
        setSearchText(value)
    }

    return (
        <div className="search-box">
            <img src={searchImg} alt=""/>
            <input type="text" placeholder='请输入名称进行搜索' onInput={handleSearchItem}/>
        </div>
    )
}
export default SearchBox
