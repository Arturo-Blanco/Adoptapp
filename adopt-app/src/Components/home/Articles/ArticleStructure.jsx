import './articleStructure.css'

const ArticleStructure = (props) => {
    return (
        <article className={`article ${props.className}`}>
            <div className={`container ${props.className}`}>
                <div className={`text ${props.className}`}>
                    <h3 className={`title ${props.className}`}>
                        {props.title}
                    </h3>
                    {props.children}
                </div>
                <div className={`img-div ${props.className}`}>
                    <img className={`img ${props.className}`}src={props.url} alt={props.alt} />
                </div>
            </div>
        </article>
    )
}
export default ArticleStructure;