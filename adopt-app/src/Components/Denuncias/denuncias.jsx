import FormularioDenuncias from '../Formularios/FormularioDenuncia';
import ComponenteTitle from '../Header/title';
import './denuncias.css';

const Denuncias = () => {
    return(
        <div>
        <ComponenteTitle
        h3="Denuncias y extraviados"/>
        <div className='containerDenuncia'>
            <FormularioDenuncias></FormularioDenuncias>
        </div>
            
        </div>
    )
};
export default Denuncias;