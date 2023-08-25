
const InputCheckbox = (props) => {
    const {name, value, id, text, checked, onChange } = props;
    return (
        <>
        <label className="filter-label" htmlFor={id}>
            <input className="filter-checkbox" type="checkbox" id={`${name}${value}`} checked={checked} value={value} name={name} onChange={onChange}/>
        {text}
        </label>
        </>
    )
}
export default InputCheckbox;