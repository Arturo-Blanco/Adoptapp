import './Formularios.css';

const ComponenteInput = (props) =>{
    const {id,className, label,type,placeholder,name,value,onChange} = props;
    return(
        <div className='grupoInput'>
            <label className="label" htmlFor={id}>{label}</label>
                <input className={`${className}-input`} type={type} placeholder={placeholder} id={id} name={name} value={value} onChange={onChange} required
                />
        </div>
    );
}

export default ComponenteInput;