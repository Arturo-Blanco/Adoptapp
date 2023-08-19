import InformationtArticle from './Articles/InformationArticle/InformationArticle';
import RequirementArticle from './Articles/RequirementArticle/RequirementArticle';
import './home.css';

const Home = () => {
    return(
        <main className='container'>
            <RequirementArticle/>
            <InformationtArticle/>
        </main>
    )
};

export default Home;
