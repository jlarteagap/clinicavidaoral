import { Link } from 'gatsby'
import React from 'react'
import Layout from '../Layout'

export default function Especialidades(){
    return(
        <Layout>
            <h2 className="title">Especialidades</h2>
            <p>Vida oral es una clinica completa donde su principal Fortaleza radica en la CIRUGIA BUCO-MAXILO-FACIAL complementando el servicio con otras especialidades.</p>

            <div className="card">
                <h3 className="title">Cirugía BucoMaxilofacial</h3>

                <p>La cirugía y traumatología bucomaxilofacial es una Especialidad quirúrgica que incluye el diagnostico, prevención, cirugía y tratamiento relacionados de un gran espectro de enfermedades, heridas, aspectos estéticos y congénitos de la cavidad oral, dientes, maxilares, cara, cabeza y cuello.</p>
                <Link to="/buco-maxilofacial" className="btn btn--primary">Más información</Link>
            </div>
            <div className="card">
                <h3 className="title">Implantología</h3>
                <p>VIDA ORAL al ser una clinica de Alta Formacion  Quirurgica posee  el conocimiento y destreza requerida para resolver problemas desde los mas simples hasta los mas complejos  y por consiguiente la capacidad de COLOCAR IMPLANTES CON EXITO reduciendo asi el riesgo de complicaciones y GARANTIZANDO UNA LARGA VIDA UTIL.</p>
                <p>La pérdida de los dientes y la falta de reposición de los mismos provoca una serie de alteraciones: pérdida de equilibrio en la posición y fuerza del aparato masticador, dolores en las articulaciones temporomandibulares, dolores a nivel de la musculatura cervico-facial, cefaleas y movimientos patológicos de los dientes vecinos</p>
                <Link to="/implantes" className="btn btn--primary">Más información</Link>
                
            </div>
            <div className="card">
                <h3 className="title">Odontología General</h3>
                <p>Se refiere a los tratamientos basicos para mantener las piezas dentarias utiles como ser restauraciones con recinas de nanoparticulas que son mucho mas resistentes ademas de tener la particularidad de adecuarse esteticamente a cualquier caso.</p>
                <p>Tambien utilizamos sistemas de prevencion para evitar perdida de piezas dentarias en los adultos.</p>
                <Link to="/ortodoncia" className="btn btn--primary">Más información</Link>

            </div>
        </Layout>
    )
}