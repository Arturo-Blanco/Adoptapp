
const InputCheckbox = (props) => {
    const {name, value, id, text, onChange } = props;
    return (
        <>
        <label className="filter-label" htmlFor={id}>
            <input className="filter-checkbox" type="checkbox" id={`${name}${value}`}value={value} name={name} onChange={onChange}/>
        {text}
        </label>
        </>
    )
}
export default InputCheckbox;