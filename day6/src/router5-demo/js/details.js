import {useParams, Link} from "react-router-dom";
import {useState, useEffect} from "react";
import data from "../mock/data"

const Details = () => {
    const [name, setName] = useState('');

    let {id} = useParams()


    useEffect(() => {
        let obj = data.find(item => item.id === id)
        setName(obj.name)
        // 该行注释可以注释掉 useEffect 调用外部变量导致的警告 ⚠️
        // 参考链接🔗 https://www.jb51.net/article/268969.htm
        // 一定要写在这个位置

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])  // 这里如果直接写了你要传递过来的值, 也能实现不被警告

    return (
        <>
            <h4>Details</h4>
            <p>{name}</p>
            <button>
                <Link to='/'>返回</Link>
            </button>
        </>
    )
}

export default Details
