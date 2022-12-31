import react, {useState} from "react";
import "./filter-list.css"

const FilterList = () => {

    let [listActive, setActive] = useState(0)

    // 注意点 :
    // jsx 中引入图片要么使用 import 要么使用 require
    // 如果使用 require 在 jsx 中使用表达式则必须要在后面加上 default
    // 参考 https://blog.csdn.net/weixin_48850734/article/details/124937524
    const listData = [
        {
            id: crypto.randomUUID(),
            text: '全部',
        },
        {
            id: crypto.randomUUID(),
            text: '电脑',
        },
        {
            id: crypto.randomUUID(),
            text: '手机',
        },
        {
            id: crypto.randomUUID(),
            text: 'like',
            img: require('./images/star.png'),
            activeImg: require('./images/star-fill.png'),
        },
    ]

    const handleSelectType = (index) => {
        setActive(index)
    }

    return (
        <ul className="filter-box">
            {
                listData.map((item, index) => {
                    return (
                        <li
                            key={item.id}
                            className={listActive === index ? 'active' : ''}
                            onClick={() => handleSelectType(index)}
                        >
                            {
                                /*
                                * jsx map 中不能使用 if 作为条件判断
                                * 可以使用三元表达式
                                * 参考 : https://blog.csdn.net/weixin_42519137/article/details/98357205
                                * */
                                item.img
                                    ? <img src={listActive === 3 ? item.activeImg : item.img} alt="星星"/>
                                    : <span>{item.text}</span>
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default FilterList
