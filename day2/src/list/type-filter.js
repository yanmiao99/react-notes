import "./type-filter.css"

const TypeFilter = (props) => {

    // let [listActive, setActive] = useState()

    // 注意点 :
    // jsx 中引入图片要么使用 import 要么使用 require
    // 如果使用 require 在 jsx 中使用表达式则必须要在后面加上 default
    // 参考 https://blog.csdn.net/weixin_48850734/article/details/124937524
    const listData = [
        {
            id: crypto.randomUUID(),
            text: '全部',
            type: 'all'
        },
        {
            id: crypto.randomUUID(),
            text: '电脑',
            type: 'computer'
        },
        {
            id: crypto.randomUUID(),
            text: '手机',
            type: 'phone'
        },
        {
            id: crypto.randomUUID(),
            text: 'like',
            type: 'like',
            img: require('./images/star.png'),
            activeImg: require('./images/star-fill.png'),
        },
    ]

    const handleSelectType = (item) => {
        // setActive(index)
        // console.log(item);
        props.setTypeActive(item)
    }

    return (
        <ul className="filter-box">
            {
                listData.map(item => {
                    return (
                        <li
                            key={item.id}
                            className={props.typeActive.type === item.type ? 'active' : ''}
                            onClick={() => handleSelectType(item)}>
                            {
                                /*
                                * jsx map 中不能使用 if 作为条件判断
                                * 可以使用三元表达式
                                * 参考 : https://blog.csdn.net/weixin_42519137/article/details/98357205
                                * */
                                item.img
                                    ? <img src={props.typeActive.type === 'like' ? item.activeImg : item.img} alt="星星"/>
                                    : <span>{item.text}</span>
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TypeFilter
