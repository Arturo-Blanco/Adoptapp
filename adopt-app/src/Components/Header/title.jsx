import './header.css'

const ComponenteTitle = (props) =>{
    return(
        <>
        <div className='container-title'>
            <div className="div-container-title">
                <h3 className="title-adopciones">{props.h3}</h3>
            </div>
        </div>
        </>
    );
}

export default ComponenteTitle;