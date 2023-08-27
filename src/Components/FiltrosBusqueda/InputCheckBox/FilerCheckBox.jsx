
const InputCheckbox = (props) => {
    return (
        <>
        <label className="filter-label" htmlFor={props.value}>
            <input className="filter-checkbox" type="checkbox" value={props.value} name={props.name} onChange={props.onChange}/>
        {props.text}
        </label>
        </>
    )
}
export default InputCheckbox;