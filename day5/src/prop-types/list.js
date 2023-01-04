import PropTypes from "prop-types";

const List = ({name, setName}) => {
    return (
        <>
            <p>{name}</p>
            <button onClick={() => setName('张三')}>点击变成张三</button>
        </>
    )
}

// 类型检测 (类似 vue props)
List.propTypes = {
    name: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired,
    // object , array , number  类型
    // isRequired 是否必填
}

// 类型默认值 (给了默认值的情况下, isRequired 就不会生效了 )
List.defaultProps = {
    // name: '默认名称',
    // 方法无需给默认的
}

export default List
