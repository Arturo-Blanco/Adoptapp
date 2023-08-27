import './titleBlock.css';

const TitleBlock = (props) => {
    return (
        <div className="title-container">
            <h3 className="title-block">
                {props.title}
            </h3>
        </div>
    )
}
export default TitleBlock;