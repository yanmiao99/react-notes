import React, {useState} from 'react';

let objData = {
    id: crypto.randomUUID(),
    name: 'yan',
    message: '前端开发'
}

function Person() {
    const [person, setPerson] = useState(objData)

    const handleChangeMessage = () => {
        setPerson({
            ...person,
            message: '运维'
        })
    }

    return (
        <div className={'peopleList'}>
            <p>{person.id}</p>
            <p>{person.name}</p>
            <p>{person.message}</p>
            <button onClick={handleChangeMessage}>更改Message</button>
        </div>
    )
}

export default Person;
