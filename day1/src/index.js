import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

// 1. 需要渲染的数据
const bookListData = [
    {
        id: 1,
        cover: 'https://img12.360buyimg.com/n7/jfs/t1/200449/26/26534/138287/6327da95E163ebb46/dfda760e947a37c3.jpg',
        title: '日本原版 我所看到的未来 私が見た未来',
        author: '龙树谅',
        price: '85.00'
    },
    {
        id: 2,
        cover: 'https://img12.360buyimg.com/n1/s200x200_jfs/t1/195784/17/24062/240978/629886aaE9e525f99/13e9bc5f1b26d065.jpg',
        title: '复杂世界的简单原理（精装4册） 能源快',
        author: '龙树谅',
        price: '242.00'
    },
    {
        id: 3,
        cover: 'https://img13.360buyimg.com/n1/s200x200_jfs/t1/62559/28/21095/130012/632c1be7Ecf4243cf/d2d0a79290256840.jpg',
        title: '看文明：200个细节里的中国史 （米莱童',
        author: '龙树谅',
        price: '151.00'
    },
]

// 2. 创建结构
const BookList = () => {
    return (
        // 注意点 :
        //    1. 如果外面要包裹一层 div , 那么则必须要有 {}
        //    2. 如果外面不需要包裹一层 div , 那么则可以直接使用 map 进行循环
        //    3. 循环渲染必须使用 map

        <div className={'bookList'}>
            {
                bookListData.map(book => {
                    return <Book data={book} key={book.id}></Book>
                })
            }
        </div>
    )
}

// 3. 创建组件
const Book = (props) => {
    const {cover, title, author, price} = props.data
    return (
        <div className={'book'}>
            <img className={'cover'} src={cover} alt='封面'/>
            <h4 className={'title'}>{title}</h4>
            <p className={'author'}>{author}</p>
            <p className={'price'}>￥{price}</p>
            {/*
                注意点 :
                   1. 在 jsx 中 注释必须是 在 {} 中
                   2. 函数的点击如果不是箭头函数, 则会自执行 , 所以,如果不想自执行, 则需要用箭头函数
            */}
            <button onClick={() => handleBookPrice(price)}>获取价格</button>
        </div>
    )
}

// 4. 点击按钮触发的方法
const handleBookPrice = (price) => {
    alert('当前的价格是:' + price)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList></BookList>);

