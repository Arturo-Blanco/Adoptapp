import DonationForm from 'Components/Forms/DonationForm/DonationForm';
import './donationPage.css';

const DonationPage = () => {
    return (
        <main className='donacionMain'>
            <div className='titulo'>
                    <h2>Sé parte de la familia Adoptapp</h2>
            </div>
            <div className='formContainer'>
                <DonationForm/>
                <div className='info'>
                    <p>Si te gustaria colaborar economicamente a continuacion te compartimos nuestra información bancaria donde podras colaborar para que podabos comprar alimentos, medicamentos, pagar cirugias, etc.</p>
                    <p id='CBU'>CBU: 0290102901</p>
                    <p id='Alias'>Alias: Adoptapp</p>
                </div>        
            </div>
            <div className='donadoresContainer'>
                <div className='text'><h2>Ya colaboraron con nosotros</h2></div>
                <div className='imagenes'>
                    <img src='https://ushuaia24.com.ar/download/multimedia.normal.bbee6f484f2a9f35.7a6f6f6e6f73697320656e20616e646f7272615f6e6f726d616c2e6a7067.jpg' alt='donacion'></img>
                    <img src='https://www.team-creatif.com/wp-content/uploads/2019/08/pedigree-1-e1566425282300.jpg' alt='donacion'></img>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFYsU48JtgaYZxF3hktiUrpafguciZIdYvWpHnBoIvitTf2PT4cx5cjC16pjIO-qW8Gw&usqp=CAU' alt='donacion'></img>
                </div>
            </div>  
            <aside className='infoAside'>
                <p>Somos una organizacion sin fines de lucro enfocada en el cuidado, crianza y acompañamiento a todas las mascotas. Recorda que en caso de consultas o sugerencias podes comunicarte con nosotros a traves de los contactos brindados, en el pie de página. Tu ayuda siempre sera agradecida.</p>
            </aside>
        </main>
    )
};

export default DonationPage;