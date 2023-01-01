import {useState} from "react";
import "./list-box.css"
import data from "./list-data"

const like_false = require("./images/star.png")
const like_true = require("./images/like.png")
const no_data = require('./images/no-data.png')

const ListBox = (props) => {
    // 处理类型过滤数据
    let activeType = props.typeActive.type
    let newData
    if (activeType === 'all') {
        newData = data
    } else if (activeType === 'like') {
        newData = data.filter(item => item.like === true)
    } else {
        newData = data.filter(item => item.type === activeType)
    }

    // 处理搜索过滤数据
    let searchText = props.searchText
    if (searchText) {
        newData = data.filter(item => item.name.match(searchText))
    }

    /*
    * 注意点 :
    * useState可以只用来做数据更新
    * */
    let [listData, setListData] = useState(newData)
    const handleItemLike = (id) => {
        let index = listData.findIndex(item => item.id === id)
        listData[index].like = !listData[index].like
        setListData([...listData])
    }

    return (
        <div className="list-box">
            {
                newData.length > 0
                    ? <ListItem newData={newData} handleItemLike={handleItemLike}/>
                    : <NoData/>

            }
        </div>
    )
}

// 组件抽离
const ListItem = (props) => {
    let {newData, handleItemLike} = props
    return (
        newData.map((item) => {
            return (
                <div className="list-item" key={item.id} onClick={() => handleItemLike(item.id)}>
                    <div className="item-info">
                        <img src={item.img} alt="图片"/>
                        <p>{item.name}</p>
                    </div>
                    <div className="item-like">
                        <img src={item.like ? like_true : like_false} alt="like"/>
                    </div>
                </div>
            )
        })
    )
}

const NoData = () => {
    return (
        <div className='no-data'>
            <img src={no_data} alt=""/>
            <p>暂无数据</p>
        </div>
    )
}


export default ListBox
