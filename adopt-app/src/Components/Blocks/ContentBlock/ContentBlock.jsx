import './contentBlock.css'

const ContentBlock = (props) => {

    const { className, title, children, url, alt} = props

    return (
            <div className={`${className} block-container`}>
                <div className={`${className} block-text`}>
                    <h3 className={`${className} block-title`}>
                        {title}
                    </h3>
                    {children}
                </div>
                <div className={`${className} block-img-container`}>
                    <img className={`${className} block-img`}src={url} alt={alt} />
                </div>
            </div>
    )
}
export default ContentBlock;