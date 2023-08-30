import DonationForm from 'Components/Forms/DonationForm/DonationForm';
import './donationPage.css';
import PageStructure from 'Components/PagesStructure/PagesStructure';
import TitleBlock from 'Components/Blocks/TitleBlock/TitleBlock';
import DonationCard from 'Components/Card/DonationCard/DonationCard';

const DonationPage = () => {

    const colaborators = [
        { urlImg : 'https://plazavea.vteximg.com.br/arquivos/PEDIGREE_logo.jpg?v=637441643591330000'},
        { urlImg : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/La_anonima_logo.svg/1200px-La_anonima_logo.svg.png'},
        { urlImg : 'https://e7.pngegg.com/pngimages/347/142/png-clipart-logo-telmex-mobile-phones-font-aol-logo-text-logo.png' },
        { urlImg : 'https://img2.freepng.es/20180716/kjh/kisspng-logo-photography-photoblog-clip-art-emojis-sin-fondo-5b4c6d17134227.0162602215317353190789.jpg'}
    ]

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
            </>}
            childrenPage={<>
                <TitleBlock title="Nuestros colaboradores" />
                <div className='colaborators-content'>
                    {colaborators.map((colaborator, index)=> (
                        <DonationCard
                            key={index}
                            urlImg={colaborator.urlImg}/>
                    ))}
                </div>
                
            </>}
        />
    )
};

export default DonationPage;