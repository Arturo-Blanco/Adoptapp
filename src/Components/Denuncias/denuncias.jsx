import FormularioDenuncias from '../Formularios/FormularioDenuncia';
import './denuncias.css';

const Denuncias = () => {
    return(
       <div>
        <h2>Denuncias y/o comentarios</h2>
        <div className='donContainer'>
                   <div className='donDiv1'>
                       <h3 className='denH3'> ¿Queres comentar o denunciar algo? Aqui te ofrecemos un espacio </h3>
                       <p className='denP'>Comunicar es la mejor manera de visualizar una realidad y aca tenes la libertad para hacerlo </p>
                       <a className='denA' href="#!">Ingresa Aqui</a>
                    </div>                
                    <div className='denDiv2'>
                    </div>    
              </div>
        <div className='containerDenuncia'>
            <FormularioDenuncias></FormularioDenuncias>
        </div>
            
       </div>
    )
};
export default Denuncias;