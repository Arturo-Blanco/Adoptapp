import ContentBlock from "../../Blocks/ContentBlock/ContentBlock";
import './homeRequirement.css'

const HomeRequirement = () => {
    return (
        <div className='requirement-container'>
            <ContentBlock
                className="requirement"
                title="¿Buscando un nuevo compañero?"
                url="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/02/08/16443364419282.jpg"
            >
                <p className="requirement-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime provident ipsa magni ducimus quod? Necessitatibus molestias suscipit, aperiam sit, amet maxime hic cum saepe iste doloribus consectetur voluptatem adipisci illo!</p>
                </ContentBlock>
        </div>
    )
}
export default HomeRequirement;