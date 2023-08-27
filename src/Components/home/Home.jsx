import HomeQuestions from './HomeQuestions/HomeQuestions';
import HomeRequirement from './HomeRequirement/HomeRequirement';
import NewPetsSection from './HomeSections/NewPetsSection/NewPetsSection';
import InformationSection from './HomeSections/InformationSection/InformationSection';
import './home.css';
import MatchSection from './HomeSections/MatchSection/MatchSection';

const Home = () => {
    return(
        <main className='main-container'>
            <HomeRequirement/>
            <HomeQuestions/>
            <NewPetsSection/>
            <InformationSection/>
            <MatchSection />
        </main>
    )
};





    
export default Home;
