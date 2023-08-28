const TextInput = ({id, label,type,placeholder,name,value,onChange}) =>{

    return(
        <div className='grupoInput'>
            <label className="label" htmlFor={id}>{label}</label>
                <input className='form-input' type={type} placeholder={placeholder} id={id} name={name} value={value} onChange={onChange} required
                />
        </div>
    );
}

export default TextInput;