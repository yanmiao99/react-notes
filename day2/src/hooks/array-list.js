import React, {useState} from 'react';

import "./array-list.css"

let listData = [
    {id: 1, name: '张三'},
    {id: 2, name: '李四'},
    {id: 3, name: '王五'},
    {id: 4, name: '赵六'}
]

function NameList() {
    const [people, setPeople] = useState(listData)

    const handleDelItemPeople = (id) => {
        setPeople(people.filter(item => item.id !== id))
    }

    const handleDelAllData = () => {
        setPeople([])
    }

    return (
        <div className={'peopleList'}>
            {
                people.map((item) => {
                    const {id, name} = item
                    return (
                        <div className="list" key={id}>
                            <p>{name}</p>
                            <button onClick={() => handleDelItemPeople(id)}>删除</button>
                        </div>
                    )
                })
            }
            <button className={'clearAllData'} onClick={handleDelAllData}>清除所有的数据</button>
        </div>
    )
}

export default NameList;
