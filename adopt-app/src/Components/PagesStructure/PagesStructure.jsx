import TitleBlock from "Components/Blocks/TitleBlock/TitleBlock";

const PageStructure = ({ classNamePage, asidePage, sectionPage, childrenPage, titlePage }) => {
    return (
        <main className={`${classNamePage} main`}>
            <TitleBlock
                title = {titlePage}
            />
            {asidePage ? (
            <aside className={`${classNamePage} aside`}>
            {asidePage}
            </aside>
            ) : null }
            {sectionPage ? (
            <section className={`${classNamePage} content`}>
            {sectionPage && sectionPage}
            </section>
            ) : null }
            {childrenPage}
        </main>
    )
}
export default PageStructure;