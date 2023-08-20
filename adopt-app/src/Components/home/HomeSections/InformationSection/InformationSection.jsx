import TitleBlock from "../../../Blocks/TitleBlock/TitleBlock";
import SectionStructure from "../SectionStructure/SectionStructure";
import ContentBlock from '../../../Blocks/ContentBlock/ContentBlock';

const InformationSection = () => {
    return (
        <SectionStructure
        className='information'>
            <TitleBlock 
            title='Información'/>
            <ContentBlock 
            className="information"
            title="¿Buscando un nuevo compañero?"
            url="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/02/08/16443364419282.jpg"/>
        </SectionStructure>
    )
}
export default InformationSection;