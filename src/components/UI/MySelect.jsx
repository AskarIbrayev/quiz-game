
export default function({value, title, onChange, options, defaultValue}) {
    return (
        <div style={{textAlign: "left"}}>
            <select value={value}  onChange={onChange} style={{minWidth: "5rem", marginRight: ".5rem"}}>
                {/* <option disabled value={defaultValue}></option> */}
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.name}</option>
                    
                })}
            </select>
            <span>{title}</span>
        </div>
    )
}