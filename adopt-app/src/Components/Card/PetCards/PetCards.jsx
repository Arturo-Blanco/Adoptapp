import { React, useState } from 'react';
import { useModal } from '../../Modales/useModal';
import Modal from '../../Modales/Modal'
import Formulario from '../../Formularios/Formulario';
import Card from '../Card';

const PetCards = ({ petList }) => {

    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [selectPetId, setSelectPetId] = useState(null);
    const [selectPetName, setSelectPetName] = useState(null);

    return (
        <>
            {petList.map(pet => (
                <Card
                    id={pet.id}
                    key={pet.id}
                    petImg={pet.urlImg}
                    description={pet.description}
                    name={pet.name}
                    sex={pet.sex}
                    age={pet.age}
                    attribute={pet.attributes.map((attribut) => (
                        <li key={attribut.attribut.id}>{attribut.attribut.attribut}</li>
                    ))}
                    location={pet.city}
                    onClick={() => { setSelectPetId(pet.id); setSelectPetName(pet.name); openModal1() }}
                    interested={pet.interested > 0 ? `${pet.interested} interesados`
                        : '0 interesados'}
                >
                </Card>
            ))}
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <div className='modal-title'>
                    <p>Le interesa adoptar a {selectPetName}.</p>
                    <p>Complete el formulario con sus datos y nos comunicaremos a la brevedad.</p>
                </div>
                <Formulario petId={selectPetId} closeModal1={closeModal1}></Formulario>
            </Modal>
        </>
    )
};

export default PetCards;