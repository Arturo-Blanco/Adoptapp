import HomeQuestions from '../../Components/home/HomeQuestions/HomeQuestions';
import HomeRequirement from '../../Components/home/HomeRequirement/HomeRequirement';
import NewPetsSection from '../../Components/home/HomeSections/NewPetsSection/NewPetsSection';
import InformationSection from '../../Components/home/HomeSections/InformationSection/InformationSection';
import './home.css';
import MatchSection from '../../Components/home/HomeSections/MatchSection/MatchSection';

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
