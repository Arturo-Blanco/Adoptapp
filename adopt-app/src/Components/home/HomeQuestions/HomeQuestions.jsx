import ContentBlock from "../../Blocks/ContentBlock/ContentBlock";
import './homeQuestions.css'

const HomeQuestions = () => {
    return (
        <div className='questions-container'>
            <ContentBlock
                className="questions"
                title="¿Queres adoptar pero tenes dudas?"
                url="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/02/08/16443364419282.jpg"
            />
        </div>
    )
}
export default HomeQuestions;