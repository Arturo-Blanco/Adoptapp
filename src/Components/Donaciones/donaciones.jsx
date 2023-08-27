import './donaciones.css';

const Donaciones = () => {
    return (
        <div>
            <h2>Donaciones</h2>
              <div className='donContainer'>
                   <div className='donDiv1'>
                       <h3 className='donH3'> ¿Queres colaborar? Aqui te ofrecemos un espacio </h3>
                       <p className='donP'>Cualquier colaboracion que ayude mientras esperan ser adoptados, es bienvenido</p>
                       <a className='donA' href="#!">Ingresa Aqui</a>
                    </div>                
                    <div className='donDiv2'>
                    </div>    
              </div>
        </div>
    )
};

export default Donaciones;