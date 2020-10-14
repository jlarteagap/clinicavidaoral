import React from 'react';
import Layout from '../Layout'
import './About.css';

export default function About(){
    return(
        <Layout>
            <h2 className="title">Quienes somos</h2>
            <p>Clínica <strong>VIDA ORAL</strong> es una Clínica Odontológica de <strong>ALTA COMPLEJIDAD</strong> que soluciona problemas dentales, maxilares y faciales  brindando un servicio que garantiza calidad, confiabilidad, accesibilidad y principalmente Alta Estética con tratamientos serios, importantes y complejos, utilizando equipos de alta tecnología y sistemas computarizados de alta gama</p>
            <p>La directora de la clínica es la Dra Alina Peralta y funda la Clínica Vida Oral en 1996 con el objetivo de ayudar a las personas con problemas de origen dentario y del macizo facial, mejorando de esta manera la calidad de vida.</p>
            <p>En la actualidad cuenta con un equipo de profesionales altamente capacitados en el área, distinguidos en distintos países y preparados para lograr un vínculo con el paciente que supere sus expectativas.</p>
            <p>El equipo de  Clínica Vida Oral pertenece a ALACIBU (Asociación Latinoamericana De Cirugía Y Traumatología Bucomaxilo Facial)</p>

            <div className="">
                <div className="">Misión
                Somos una clinica de alta especialidad y nuestro accionar está orientado a resolver problemas complejos concernientes a la salud bucomaxilofacial</div>
                <div className="">
                Visión
                Convertirnos en una de las mejores clínicas de cirugía bucomaxilofacial de nuestro país.
                </div>
                <div className="">
                Política
                Realizar nuestras actividades con excelencia y profesionalidad, respetando las normas instituidas y superando las expectativas de nuestros pacientes.
                </div>
            </div>
            <h3 className="title">Modernidad y profesionalismo</h3>
            <p>Nuestros ambientes están diseñados de una manera agradable, natural y moderna, con equipos nuevos de tecnologia brasilera , alemana y japonesa de última generación. De manera que nuestros pacientes se sientan cómodos y relajados.</p>
            <p>Nuestra calidad esta plasmada en el factor humano de nuestra clínica, el cual estará a su servicio teniendo mucho cuidado  en la efectividad del tratamiento y la  bioseguridad que se necesita. Nuestros consultorios estan normalizados dentro de las recomendaciones de la OMSS (Organización Mundial de la Salud)</p>
        </Layout>
    )
}