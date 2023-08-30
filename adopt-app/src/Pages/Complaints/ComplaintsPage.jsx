import PageStructure from "Components/PagesStructure/PagesStructure";
import DonationForm from "Components/Forms/DonationForm/DonationForm";
import TitleBlock from "Components/Blocks/TitleBlock/TitleBlock";
import InformationCard from "Components/Card/InformationCard/InformationCard";
import './complaintsPage.css';

const ComplaintsPage = () => {

    const complaints = [
        { urlImg: 'https://www.elespectador.com/resizer/X0hDCeSGTTKyJlD-YOFtPczYaSI=/631x420/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/WFG2DWO6ZNGMJNXHVT4SCNII2Y.jpeg', title: 'No al maltrato', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { urlImg: 'https://notasdemascotas.com/wp-content/uploads/2020/05/70-perros-rescatados-de-una-granja.jpg', title: 'No al maltrato', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { urlImg: 'https://proyecto13.com/up-p13/uploads/2020/04/WhatsApp-Image-2020-04-21-at-12.43.54-2.jpeg', title: 'No al maltrato', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
        { urlImg: 'https://images.hola.com/imagenes/estar-bien/20190115135374/california-ley-venta-mascotas-gt/0-634-831/perros-ley-california-t.jpg?tx=w_680', title: 'No al maltrato', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
    ]
    return (
        <PageStructure classNamePage='complaints'
            titlePage="Ayudanos a proteger a los peluditos"
            asidePage={<p>En Adoptapp nos comprometemos con la seguridad y proteccion de las mascotas es por  ello que disponemos de una sección exclusiva donde podrás reportar
                abandonos, maltratos,
                extravíos, etc. Solo debes completar el formulario con el tipo de denuncia, un contacto para recibir información imagen y descripción del suceso y nuestro equipo informará la
                situación a las autoridades.
            </p>}
            sectionPage={<>
                <div className='complaints-form-content'>
                    <DonationForm />
                </div>
            </>}
            childrenPage={<>
                <TitleBlock title="Hechos recientes" />
                <div className='complaints-content'>
                    {complaints.map((complaint, index) => (
                        <InformationCard
                            key={index}
                            imageUrl={complaint.urlImg}
                            title={complaint.title}
                            body={complaint.content} />
                    ))}
                </div>

            </>}
        />
    )
}
export default ComplaintsPage;