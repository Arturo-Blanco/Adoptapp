import './sectionStructure.css';

const SectionStructure = (props) => {
    return (
        <section className={`${props.className} section-structure`}>
            {props.children}
        </section>
    )
}
export default SectionStructure;