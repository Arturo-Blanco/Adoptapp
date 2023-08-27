import './inputCheckbox.css';

const InputCheckbox = (props) => {
    const {name, value, id, text, type, checked, onChange } = props;
    return (
        <>
        <label className="filter-label" htmlFor={id}>
            <input className="filter-checkbox" type={type} id={`${name}${value}`} checked={checked} value={value} name={name} onChange={onChange}/>
        {text}
        </label>
        </>
    )
}
export default InputCheckbox;