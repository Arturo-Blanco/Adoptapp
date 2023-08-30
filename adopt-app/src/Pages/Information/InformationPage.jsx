import InformationCard from 'Components/Card/InformationCard/InformationCard';
import PageStructure from 'Components/PagesStructure/PagesStructure';
import './informationPage.css';

const InformationPage = () => {
    return (
        <PageStructure classNamePage='information'
            titlePage="Información General"
            sectionPage={ <>
                <InformationCard
                    title='Hiking con mascotas en el Lago Escondido'
                    imageUrl='https://media.istockphoto.com/id/1209875463/es/foto/hermosa-mujer-viajera-sube-cuesta-arriba-con-un-perro-sobre-un-fondo-de-vistas-a-la-monta%C3%B1a.jpg?s=612x612&w=0&k=20&c=hmf5kF434PChMqwownYDwY-ZwJA5PvsqNN5cvHZCe6M='
                    body='Próximamente se abriran las fechas de inscripción para residentes de la provincia'
                />
                <InformationCard
                    title='Continua la campaña de vacunación'
                    imageUrl='https://media.istockphoto.com/id/1136617178/es/foto/perro-beagle-est%C3%A1-parado.jpg?s=612x612&w=0&k=20&c=OyOaKCy0ku8cKYwG1aE3zOR1Xn-E1rmryTvyhy3D9os='
                    body='Próximamente se abriran las fechas de inscripción para residentes de la provincia'
                />
                <InformationCard
                    title='Encontrá las veterinarias de turno'
                    imageUrl='https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=600'
                    body='Están presentes las guardias activas en cada ciudad de Tierra del Fuego'
                />
                <InformationCard
                    title='Cinco tips para la higiene de tu felino'
                    imageUrl='https://media.istockphoto.com/id/534918347/es/foto/m%C3%A9dico-y-un-gato-brit%C3%A1nico-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=_iqWSW-y5hg7Nioqw9bPzyHYcv8KTl_Ybm7RpWF7ZS8='
                    body='Tenemos unos pequeños consejos para que tu gato tenga una mejor salud'
                />
                </> }
        />
    )
};
export default InformationPage;