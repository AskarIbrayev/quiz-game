
import cl from "./MySelect.module.css"
export default function({value, title, onChange, options, defaultValue}) {
    return (
        <div className={cl.mySelect}>
            <span>{title}</span>
            <select value={value}  onChange={onChange} className={cl.selectItem}>
                {/* <option disabled value={defaultValue}></option> */}
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.name}</option>
                })}
            </select>
        </div>
    )
}