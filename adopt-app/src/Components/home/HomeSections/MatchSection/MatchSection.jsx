import TitleBlock from '../../../Blocks/TitleBlock/TitleBlock';
import ContentBlock from '../../../Blocks/ContentBlock/ContentBlock';
import SectionStructure from '../SectionStructure/SectionStructure';

const MatchSection = () => {
    return (
        <SectionStructure
        className='match'>
            <TitleBlock 
            title='Ya hicieron match'/>
            <ContentBlock
            className="match"
            title="¿Buscando un nuevo compañero?"
            url="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/02/08/16443364419282.jpg"/>
        </SectionStructure>
    )
}
export default MatchSection;