import DonationForm from 'Components/Forms/DonationForm/DonationForm';
import './donationPage.css';
import PageStructure from 'Components/PagesStructure/PagesStructure';

const DonationPage = () => {
    return (
        <PageStructure classNamePage='donation'
            titlePage="Sé parte de la familia Adoptapp"
            asidePage={<p>Somos una organización sin fines de lucro enfocada en el cuidado, crianza y acompañamiento de todas las mascotas. Recordá que en caso de consultas o sugerencias podés comunicarte con nosotros a través de los contactos brindados en el pie de página. Tu ayuda siempre será agradecida.</p>}
            sectionPage={<>
                <div className='donation-form-content'>
                    <DonationForm />
                    <div className='form-info'>
                        <p className='p-form-info'>Si te gustaría colaborar económicamente a continuación te compartimos nuestra información bancaria, donde podrás colaborar para que podamos comprar alimentos, medicamentos, pagar cirugias y demás gastos que impliquen los cuidados de nuestros amigos peluditos.</p>
                        <div className='p-data-info'>
                            <p id='CBU'>CBU: xxxxxxxxxxxxxxxx</p>
                            <p id='Alias'>Alias: Adoptapp</p>
                        </div>
                    </div>
                </div>
                <div className='colaborators'>
                    <div className='colaborators-text'>
                        <h2 className='colaborators-title'>Ya colaboraron con nosotros</h2>
                        <p className='colaborators-p'>Su apoyo ha hecho posible un cambio real en la vida de las mascotas necesitadas. Gracias por su generosidad y compromiso. Los invitamos a seguir sumando fuerzas y a invitar a otros a unirse a esta causa. Juntos, podemos lograr aún más.</p>
                    </div>
                    <div className='colaborators-img'>
                        <div className='colaborators-slider'>
                            <img className='colaborator-img' src='https://ushuaia24.com.ar/download/multimedia.normal.bbee6f484f2a9f35.7a6f6f6e6f73697320656e20616e646f7272615f6e6f726d616c2e6a7067.jpg' alt='colaborators '></img>
                            <img className='colaborator-img' src='https://www.team-creatif.com/wp-content/uploads/2019/08/pedigree-1-e1566425282300.jpg' alt='colaborators '></img>
                            <img className='colaborator-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFYsU48JtgaYZxF3hktiUrpafguciZIdYvWpHnBoIvitTf2PT4cx5cjC16pjIO-qW8Gw&usqp=CAU' alt='colaborators '></img>
                        </div>
                    </div>
                </div>
            </>}
        />
    )
};

export default DonationPage;