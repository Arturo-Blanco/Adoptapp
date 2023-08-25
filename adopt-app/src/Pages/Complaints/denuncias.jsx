import FormularioDenuncias from '../../Components/Formularios/FormularioDenuncia';
import './denuncias.css';

const Denuncias = () => {
    return(
       <div>
        <h2>Denuncias y/o comentarios</h2>
        <div className='containerDenuncia'>
            <FormularioDenuncias></FormularioDenuncias>
        </div>
            
       </div>
    )
};
export default Denuncias;