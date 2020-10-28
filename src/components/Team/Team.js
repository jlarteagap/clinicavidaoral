import React from 'react';
import Layout from '../Layout'
import './Team.css';

export default function Team(){
    return(
        <Layout>
            <h2 className="title">EQUIPO HUMANO</h2>
            <p>La Clínica Vida Oral  cuenta con un equipo de profesionales altamente capacitados en el área, distinguidos en distintos países y preparados para lograr un vínculo con el paciente y que supere sus expectativas.</p>

            <div className="card">
                <h3 className="title">Alina Peralta Calvimontes</h3>
                <p className="description">Directora General</p>
                <p>Graduada de la U.M.S.S. Especialista en Cirugía y Traumatología Bucomaxilofacial realizada en el Hospital San Roque de Gonnet de la ciudad de la Plata, Argentina.
                </p>
                <p>Becada por la D.A.A.D. (Deutscher Akademischer Austauschdienst) Colonia Alemania y  cursante en países como Chile, Brasil y EEUU. Ex docente de la UMSS, dictante de cursos y seminarios de post grado a nivel Nacional e Internacional.</p>
                <p>Fundadora de la Sociedad Boliviana de Cirugía Bucomaxilofacial regional Cochabamba.
                Actual Presidente de la Sociedad Boliviana de Cirugía y Traumatología Buco Maxilo Facial.
                Miembro de A.L.A.C.I.B.U.</p>
            </div>
            <div className="card">
                <h3 className="title">Dr. Carlos Achá</h3>
                <p className="description">Cirujano Maxilofacial</p>
                <p>Egresado de la U.M.S.S. Cirujano Maxilo Facial con especialidad  realizada en San Pablo – Brasil  y más de 30 años de experiencia.</p>
                <p>Actualmente docente de Cirugía en la Universidad Mayor de San Simón.</p>
                <p>Miembro de la Sociedad Boliviana de Cirugia y Traumatologia  Maxilo Facial.</p>
            </div>
            <div className="card">
                <h3 className="title">Dr. David López</h3>
                <p className="description">Cirujano Bucal</p>
                <p>Odontólogo egresado de la Universidad Mayor de San Simón. Con especialidad en cirugía bucal y actualmente docente de la UPAL. Diplomado en Implantologia y Rehabilitacion.</p>
                <p>Miembro adherente de la sociedad boliviana de cirugía maxilofacial, regional Cochabamba</p>
            </div>
            <div className="card">
                <h3 className="title">Dr. Luis Porcel</h3>
                <p className="description">Cirujano Bucal</p>
                <p>Odontólogo egresado de la Universidad Mayor de San Simón. Diplomado en Implantologia y Cirugia Maxilo Facial. Con una amplia experiencia en intervenciones quirúrgicas  realizadas en el Hospital Viedma.</p>
            </div>
            <div className="card">
                <h3 className="title">Dr. Julio Villarroel</h3>
                <p className="description">Cirujano General y Maxilofacial</p>
                <p>Medico- Odontologo Egresado de  la U.M.S.S. con especializacion de Cirugia General en Buenos Aires Argentina y Maxilo Facial en Londres Inglaterra.  Actualmente docente de Semiologia en U.M.S.S .</p>
                <p>Miembro de la Sociedad Boliviana de Cirugia General y Traumatologia Maxilo Facial.</p>
            </div>
            <div className="card">
                <h3 className="title">Dr. Paul Sainz</h3>
                <p className="description">Especialista en Ortodoncia</p>
                <p>Odontologo egresado de la Universidad San Francisco Xavier de Chuquisaca y realizada la Especialidad de Ortodoncia y Ortopedia funcional de los Maxilares en la Universidad de Moron Buenos Aires Argentina</p>
            </div>
            <div className="card">
                <h3 className="title">Dr. Javier Cabrera</h3>
                <p className="description">Médico Cirujano</p>
                <p>Médico Cirujano Egresado de la U.M.S.S. Asesor de Vida Oral Santa Cruz</p>
            </div>
        </Layout>
    )
}