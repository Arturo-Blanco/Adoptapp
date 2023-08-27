import { Link } from "react-router-dom";
import ContentBlock from "../../Blocks/ContentBlock/ContentBlock";
import './homeQuestions.css'

const HomeQuestions = () => {
    return (
        <div className='questions-container'>
            <ContentBlock
                className="questions"
                title="¿Por qué adoptar?"
                url="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/02/08/16443364419282.jpg"
           />
           <Link to={"/Razones"}>Ver mas</Link>
        </div>
    )
}
export default HomeQuestions;