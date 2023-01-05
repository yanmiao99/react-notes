import data from "../mock/data"
import "../css/list.css"
import {Link} from "react-router-dom";

const List = () => {

    return (
        <>
            <div className="list">
                {
                    data.map(item => {
                        return (
                            <div className="item" key={item.id}>
                                <span>{item.name}</span>
                                <Link to={`/list/${item.id}`}>
                                    了解更多
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default List
