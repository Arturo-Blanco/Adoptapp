import TitleBlock from "Components/Blocks/TitleBlock/TitleBlock";
import './pageStructure.css'

const PageStructure = ({ classNamePage, asidePage, sectionPage, childrenPage, titlePage }) => {
    return (
        <main className={`${classNamePage} main-page`}>
            <TitleBlock
                title = {titlePage}
            />
            {asidePage ? (
            <aside className={`${classNamePage} aside-page`}>
            {asidePage}
            </aside>
            ) : null }
            {sectionPage ? (
            <section className={`${classNamePage} content-page`}>
            {sectionPage && sectionPage}
            </section>
            ) : null }
            {childrenPage}
        </main>
    )
}
export default PageStructure;