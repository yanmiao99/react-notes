import react, {useState} from "react";
import "./list-box.css"

let data = [
    {
        id: crypto.randomUUID(),
        name: '小米笔记本 Pro 14 2021款',
        img: require("../list/images/computer/xiaomi.jpg"),
        type: 'computer',
        like: false
    },
    {
        id: crypto.randomUUID(),
        name: '戴尔XPS 15',
        img: require("../list/images/computer/daier.jpg"),
        type: 'computer',
        like: false
    },
    {
        id: crypto.randomUUID(),
        name: 'HUAWEI MateBook 14 2021款',
        img: require("../list/images/computer/huawei.jpg"),
        type: 'computer',
        like: false
    },
    {
        id: crypto.randomUUID(),
        name: '苹果Macbook Pro 14 2021',
        img: require("../list/images/computer/pingguo.jpg"),
        type: 'computer',
        like: false
    },
    {
        id: crypto.randomUUID(),
        name: 'vivo X Fold+',
        img: require("../list/images/phone/vivo.jpg"),
        type: 'phone',
        like: false
    },
    {
        id: crypto.randomUUID(),
        name: 'OPPO A11',
        img: require("../list/images/phone/oppo.jpg"),
        type: 'phone',
        like: false
    },
    {
        id: crypto.randomUUID(),
        name: 'Redmi K50 至尊版',
        img: require("../list/images/phone/redmi.jpg"),
        type: 'phone',
        like: false
    },
    {
        id: crypto.randomUUID(),
        name: 'moto S30 Pro',
        img: require("../list/images/phone/moto.jpg"),
        type: 'phone',
        like: false
    },
]

let like_false = require("./images/star.png")
let like_true = require("./images/like.png")

const ListBox = () => {
    let [listData, setListData] = useState(data)

    const handleItemLike = (id) => {
        let index = listData.findIndex(item => item.id === id)
        listData[index].like = !listData[index].like
        setListData([...listData])
    }

    return (
        <div className="list-box">
            {
                listData.map((item, index) => {
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
            }
        </div>
    )
}

export default ListBox
