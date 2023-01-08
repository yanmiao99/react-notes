import PropTypes from "prop-types";

/**
 * @param type 类型
 * @param name 名称
 * @param value 值
 * @param handleChange 更改的方法
 * @param labelText label名称
 * @returns {JSX.Element} 返回组件
 * @constructor
 */
function FormRow({type, name, value, handleChange, labelText}) {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>
            <input
                type={type}
                className="form-input"
                name={name}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

FormRow.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        // 多个类型的检测
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),
    handleChange: PropTypes.func.isRequired,
    labelText: PropTypes.string,
}

export default FormRow
