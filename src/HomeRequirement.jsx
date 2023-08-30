import ContentBlock from "../../Blocks/ContentBlock/ContentBlock";
import './homeRequirement.css';
import { Link } from 'react-router-dom';

const HomeRequirement = () => {
    return (
        <div className='requirement-container'>
            <ContentBlock
                className="requirement"
                title="¿Buscando un nuevo compañero?"
                url="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/02/08/16443364419282.jpg"
            />

            <div className='infContainer'>
                <div className='infDiv1'>
                    <h3 className='infH3'>¿Por qué adoptar?</h3>
                    <p className='infP'>La importancia de adoptar tiene efectos positivos </p>
                    <Link to={"/Razones"}>Ver mas</Link>
                </div> 
                <div className="infDiv2"></div>
            </div>
            
        </div>
        
    )
}
export default HomeRequirement;