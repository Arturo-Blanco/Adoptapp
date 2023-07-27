import './infoGral.css';

const InfoGral = () => {
    return(
        <div>
        <h2>Acá va la página de Información General</h2>
        <div className='row'>
                <div className='col-1'>
                </div>
                <div className='col-2'>
                    <h3 className='titulo-requisito'>Requisitos para adoptar</h3>
                    <div className='requisitos'>
                        <span className='count-punto'>1
                        </span>
                        <p className='texto-req'>Ser mayor de 18 años</p>
                    </div>
                    <div className='requisitos'>
                        <span className='count-punto'>2
                        </span>
                        <p className='texto-req'>Amar a las mascotas y poder dedicarle el tiempo que necesite.</p>
                    </div><div className='requisitos'>
                        <span className='count-punto'>3
                        </span>
                        <p className='texto-req'>Querer sumar un integrante a tu vida por el resto de la suya, sin importar los cambios que se presenten.</p>
                    </div><div className='requisitos'>
                        <span className='count-punto'>4
                        </span>
                        <p className='texto-req'>Comprometerse con el cuidado, la salud y la castración de la mascota.</p>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default InfoGral;