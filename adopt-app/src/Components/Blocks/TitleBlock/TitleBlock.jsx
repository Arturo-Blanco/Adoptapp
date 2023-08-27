import './titleBlock.css';

const TitleBlock = (props) => {
    return (
        <div className="title-section-container">
            <h3 className="title-section-block">
                {props.title}
            </h3>
        </div>
    )
}
export default TitleBlock;