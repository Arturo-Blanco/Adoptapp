import TitleBlock from '../../../Blocks/TitleBlock/TitleBlock';
import Card from '../../../Card/Card';
import SectionStructure from '../SectionStructure/SectionStructure';
import './newPetsSection.css';

const NewPetsSection = () => {
    return (
        <SectionStructure
        className='new-pets'>
            <TitleBlock 
            title='Ellos son los nuevos miembros de nuestra familia'/>
            <div className='cards-container'>
            <Card />
            <Card />
            </div>
            <div className=''></div>
        </SectionStructure>
    )
}
export default NewPetsSection;