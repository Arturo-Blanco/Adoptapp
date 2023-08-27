import React from 'react';
import CardReason from './CardReason/CardReason';

function Razones() {
return (
    <>
    <div>
        <CardReason
        title='¿Por qué adoptar?'
        subtitle='Contamos con 10 razones para que adoptar sea la mejor eleccion'
        imageUrl='https://images.pexels.com/photos/17822570/pexels-photo-17822570/free-photo-of-cama-habitacion-mono-animales.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <CardReason
        title='1.Evita la superpoblación'
        body='Al adoptar se contribuye a reducir la superpoblación, ya que si se compra una mascota se quita la oportunidad 
        de brindarle el refugio y cariño a una mascota de la calle indefensa'
        subtitle='2.Una vida no tiene precio'
        body2=' Los animales sienten y sufren, por tanto deberíamos abandonar el pensamiento de ver a una mascota como un producto
        que se consigue a cualquier precio.
        Al comprar una se afianza sobre la creencia de poder mercantilizar animales sin importar su integridad'
        imageUrl='https://images.pexels.com/photos/662417/pexels-photo-662417.jpeg?auto=compress&cs=tinysrgb&w=600'
        />   
        <CardReason
        title='3.Estarás ayudando a otro animal de la calle'
        body='Las personas que se llevan a un gato o perro de un refugio animal, colaboran con el rescate de otros animales,
        ya que estos centros de adopcion renuevan un espacio para otro animales que estén en peligro o abandono'
        subtitle='4.No se incita a la venta animal'
        body2='La comercializacion animal fortalece el maltrato y trafico animal. 
        Quienes organizan esto, no respetan el ciclo de reproducción de las hembras,                 
        lo que produce problemas en el desarrollo de la vida de los propios animales'
        imageUrl='https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <CardReason
        title='5.Los animales de refugio no son agresivos'
        body='Los animales al convivir con personas y con otros de su especie, 
        se vuelven mas tolerantes y pacíficos, mas allá de que cada mascota tiene su propio caracter'
        subtitle='6.Variedad de opciones'
        body2='Se puede escoger de diferentes tamaños y edades, de acuerdo al gusto, el tiempo, 
        paciencia y experiencia propia'
        imageUrl='https://images.pexels.com/photos/2698519/pexels-photo-2698519.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <CardReason
        title='7.Son los animales más cariñosos'
        body='Ellos reconocen quién les quiere y agradecen esta oportunidad, por esta razón 
        estos animalitos serán los más fieles'
        subtitle='8.Adoptarás a una mascota sola'
        body2='Los refugios en la mayoría de los casos se responsabilizan de tener a los animales 
        lo mas saludable posible para que el adoptante no tenga dificultades o dudas a la hora de llevarse 
        una mascota a sus hogares'
        imageUrl='https://images.pexels.com/photos/1364729/pexels-photo-1364729.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <CardReason
        title='9.Encontrarás un compañero único'
        body='Los animales tienen una sensibilidad especial y sienten nuestras vibras y energias;
        la mascota se amoldará al dueño y también imitará algunas actitudes nuestras'
        subtitle='10.Ayudarás al desarrollo del refugio'
        body2='Al adoptar en estos lugares, ayudamos en gran manera, ya que estos verán el apoyo
        y las miradas de las personas; además esto también le permite alojar a nuevos animales que lo necesiten'
        imageUrl='https://images.pexels.com/photos/7149465/pexels-photo-7149465.jpeg?auto=compress&cs=tinysrgb&w=600'/>
    </div>
    </>
)
}

export default Razones;